import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useDispatch } from 'react-redux';

import { updateStyle, getPosts } from '../../actions/posts';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        align: "center"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 400,
        marginTop: 6,
    },
    paper1: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 400,
        height: 204,
        background: 'white',
        color: 'white',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    large: {
        width: 128,
        height: 128,
    },
    userInfo: {
        marginTop: 5,
    },
    content: {
        marginTop: 35,
    },
    content1: {
        marginTop: 0,
        color: 'black'
    },
    buttonUse: {
        marginLeft: '10rem',
    },
    vertical: {
        border: '0.05em solid black',
        margin: '2px',
        opacity: '0.2',
        marginRight: '5px'
    },
    icon: {
        color: 'black'
    },
    container: {
        marginTop: 10,
    }

}));

const CardTemplate = ({ currentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        dispatch(updateStyle(currentId, { defaultStyle: 'new'}));
    
      };
    const handleSubmit1 = async (e) => {
        e.preventDefault();

        dispatch(updateStyle(currentId, { defaultStyle: 'default'}))
    }
    
      useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
    return (
        <>
            <Paper className={classes.paper1} align="center">
                <Grid container spacing={2} className={classes.container}>
                    <Grid item>
                        <Avatar alt="John Doe" src="https://source.unsplash.com/random" className={classes.large} />
                    </Grid>
                    <div className={classes.vertical} />
                    <Grid item xs={12} sm={6} container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs className={classes.content1}>
                                <Typography variant="body2" component="p" align="center">
                                    John Doe
                                </Typography>
                                <Typography variant="body2" component="p" align="center">
                                    Web Developer
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    09323454566
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    test@testing.com
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <TwitterIcon className={classes.icon} />&nbsp;
                                    <LinkedInIcon className={classes.icon} />&nbsp;
                                    <FacebookIcon className={classes.icon} />&nbsp;
                                    <GitHubIcon className={classes.icon} />&nbsp;
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <Button variant="contained" type="submit" >Use Template</Button>
                </form>
            </Paper>

            <Paper className={classes.paper} align="center">
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar alt="John Doe" src="https://source.unsplash.com/random" className={classes.large} />
                        <div className={classes.userInfo}>
                            <Typography variant="body2" component="p" align="center">
                                John Doe
                            </Typography>
                            <Typography variant="body2" component="p" align="center">
                                Web Developer
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs className={classes.content}>
                                <Typography gutterBottom variant="body2">
                                    09323454566
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    test@testing.com
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <TwitterIcon />&nbsp;
                                    <LinkedInIcon />&nbsp;
                                    <FacebookIcon />&nbsp;
                                    <GitHubIcon />&nbsp;
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <form onSubmit={handleSubmit1}>
                    <Button variant="contained" type="submit" >Use Template</Button>
                </form>
            </Paper>
        </>
    )
}

export default CardTemplate;

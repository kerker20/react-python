import React, { useState, useEffect } from 'react';
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
import EditIcon from '@material-ui/icons/Edit';

import { getPosts, updatePost } from '../../actions/posts'

import CardTemplate from '../../components/CardTemplate/CardTemplate';

import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    align: "center"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 400,
  },
  paper1: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 400,
    height: 226,
    background: 'white',
    color: 'black'
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
    marginTop: 1,
  },
  content: {
    marginTop: 40,
  },
  content1: {
    marginTop: 0,
  },
  buttonUse: {
    marginLeft: '10rem',
  },
  vertical: {
    border: '0.05em solid black',
    margin: '2px',
    opacity: '0.1',
    marginRight: '5px'
  },
  icon: {
    color: 'black'
  },
  container: {
    marginTop: 10,
  },
  nameOnEdit: {
    border: 0,
    outline: 0,
    fontSize: '14px',
    margin: 0,
    padding: 0,
    width: '100px',
    opacity: 1,
    backgroundColor: 'transparent',

  },
  nameOnEditContent: {
    border: 0,
    outline: 0,
    fontSize: '14px',
    margin: 0,
    width: '120px',
    padding: 0,
    opacity: 1,
    backgroundColor: 'transparent',
  },
  saved: {
    fontSize: '20px',
    color: 'green', 
    opacity: 0.8
  },
  ripple: {
    marginLeft: 80,
    opacity: 0.6,
    fontSize: '20px'
  },
  placeholder: {
    color: 'white',
  }

}));


const CardCustom1 = ({ post, currentIdClick, currentId, setCurrentId, setCurrentIdClick }) => {
  const [open, setOpen] = useState(false);
  const [postDatas, setPostDatas] = useState({ firstname: '', lastname: '',  position: '', number: '', email: '', defaultStyle: `${post.defaultStyle}`});
  const [postDatas1, setPostDatas1] = useState({ firstname: '', lastname: '',  position: '', number: '', email: '', defaultStyle: `${post.defaultStyle}`});

  const handleClickOpen = () => {
    setOpen(true);
    setCurrentId(post._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentIdClick, dispatch]);

  const clear = () => {
    setCurrentIdClick(0);
    setPostDatas({ firstname: '', lastname: '', position: '', number: '', email: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updatePost(currentIdClick, postDatas));
    clear();

  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();

    dispatch(updatePost(currentIdClick, postDatas1));
    clear();

  };

  return (
    <>
     <Dialog
        fullWidth="md"
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional Design Signature</DialogTitle>
        <DialogContent justifyContent="center" align="center" alignItems="center">
          <DialogContentText>
            Choose a template for your created signatures 
          </DialogContentText>
          <CardTemplate currentId={currentId}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.root}>
        {post.defaultStyle === "new" ? (

          <Paper className={classes.paper1} align="center">
             <form autoComplete="off" onSubmit={handleSubmit1}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item>
                <Avatar alt="John Doe" src={post.selectedFile} className={classes.large} onClick={handleClickOpen} />
              </Grid>
              <div className={classes.vertical} />
              <Grid item xs={12} sm={6} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs className={classes.content1}>
                    <Typography variant="body2" component="p" align="center">
                    <input className={classes.nameOnEdit} spellcheck="false" type="text" name="firstname" onClick={() => setCurrentIdClick(post._id)} placeholder={post.firstname} onChange={(e) => setPostDatas1({ ...postDatas1, firstname: e.target.value })}/>
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                      <input className={classes.nameOnEdit} spellcheck="false" type="text" name="lastname" onClick={() => setCurrentIdClick(post._id)} placeholder={post.lastname} onChange={(e) => setPostDatas1({ ...postDatas1, lastname: e.target.value })}/>
                  </Typography>
                    <Typography variant="body2" component="p" align="center">
                    <input className={classes.nameOnEditContent} spellcheck="false" type="text" name="position" onClick={() => setCurrentIdClick(post._id)} placeholder={post.position} onChange={(e) => setPostDatas1({ ...postDatas1, position: e.target.value })}/>
                    </Typography>
                    <Typography gutterBottom variant="body2">
                    <input className={classes.nameOnEditContent} spellcheck="false" type="text" name="number" onClick={() => setCurrentIdClick(post._id)} placeholder={post.number} onChange={(e) => setPostDatas1({ ...postDatas1, number: e.target.value })}/>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    <input className={classes.nameOnEditContent} spellcheck="false" type="text" name="email" onClick={() => setCurrentIdClick(post._id)} placeholder={post.email} onChange={(e) => setPostDatas1({ ...postDatas1, email: e.target.value })}/>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <TwitterIcon className={classes.icon} />&nbsp;
                      <LinkedInIcon className={classes.icon} />&nbsp;
                      <FacebookIcon className={classes.icon} />&nbsp;
                      <GitHubIcon className={classes.icon} />&nbsp;
                    </Typography>
                  </Grid>
                </Grid>
                <Button type="submit" variant="outlined" className={classes.ripple}><EditIcon /></Button>
              </Grid>
            </Grid>
            </form>
          </Paper>

        ) : (

          <Paper className={classes.paper} align="center">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar alt="" src={post.selectedFile} className={classes.large}  onClick={handleClickOpen} />
                <div className={classes.userInfo}>
                  <Typography variant="body2" component="p" align="center">
                     <input className={classes.nameOnEdit} spellcheck="false" type="text" name="firstname" onClick={() => setCurrentIdClick(post._id)} placeholder={post.firstname} onChange={(e) => setPostDatas({ ...postDatas, firstname: e.target.value })}/>
                  </Typography>
                  <Typography variant="body2" component="p" align="center">
                      <input className={classes.nameOnEdit} spellcheck="false" type="text" name="lastname" onClick={() => setCurrentIdClick(post._id)} placeholder={post.lastname} onChange={(e) => setPostDatas({ ...postDatas, lastname: e.target.value })}/>
                  </Typography>
                  <Typography variant="body2" component="p" align="center">
                  <input className={classes.nameOnEditContent} spellcheck="false" type="text" name="position" onClick={() => setCurrentIdClick(post._id)} placeholder={post.position} onChange={(e) => setPostDatas({ ...postDatas, position: e.target.value })}/>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs className={classes.content}>
                    <Typography gutterBottom variant="body2">
                    <input className={classes.nameOnEditContent} spellcheck="false" type="text" name="number" onClick={() => setCurrentIdClick(post._id)} placeholder={post.number} onChange={(e) => setPostDatas({ ...postDatas, number: e.target.value })}/>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    <input className={classes.nameOnEditContent} spellcheck="false" type="text" name="email" onClick={() => setCurrentIdClick(post._id)} placeholder={post.email} onChange={(e) => setPostDatas({ ...postDatas, email: e.target.value })}/>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <TwitterIcon />&nbsp;
                      <LinkedInIcon />&nbsp;
                      <FacebookIcon />&nbsp;
                      <GitHubIcon />&nbsp;
                    </Typography>
                  </Grid>
                </Grid>
                <Button type="submit" variant="outlined" className={classes.ripple}><EditIcon /></Button>
              </Grid>
            </Grid>
            </form>
          </Paper>

        )}

      </div>
    </>
  );
}

export default CardCustom1;

import React from 'react'
import { Paper, Card, Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader: {
        padding: theme.spacing(2),
        display: 'flex',
        marginBottom: theme.spacing(3),
        alignItems: 'center',
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1',
        borderRadius: '12px'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: 0.6
        }

    }
}))

const PageHeader = ({ title, subtitle, icon }) => {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={0} square className={classes.root}>
              <div className={classes.pageHeader}>
                  <Card className={classes.pageIcon}>
                    {icon}
                  </Card>
                  <div className={classes.pageTitle}>
                      <Typography variant='h6' component='div'>
                        {title}
                      </Typography>
                      <Typography variant='subtitle2' component='div'>
                        {subtitle}
                      </Typography>
                  </div>
              </div>
            </Paper>
        </div>
    )
}

export default PageHeader;
import React, { useEffect, useState } from 'react';
import { Card, CssBaseline, CardContent, CardMedia, Button, Typography, Grid, Paper, ButtonBase, Avatar, TextField, CardActionArea } from '@material-ui/core/';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import CardCostumDesign from '../../CardCostumDesign/CardCostumDesign';


import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/posts';

import { deletePost,createPost,updatePost } from '../../../actions/posts';
import useStyles from './style';
  

const Post = ({ post, setCurrentId, currentId, currentIdClick, setCurrentIdClick, posts }) => {
  const [open, setOpen] = useState(false);
  const [postDatas, setPostDatas] = useState({ firstname: '', lastname: '',  position: '', number: '', email: '', selectedFile: '', defaultStyle: 'newStyle'});
  const postInfo = useSelector((state) => (currentIdClick ? state.posts.find((message) => message._id === currentIdClick) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (postInfo) setPostDatas(postInfo);
  }, [postInfo]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentIdClick, dispatch]);

  const clear = () => {
    setCurrentIdClick(0);
    setPostDatas({ firstname: '', lastname: '', position: '', number: '', email: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (currentIdClick === 0) {
      dispatch(createPost(postDatas));
      clear();
    } else {
      dispatch(updatePost(currentIdClick, postDatas));
      clear();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            Customize your signature with availble built in design 
          </DialogContentText>
          <CardCostumDesign align="center" post={post}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    <div className={classes.root}>
    <CardCostumDesign post={post} currentIdClick={currentIdClick} setCurrentIdClick={setCurrentIdClick} setCurrentId={setCurrentId}  currentId={currentId}/>
    </div>
    <CssBaseline />
    </>
  );
};

export default Post;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { getPosts } from '../../actions/posts';

import CardCostumDesign from '../CardCostumDesign/CardCostumDesign'

import useStyles from './style';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ firstname: '', lastname: '',  position: '', number: '', email: '', selectedFile: '', defaultStyle: 'default' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ firstname: '', lastname: '', position: '', number: '', email: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(postData);

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <>
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing Signatures" : "Creating Signatures"}</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField name="firstname" variant="outlined" label="Firstname" fullWidth value={postData.firstname} onChange={(e) => setPostData({ ...postData, firstname: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="lastname" variant="outlined" label="Lastname" fullWidth value={postData.lastname} onChange={(e) => setPostData({ ...postData, lastname: e.target.value })} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="position" variant="outlined" label="Position" fullWidth value={postData.position} onChange={(e) => setPostData({ ...postData, position: e.target.value })} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="number" variant="outlined" label="Mobile Number" fullWidth value={postData.number} onChange={(e) => setPostData({ ...postData, number: e.target.value })} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="email" variant="outlined" label="Email Address" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
          </Grid>
          <Grid item xs={12}>
              <div className={classes.fileInput}><FileBase className={classes.uploadHandler} type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          </Grid>
          <TextField type="hidden" name="defaultStyle" value={postData.defaultStyle} />
          <Button className={classes.buttonSubmit} variant="contained" color={currentId ? "primary" : "primary"} size="large" type="submit" fullWidth>{currentId ? <EditIcon/> : <AddIcon/>}</Button>
          <Button variant="contained" color={currentId ? "default" : "secondary"} size="large" onClick={clear} fullWidth>Clear</Button>
        </Grid>
      </form>
    </Paper>
    </>
  );
};

export default Form;

import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent, CssBaseline } from '@material-ui/core';
import CardCustom1 from '../../components/CardCustom1/CardCustom1'

const CardCostumDesign = ({ post, currentIdClick, setCurrentIdClick, currentId, setCurrentId}) => {
    return (
        <>
         <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} >
                <CardCustom1 post={post} currentIdClick={currentIdClick} setCurrentIdClick={setCurrentIdClick} currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
         </Grid>
        </>
    )
}

export default CardCostumDesign;

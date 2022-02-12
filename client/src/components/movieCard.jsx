import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {  useNavigate } from "react-router-dom";
import axios from "axios";


export default function MovieCard(props){
  let navigate = useNavigate();
    const like = ()=>{
          
        axios.post("http://localhost:3001/movies/upvote",{_id: props.movie._id ,upvote:(props.movie.upvote+1) }).then(result=>{
          // console.log(result.data.data);
          props.movie.upvote = props.movie.upvote+1;
          // setData(result.data.data[0]);
      }).catch(err=>{
          console.log(err);
      })
    }
    const dislike = ()=>{
        
      axios.post("http://localhost:3001/movies/downvote",{_id: props.movie._id ,downvote:(props.movie.downvote+1) }).then(result=>{
        // console.log(result.data.data);
        // setData(result.data.data[0]);
        props.movie.downvote = props.movie.downvote+1;
    }).catch(err=>{
        console.log(err);
    })
    }
    const redirect = ()=>{
     navigate(props.movie._id);
    }
    // console.log(props);
    return(
        <Card sx={{ width:200,maxWidth: 280,marginTop:"20px",marginLeft:"20px" }}>
          <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        
        image={"http://localhost:3001/img/"+props.movie.image}
        />
            <CardContent  onClick={()=>redirect()}>
            <Typography gutterBottom variant="h5" component="div">
                {props.movie.name}
             </Typography>

             <Typography gutterBottom  component="div">
                {props.movie.genre.join(",")}
             </Typography>




            </CardContent>
            <CardActions>
        <Button size="small" onClick={()=>like()}>{props.movie.upvote}<ThumbUpIcon></ThumbUpIcon></Button>
        <Button size="small" onClick={()=>dislike()}>{props.movie.downvote}<ThumbDownAltIcon/></Button>
      </CardActions>
        </Card>
    )
}




  
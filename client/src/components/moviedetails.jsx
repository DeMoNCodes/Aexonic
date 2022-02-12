import { Button, Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";
import Header from "./header";

export default function MovieDetails(props){
    const { _id } = useParams();

    const [data,setData] = useState([]);
    const [comment,setComment] = useState([]);
    useEffect(()=>{
        fetchAllMovies();
    },[])


    const fetchAllMovies = ()=>{
       

        axios.post("http://localhost:3001/movies",{_id}).then(result=>{
            // console.log(result.data.data);
            setData(result.data.data[0]);
        }).catch(err=>{
            console.log(err);
        })
        axios.post("http://localhost:3001/movies/comment",{movie:_id}).then(result=>{
            console.log(result.data.data);
            setComment(result.data.data);
        }).catch(err=>{
            console.log(err);
        })
        
    }
  

    
    return(
        <div>
            <Header ></Header>
            <div style={{display:"flex"}}>
            <img src={"http://localhost:3001/img/"+data.image} style={{marginLeft:"5%",marginTop:"5%"}}  width="200" height="300" />
            <div style={{marginTop:"5%",marginLeft:"30px"}}>
                <h1>{data.name}</h1>
                <p>{data.details}</p>
                Release Date : {new Date(data.relesedate).toDateString()} <br/>
                Total likes: {data.upvote}<br/>
                Total dislikes: {data.downvote} 
            </div>
            </div>

            <div style={{marginLeft:"10%",marginTop:"10px"}}>   
                {data?.genre?.map(e=> <Button style={{marginLeft:"20px"}} variant="outlined">{e}</Button>   )} 
            </div>
            <Card>
            {comment.map(e=><Comment comment={e}></Comment> )} 
           </Card>
        </div>
    )
}
import { Rating } from "@mui/material";
import React from "react";



export default function Comment(props){
    console.log(props.comment);
    return(
        <div>
            <div style={{display:"flex"}} >
             <img src={"http://localhost:3001/img/"+props.comment.userimage} style={{marginLeft:"5%",marginTop:"20px"}}  width="50" height="50" />
             <h4>{props.comment.username} <Rating name="read-only" value={props.comment.rating/2} readOnly /></h4> <br/><br/>
           
             </div>
             <p  style={{marginLeft:"9%"}}> {props.comment.review}</p>
        </div>
    )
}
import React, { useEffect } from "react";
import Header from "./header";
import MovieCard from "./movieCard";
import axios from "axios";
import { useState } from "react";
import { Button, Divider } from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default function Movie(props){
    const [data,setData] = useState([]);
    const [top,setTop] = useState([]);
    const [value,setValue] = useState(true);
    useEffect(()=>{
        fetchAllMovies();
    },[])


    const fetchAllMovies = ()=>{
        axios.post("http://localhost:3001/movies/topten",{}).then(result=>{
            setTop(result.data.data)
        }).catch(err=>{
            console.log(err);
        })
        axios.post("http://localhost:3001/movies",{}).then(result=>{
            setData(result.data.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    const change = (e)=>{
        axios.post("http://localhost:3001/movies/filter",{word:e.target.value}).then(result=>{
            setData(result.data.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    const sort = ()=>{

        axios.post("http://localhost:3001/movies/sort",{value}).then(result=>{
            setValue(value ? false:true);
            setData(result.data.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div>
           <Header change={change}></Header>
           <h3>TOP 10 Movies</h3>
           <Divider sx={{ borderBottomWidth: 5 ,backgroundColor:"black"}}></Divider>
           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr"}}>
           { top.length >0 ? top.map(e=>  <MovieCard movie={e}></MovieCard> ) :""}
           </div>
           <Divider sx={{ borderBottomWidth: 5 ,backgroundColor:"black" ,marginTop:"50px"}}></Divider>
            <div style={{display:"flex"}}>
           <h3>Movies</h3> 
           <Button size="small" onClick={()=>sort()}><ImportExportIcon></ImportExportIcon></Button></div>
           <div  style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr "}}>
           { data.length >0 ? data.map(e=>  <MovieCard movie={e}></MovieCard> ) :""}
           </div>
        </div>
    )
} 
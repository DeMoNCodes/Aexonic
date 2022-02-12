import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AppBarCustom = styled(AppBar)({
    backgroundColor:"black"
});


// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });

export default function Header(props){
  let navigate = useNavigate();
 
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBarCustom position="static"  >
          <Toolbar variant="dense">
          
            <Typography variant="h6" color="inherit" component="div" sx ={{paddingLeft:"10%"}} onClick={()=>navigate("/movie")} >
              Movies
            </Typography>
            <Typography variant="h6" color="inherit" component="div" sx ={{paddingLeft:"10%"}} >
             {props.change ? <Input sx={{backgroundColor:"white"}} onChange={e=>props.change(e)}></Input> :""}
            </Typography>
          </Toolbar>
        </AppBarCustom>
      </Box>
    )
}  





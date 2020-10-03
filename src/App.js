import React, { Fragment, useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from './api/Api'
import { Grade } from '@material-ui/icons';

function App() {
  const [matches,setMatches]=useState([]);


  useEffect(()=>{
  //  getMatches().then((data)=> console.log("DATA:", data)).catch((error)=>alert("data could not load"));
  getMatches()
  .then((data)=> {
    setMatches(data.matches)
    console.log(data.matches)
  })
  .catch((error)=>alert("data could not load"));
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <Typography variant="h3" style={{marginTop:20}}>Welcome to my Live Score App</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
          <Grid sm="8">
            
              {matches.map((match)=>(
              <Fragment>
                {match.type == "Twenty20" ?(
                <MyCard key={match.unique_id} match={match}/>
                ):(
                  " "
                )}
              </Fragment>
              ))}
            
          </Grid>
       </Grid>
    </div>
  );
}

export default App;
// <Button variant="outlined" color="secondary">Click here</Button>
//{getMatches().then((data)=> console.log("DATA:", data)).catch()}

//<img style={{width:85}} src={require(".components/img/vs.png")} alt=""/>

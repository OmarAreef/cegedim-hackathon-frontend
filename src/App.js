import React from 'react';


import Navbar from './components/navbar';
import Grid from './components/grid';
import Footer from './components/Footer'
import Custombutton from './components/custombutton'
import {makeStyles} from "@material-ui/core/styles"; 
import { Typography } from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import AccessibleIcon from '@material-ui/icons/Accessible';

import './App.css';

const styles = makeStyles({
  wrapper: {
    width: "40%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">

      <Navbar />
      <div className={classes.wrapper}>
        <Custombutton txt="Try Our Idea !" />
        <Typography variant="h4" className={classes.littleSpace} color="primary">
          We are providing solution to give an indication of whether or not your symptoms match the current COVID-19 symptoms.
        </Typography>
        <Typography variant="h5" className={classes.littleSpace} color="primary">
          disclamir* our solution is data-driven, contacting a professional doctor is advisable.
        </Typography>
      </div>
      <div className={`${classes.grid} ${classes.littleSpace}`}>
        <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "60", width: "60" }} />} title="Secure" btnTitle="Show me More" />
        {/* <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "60", width: "60" }} />} title="Reliable" btnTitle="Show me More" />
          <Grid icon={<AccessibleIcon style={{ fill: "#D05B2D", height: "60", width: "60" }} />} title="Your Health" btnTitle="Show me More" /> */}
        <Grid icon={<ImportExportIcon style={{ fill: "#5EA780", height: "60", width: "60" }} />} title="24/7" btnTitle="Show me More" />
        {/* <Grid icon={<ComputerIcon style={{ fill: "#E69426", height: "60", width: "60" }} />} title="Multi-Platform" btnTitle="Show me More" /> */}
        <Grid icon={<HttpIcon style={{ fill: "#2EA09D", height: "60", width: "60" }} />} title="Always can reach us" btnTitle="Show me More" />
      </div>
      <div >
        <Footer />
      </div>

    </div>
  );
}

export default App;
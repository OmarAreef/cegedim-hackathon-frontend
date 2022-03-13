import React from 'react'

import {makeStyles } from '@material-ui/core/styles';

import Navbar from './components/navbar';
import FormApp from './components/FormApp';

import './App.css';

const styles = makeStyles({
    wrapper: {
      width: "40%",
      margin: "auto",
      textAlign: "center"
    },
    
  })

function Form() {
    const classes = styles();

    return (
        <div className="App">
            <Navbar />
            < FormApp />
        </div>
    );
}


export default Form
import React from 'react'

import {makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import FormApp from './components/FormApp';
import ResultApp from './components/resultapp'

import './App.css';

const styles = makeStyles({
    wrapper: {
      width: "40%",
      margin: "auto",
      textAlign: "center"
    },
    
  })

function result() {
    const classes = styles();

    return (
        <div className="App">
          
            < ResultApp />
        </div>
    );
}


export default result
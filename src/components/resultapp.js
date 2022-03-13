import Navbar from './navbar';

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Select, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import axios from 'axios'

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


  const [form, setForm] = useState({
    result: false
  })
  const updateForm = (e) => {
    let id = e.target.id

    let value = e.target.checked
    if (id === 'id')
      value = e.target.value
    setForm((prev) => {
      return { ...prev, [id]: value }
    })
    console.log(form)
  }
  const [message, setMessage] = useState('')
  const submit = (e) => {
    axios.post('http://127.0.0.1:8000/app/test/', form)
      .then((response) => {
        setMessage("Successfuly updated record")
        console.log("success")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  const classes = styles();
  let positive = " POSITIVE ! Contact Your Doctor";
  return (
    <div className="App">
      <Navbar />
      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.littleSpace} color="secondary">
          {message}
        </Typography>
        <Typography variant="h4" className={classes.bigSpace} color="primary" >
          Enter Result Of The Test
        </Typography>
      </div>

      <div>
        <TextField id="outlined-basic" label="Patient id" id='id' variant="outlined" onChange={(event) => updateForm(event)} />
      </div>


      <div className={`${classes.grid} ${classes.littleSpace}`}>
        <FormControlLabel labelPlacement="start" control={<Switch id='result'
          onChange={(event) => updateForm(event)} />} label="is it positive ?" />
      </div>

      <Button variant="contained" onClick={(e) => submit()}>Submit</Button>
    </div>
  );
}

export default App;
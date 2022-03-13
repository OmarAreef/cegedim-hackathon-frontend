import Navbar from './navbar';
import Custombutton from './custombutton'
import {makeStyles} from "@material-ui/core/styles"; 
import { Typography , Button  , Select , FormControlLabel, FormGroup, Switch} from '@material-ui/core';
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';


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


    const [form, setForm] = useState({})
    const updateForm = (e) => {
        let id = e.target.id
        let value = e.target.checked
        setForm((prev) => {
            return { ...prev, [id]: value }
        })
        console.log(form)
    }



  const classes = styles();
let positive = " POSITIVE ! Contact Your Doctor";
  return (
    <div className="App">
      <Navbar />
      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.bigSpace} color="primary" >
         Result Of The Test ! 
        </Typography>
        </div>
        <div>
    <TextField id="outlined-basic" label="Your Lab ID" variant="outlined" />
      </div>
      <Typography variant="h4" className={classes.littleSpace} color="primary">
        </Typography>
      <div>
    <TextField id="outlined-basic" label="Your Patient Status  " variant="outlined" />
      </div>


      <div className={`${classes.grid} ${classes.littleSpace}`}>
                <Select >
                    <Select labelPlacement="start" control={<Switch id='1'
                        onChange={(event) => updateForm(event)} />} label="Positive" />

                        
                    <Select labelPlacement="start" control={<Switch id='0'
                        onChange={(event) => updateForm(event)} />} label="Negetive" />
                </Select>
                </div>
    
<Button variant="outlined" >Check</Button>
    </div>
  );
}

export default App;
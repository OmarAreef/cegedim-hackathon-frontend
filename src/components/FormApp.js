import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Switch, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
        marginTop: "1rem",
        display: "block"
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
})



const FormApp = () => {
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
    return (
        <>
            <div className={`${classes.grid} ${classes.bigSpace}`}>
                <Typography variant="h4" color="primary">
                    Please Answer these questions below,<br /> afterwards a percentage and a coupon will appear to you for use.<br />
                </Typography>
            </div>
            <div className={`${classes.grid} ${classes.littleSpace}`}>
                <FormGroup >
                    <FormControlLabel labelPlacement="start" control={<Switch id='fever'
                        onChange={(event) => updateForm(event)} />} label="Label" />
                    <FormControlLabel labelPlacement="start" control={<Switch id='sore_throat'
                        onChange={(event) => updateForm(event)} />} label="Label" />
                </FormGroup>
                <FormGroup >
                    <FormControlLabel labelPlacement="start" control={<Switch id='shortness_of_breath'
                        onChange={(event) => updateForm(event)} />} label="Label" />
                    <FormControlLabel labelPlacement="start" control={<Switch id='head_ache'
                        onChange={(event) => updateForm(event)} />} label="Label" />
                    <FormControlLabel labelPlacement="start" control={<Switch id='age_60_and_above'
                        onChange={(event) => updateForm(event)} />} label="Label" />
                </FormGroup >
            </div>
             <div>
                <Typography variant="h4" color="primary">
                    check your result
                </Typography>
                <ul>
                <Link to="/result"><button>
              Go to Page 2 
            </button>
             </Link>
                </ul>
            </div>
        </>
    )
}

export default FormApp
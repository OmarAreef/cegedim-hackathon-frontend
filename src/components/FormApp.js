import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Switch, Typography, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const styles = makeStyles({
    wrapper: {
        width: "40%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "3rem"
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
    paddingForm: {
        padding: '30px 10px',
        margin: '20px'
    }
})



const FormApp = () => {
    const [form, setForm] = useState({
        fever: false,
        sore_throat: false,
        shortness_of_breath: false,
        gender: 0,
        head_ache: false,
        testReason_Abroad: 0,
        testReason_Contact_with_confirmed: 0,
        testReason_Other: 1,
        age_60_and_above: 0,
    })

    const updateForm = (e) => {
        let id = e.target.id
        let value = e.target.checked
        setForm((prev) => {
            return { ...prev, [id]: value }
        })

    }
    const [gender, setGender] = useState('')

    const updateSelect = (e) => {
        let id = e.target.name
        let value = e.target.value
        let formValue = 0;
        value === 'Male' ? setGender('Male') : setGender('Female')
        value === 'Male' ? formValue = 0 : formValue = 1
        setForm((prev) => {
            return { ...prev, [id]: formValue }
        })

    }

    const [reason, setReason] = useState('')
    const updateReason = (e) => {
        let myObject = {
            'testReason_Abroad': 0,
            'testReason_Other': 0,
            'testReason_Contact_with_confirmed': 0

        }
        let value = e.target.value
        let myValue = 1
        let myString = ""
        switch (value) {
            case "travel":
                myString = 'testReason_Abroad'
                break
            case "contact":
                myString = 'testReason_Contact_with_confirmed'
                break
            case "other":
                myString = 'testReason_Other'
        }
        myObject = { ...myObject, [myString]: myValue }
        setForm((prev) => {
            return { ...prev, ...myObject }
        })

        setReason(value)
    }
    const handleSubmit = () => {
        console.log(form)
        axios.post('http://127.0.0.1:8000/app/results/', form)
            .then(response => {
                console.log(response.data)
                setResultData(response.data)
                setRender(true)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const [resultData, setResultData] = useState({})
    const [rendering, setRender] = useState(false)
    const renderResults = () => {
        return (
            <>
                <Typography variant="h6" color="error">
                    Your match covid symptoms by {(parseFloat(resultData.prediction)*100).toFixed(2)}% <br /> 
                    Your ID is <b>{resultData.id}</b> to use for your discount at our partner labs<br />
                    <b>please note that if you are feeling sick, seeking a doctor's help is the best choice.</b>
                </Typography>
            </>
        )
    }


    const classes = styles();
    return (
        <>
            {rendering && renderResults()}
            <div className={`${classes.grid} ${classes.bigSpace}`}>
                <Typography variant="h4" color="primary">
                    Please Answer these questions below,<br /> afterwards a percentage and a coupon will appear to you for use.<br />
                </Typography>
            </div>
            <div className={`${classes.grid} ${classes.littleSpace}`}>
                <FormGroup className={`${classes.paddingForm}`}>
                    <FormControlLabel labelPlacement="start" control={<Switch id='fever'
                        onChange={(event) => updateForm(event)} />} label="Do you have any Fever ?" />
                    <FormControlLabel labelPlacement="start" control={<Switch id='sore_throat'
                        onChange={(event) => updateForm(event)} />} label="Do you have a sore throat ?" />
                </FormGroup>
                <FormGroup className={`${classes.paddingForm}`}>
                    <FormControlLabel labelPlacement="start" control={<Switch id='shortness_of_breath'
                        onChange={(event) => updateForm(event)} />} label="Do you have trouble breathing ?" />
                    <FormControlLabel labelPlacement="start" control={<Switch id='head_ache'
                        onChange={(event) => updateForm(event)} />} label="Do you have any kind of headache ?" />
                    <FormControlLabel labelPlacement="start" control={<Switch id='age_60_and_above'
                        onChange={(event) => updateForm(event)} />} label="Is your age above 60 years old?" />
                </FormGroup >
                <FormGroup className={`${classes.paddingForm}`}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(event) => updateSelect(event)}
                        >
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel id="reason" className={`${classes.littleSpace}`}>Reason for doing this test</InputLabel>
                    <FormControl >

                        <Select

                            id="reason"
                            name="reason"
                            value={reason}
                            onChange={(event) => updateReason(event)}
                        >
                            <MenuItem value={'travel'}>Have been abraod</MenuItem>
                            <MenuItem value={'contact'}>Contact with a confirmed case</MenuItem>
                            <MenuItem value={'other'}>other</MenuItem>
                        </Select>

                    </FormControl>

                    <Button variant="contained" color="primary" className={`${classes.littleSpace}`} onClick={(e) => handleSubmit()}>Submit</Button>

                </FormGroup >
            </div>
        </>
    )
}

export default FormApp
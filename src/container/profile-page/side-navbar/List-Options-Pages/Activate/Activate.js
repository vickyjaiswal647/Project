import React, { useState } from 'react'
import './Activate.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    textField: {
        margin:theme.spacing(1),
        width : '80%',
    },
    button: {
        marginTop:theme.spacing(1),
        alignItems:'center',
        height: theme.spacing(7),
        borderRadius:'px',
        width:'30%'
    }
}));

const Activate = () => {

    const classes = useStyles();

    const [data, setData] = useState({
        testcode : '',
        active:false,
        deactive:false
    });

    const handleChange = (e) => {
        setData({...data,testcode : e.target.value});
    }

    const activatehandle = (e) => {
        setData({...data,active:true,deactive : false});
    }

    const deactivatehandle = (e) => {
        setData({...data,active: false,deactive:true});
    }

    console.log(data);

    return (
        <div className = "Activate">
            <h1>Test Activation</h1> 
            <h1>Test Code</h1>
            <TextField autoFocus className = {classes.textField} id = "outlined-basic" label = "Test Code" variant = "outlined" name = "testcode" value = {data.testcode}  onChange = {handleChange}/>
            <div className = "button">
                <Button onClick = {activatehandle} type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>Activate Test</Button>
                <Button onClick = {deactivatehandle} type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>Deactivate Test</Button>
            </div>
        </div>
    )
}

export default Activate;
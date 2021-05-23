import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import validate from './validateInfo';
import {Link} from 'react-router-dom';

import {auth, signInWithGoogle } from '../../components/firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:theme.spacing(1),
        position: 'relative',
        height: '500px',
        width: '500px',
        margin: '70px auto',
        boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'column',
        alignItems:'center'
    },
    textField: {
        margin:theme.spacing(1),
        width: '80%',
    },
    button: {
        marginTop:theme.spacing(1),
        alignItems:'center',
        height: theme.spacing(8),
        borderRadius:'px',
        width:'40%'
    },
    forgetpassword: {
        marginTop:'2rem',
        // marginBottom:'50px',
        fontFamily: 'Poppins,sans-serif'
    },
    heading: {
        marginTop:'1rem',
        marginBottom:'50px',
        fontFamily: 'Poppins,sans-serif'
    },
    remember: {
        margin:'40px',
        fontFamily: 'Poppins,sans-serif',
    } 
}));

const Login = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({...values,[name]: value});
    };

    const submitForm = async (e) => {
        e.preventDefault();
        //setErrors(validate(values));
        const { email, password } = e.target;

        try {
            await auth.signInWithEmailAndPassword( email, password);
            setValues({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
            <form action = "" className = {classes.root} autoComplete = "off" onSubmit={submitForm} ><br/>
                <h1 className = {classes.heading} >Welcome Geeks!</h1>
                <TextField autoFocus error = {Boolean(errors.email)} className = {classes.textField} id = "outlined-basic" label = "Email" variant = "outlined" name = "email" values = {values.email} onChange = {handleChange} helperText = {errors.email}/>
                <TextField error = {Boolean(errors.password)} className = {classes.textField} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" name = "password" variant="outlined" values = {values.password} onChange = {handleChange} helperText = {errors.password}/>

                <Button type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>Login</Button>
                {/*<Button type='submit' onClick={signInWithGoogle} isGoogleSignIn  className = {classes.button} variant="contained" color="primary" disableElevation>Login with Google</Button>
    */}
                <p className = {classes.forgetpassword}>or <a href = '#'>Forget Password</a></p>
                <p className  = {classes.remember}>Don't have an Account <Link to = '/signUp'>SignUp</Link></p>
            </form>  
        </>
    )
}

export default Login

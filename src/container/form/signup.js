import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import validate from './validateInfo';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        flexWrap: 'wrap',
        position: 'relative',
        height: '500px',
        width: '500px',
        margin: '70px auto',
        boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)',
        borderRadius:'10px'
    },
    textField: {
        margin: theme.spacing(0.9),
        width: '80%',
    },
    button: {
        marginTop:theme.spacing(1),
        alignItems:'center',
        height: theme.spacing(5),
        width:'40%'
    },
    heading: {
        marginTop:'1rem',
        marginBottom:'50px',
        fontFamily: 'Poppins,sans-serif'
    },
    remember: {
        margin:'30px',
        fontFamily: 'Poppins,sans-serif',
    }
}));

const SignUp1 = () => {
    const classes = useStyles();

    const [evalues, setEvalues] = useState({email:''});

    const [ovalues, setOvalues] = useState({otp:''});

    const [values, setValues] = useState({
        fullname: '',
        password: '',
        confirmpassword: '',
        semester:'',
        branch:'',
    });

    const [formsubmission, setFormsubmission] = useState(false);

    const [emailverify, setEmailverify] = useState(false);

    const [errors, setErrors] = useState({});

    const handleemailChange = e => {
        const {name, value} = e.target;
        setEvalues({...evalues,[name]:value});
    };

    const handleotpChange = e => {
        const {name, value} = e.target;
        setOvalues({...ovalues,[name] : value});
    };

    const handleformChange = e => {
        const { name, value } = e.target;
        setValues({...values,[name]: value});
    };

    const submitemailForm = async (e) => {
        e.preventDefault();
        //setErrors(validate(evalues));
        const {email} = evalues;
        console.log(email);

        // const res = await fetch("/users/sign-up", {
        //     method : "POST",
        //     headers : {
        //         "Content-Type" : "application/json"
        //     },
        //     body:JSON.stringify({email:email})
        // });

        // const data = await res.json();

        // if(data.status === 401) {
        //     window.alert("User with this email already exists");
        //     console.log("User with this email already exists");
        // } else {
        //     window.alert("Error");
        // }
        setEmailverify(true);
    }
    const submitotpForm = (e) => {
        e.preventDefault();
        //setErrors(validate(ovalues));
        setFormsubmission(true);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // setErrors(validate(values));
        console.log(values);
    }

    return (
        <>
            {formsubmission?
                
                <form action = "" className = {classes.root} autoComplete = "off" onSubmit={submitForm} method = "POST"><br/>
                    <h1 className = {classes.heading} >SignUp and Start Learning!</h1>
                    <TextField autoFocus error = {Boolean(errors.fullname)} className = {classes.textField} id = "outlined-basic" label = "FullName" name = "fullname" variant = "outlined" size = "small" value = {values.fullname} onChange = {handleformChange} helperText = {errors.fullname}/>
                    <TextField error = {Boolean(errors.password)} className = {classes.textField} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" name = "password" variant="outlined" size = "small" value = {values.password} onChange = {handleformChange} helperText = {errors.password}/>
                    <TextField error = {Boolean(errors.confirmpassword)} className = {classes.textField} id="outlined-password-input" label="ConfirmPassword" type="password" autoComplete="current-password" name = "confirmpassword" variant="outlined" size = "small" value = {values.confirmpassword} onChange = {handleformChange} helperText = {errors.confirmpassword}/>
                    <TextField error = {Boolean(errors.semester)} className = {classes.textField} id="outlined-number" label="Semester" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" name = "semester" size = "small" value = {values.semester} onChange = {handleformChange} helperText = {errors.semester}/>
                    <TextField error = {Boolean(errors.branch)} className = {classes.textField} id = "outlined-basic" label = "Branch" variant = "outlined" size = "small" name = "branch" value = {values.branch} onChange = {handleformChange} helperText = {errors.branch}/>
                    <Button type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>SignUp</Button>
                </form> : 

            emailverify?

                    <form action = "" className = {classes.root} autoComplete = "off" onSubmit={submitotpForm}><br/>
                        <h1 className = {classes.heading} >Email Verification</h1>
                        <TextField autoFocus error = {Boolean(errors.otp)} className = {classes.otpsem1} id="outlined-basic" label="OTP" variant="outlined" name = "otp" value = {ovalues.otp} onChange = {handleotpChange} helperText = {errors.otp}/>
                        <Button type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>Verify Email</Button>
                    </form> : 

                    <form className = {classes.root} autoComplete = "off" onSubmit={submitemailForm}><br/>
                        <h1 className = {classes.heading} >SignUp and Start Learning!</h1>
                        <TextField autoFocus error = {Boolean(errors.email)} className = {classes.textField} id = "outlined-basic" label = "Email" variant = "outlined" name = "email" value = {evalues.email} onChange = {handleemailChange} helperText = {errors.email}/>
                        <Button type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>Send Otp</Button>
                        <p className = {classes.remember}>Already have an account? <Link to = '/login'>Log In</Link></p>
                    </form>}
        </>
    )
}

export default SignUp1
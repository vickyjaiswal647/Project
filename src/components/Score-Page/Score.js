import Button from '@material-ui/core/Button';
import React from 'react'
import './Score.css'
import { makeStyles } from '@material-ui/core/styles';


//https://stackoverflow.com/questions/47281850/how-to-hide-navbar-in-login-page-in-react-router

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop:theme.spacing(1),
        alignItems:'center',
        height: theme.spacing(7),
        borderRadius:'px',
        width:'30%'
    }
}));

const Score = () => {

    const classes = useStyles();

    const [data, setData] = React.useState({
        name:"XYZ",
        score:"70",
        totalquestion:"100"
    })

    // React.useEffect(() => {
    //     async function getData() {
    //         const res = await axios.get(``);
    //         console.log(res.data);
    //     }

    //     getData();
    // } )

    return (
        <div className = 'score'>
            <h1>{`Hello, ${data.name} your Score is ${data.score} out of ${data.totalquestion}`}</h1>
            <div className = 'btn'>
                <Button type="submit" className = {classes.button} variant="contained" color="primary" disableElevation>Go To Course </Button>
            </div>
        </div>
    )
}

export default Score
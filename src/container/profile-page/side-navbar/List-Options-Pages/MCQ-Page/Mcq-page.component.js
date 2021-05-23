import { FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core'
import React from 'react';
import {Link} from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './Mcq-page.styles.css';
import {Question} from './question.data';

const Mcq = () => {
    const [answer, setAnswer] = React.useState([]);

    const handleRadioChange = (e) => {
        var objIndex = answer.findIndex((obj => obj.id === e.target.name));
        if(objIndex !== -1){
            answer[objIndex].ans = e.target.value;
        } else {
        setAnswer(prevalue => [...prevalue,{
            id:e.target.name,
            ans:e.target.value
        }]);}
        //setValue(value => [...value,value[index] = e.target.value]);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answer)
    }

    return (
        <form className = 'mcq' onSubmit = {handleSubmit}>
            
            {Question.map((data) => { 
                return(
                    <div key={data.id} className = "idq">
                        <FormControl component = "fieldset">
                            <FormLabel className = "question"><p>{data.ques}</p></FormLabel>
                            <RadioGroup aria-label="quiz" name={data.id} value={answer.id} onChange={handleRadioChange} className = "radio">
                                <FormControlLabel value = {data.option1} control = {<Radio/>} label = {data.option1}/>
                                <FormControlLabel value = {data.option2} control = {<Radio/>} label = {data.option2}/>
                                <FormControlLabel value = {data.option3} control = {<Radio/>} label = {data.option3}/>
                                <FormControlLabel value = {data.option4} control = {<Radio/>} label = {data.option4}/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                ) 
            })}
            <Link to = '/score-page'>
                <div className = 'btn'>
                    <Button type='submit' variant='contained' color = 'primary' size = 'large'>Submit Answer</Button>
                </div>
            </Link>
        </form>
    )
}

export default Mcq
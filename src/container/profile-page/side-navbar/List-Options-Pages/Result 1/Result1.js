import React from 'react'
import MaterialTable from '@material-ui/core/material-table';
import './Result.css';

const Result1 = () => {

    const data = [
        {name:"Arpit Kumar Sahu", email:"arpit@gmail.com", score:"100"},
        {name:"Akash Kumar Pandey", email:"akash@gmail.com", score:"100"},
        {name:"Vicky Kumar Jaiswal", email:"vicky@gmail.com", score:"100"},
        {name:"Anup Kumar Mishra", email:"anup@gmail.com", score:"100"},
        {name:"Ashutosh Kumar ", email:"ashutosh@gmail.com", score:"100"},
        {name:"Satyam Gupta", email:"satyam@gmail.com", score:"100"},
        {name:"Tushar", email:"tushar@gmail.com", score:"100"},
        {name:"Shubham Pandey", email:"shubham@gmail.com", score:"100"},
        {name:"Prince", email:"prince@gmail.com", score:"100"},
        {name:"Lucky", email:"lucky@gmail.com", score:"100"},
        {name:"Ashish", email:"ashish@gmail.com", score:"100"},
        {name:"Sonu Gupta", email:"sonu@gmail.com", score:"100"},
    ]

    const columns = [
        {
            title:"Name", field:'name'
        },
        {
            title:"Email", field:'email'
        },
        {
            title:"Score", field:'score'
        }
    ]
    return (
        <div>
            <h1  className = "result">Test Result</h1>
            <MaterialTable title = "Student Performance" data = {data} columns = {columns} options = {{paging : false , exportButton:true }}/>
        </div>
    )
}

export default Result1
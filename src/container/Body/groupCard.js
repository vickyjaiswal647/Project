import React from 'react';
import './groupCards.css';
import Card from './Card';
import Joining from './joining'
import {Link} from 'react-router-dom';
import CSEpage from './CSE-Page/cse.page.component';

function Home() {
    return (
        <>
        <div className = 'groupCard'>
            <h1 className = "heading" >Start Exploring :)</h1>
            <div className = 'groupCard__section'>

            <Link to = '/cse'>
                <Card 
                src="https://www.sharda.ac.in/blog/wp-content/uploads/2020/03/Image-1.jpg?im_w=720"
                title="Computer Science"
                onClick={""}
                />
            </Link>
                
                <Card src="https://assignmentfirm.com/wp-content/uploads/2018/12/ITEC812-Special-Topic-In-Information-Technology.jpg?im_w=720"
                title="Information Technolgy"/>
                <Card src="https://leverageedu.com/blog/wp-content/uploads/2019/09/Civil-Engineering-800x500.png?im_w=720"
                title="Civil Engineering"/>
                <Card src="https://leverageedu.com/blog/wp-content/uploads/2019/10/Textile-Engineering.jpg?im_w=720"
                title="Textile Engineering"/>
            </div>
            <div className = 'groupCard__section'>
                <Card src="https://online.stanford.edu/sites/default/files/styles/figure_default/public/2020-07/Electrical-Engineering-Graduate-Certificate_MAIN.jpg?itok=X1t-3MX0"
                title="Electrical Enginering"/>
                <Card src="https://armiet.in/wp-content/uploads/2020/03/B1P1.jpeg"
                title="Mechanical Engineering"/>
                <Card src="https://philips.ac.cy/wp-content/uploads/2014/06/508886813-550x400.jpg"
                title="Business Study"/>
                <Card src="https://www.cironpharma.com/blog/wp-content/uploads/2020/11/Pharmaceutical-Products-in-India-are-in-High-Demands.jpg"
                title="Pharmacy"/>
            </div>
        </div>
        <Joining/>
        </>
    )
}

export default Home

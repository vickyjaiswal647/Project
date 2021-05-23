import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <>
            <div className = "Footer">
                <div className = "Footer-Links">
                    <p className = "logo">boostmind</p>
                </div>
                <div className = "company">
                    <h2>Company</h2>
                    <p>Blog</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Company Policy</p>
                </div>
                <div className = "program">
                    <h2>Our Program</h2>
                    <p>UnderGraduate</p>
                    <p>PostGraduate</p>
                    <p>Diploma</p>
                </div>
                <div className = "Opportunities">
                    <h2>Opportunities</h2>
                    <p>Become a Instructor</p>
                    <p>Become a Mentor</p>
                    <p>Career Guidance</p>
                </div>
            </div>
            <div className = "icons">
                <FacebookIcon fontSize = "large"/>
                <InstagramIcon fontSize = "large"/>
                <TwitterIcon fontSize = "large"/>
                <LinkedInIcon fontSize = "large"/>
                <YouTubeIcon fontSize = "large"/>
            </div>
            <p className = "footerbottom">© 2021 bootmind Pvt.Ltd</p>
        </>
    )
}

export default Footer

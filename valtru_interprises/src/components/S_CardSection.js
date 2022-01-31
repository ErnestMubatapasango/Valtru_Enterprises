import React, {useState} from 'react';
import {Button} from '@mui/material';
import './S_CardSection.css'
import {Link} from 'react-router-dom'


function S_CardSection(props) {

const [clicked, setClicked] = useState(false)

if (props.clicked===undefined){
    
}

let button = <Button  variant="outline" onClick={()=>setClicked(props.clicked)} className="view__more">View More</Button>

const clicker = clicked ? "" : button
  return (
    <div className="cards__section">
        <h2 className="service__header">Our Services</h2>

        <div className="service__cards">
            <div className="scard">
                <img src="web.png" alt="" />
                <h3 className="service__title">Website Development<br/> and Hosting</h3>
                <p className="service__description">Get online fast with our professional web design service. 
                From simple to complex, our website design team will create, host, and update the site for you</p>
            </div>

            
            <div className="scard">
                    <img src="webdev.png" alt="" />
                    <h3 className="service__title">Web App Development</h3>
                    <p className="service__description">Enrich customer relationships and grow operations 
                        exponentially with a fully-customized web 
                        application that understands your business needs and goals
                    </p>
            </div>

            <div className="scard">
                <img src="network.png" alt="" />
                <h3 className="service__title">Network Setup<br/>and Maintenance</h3>
                <p className="service__description">Our networking technicians specialise in planning, building, 
                implementing and maintaining networks for office or home.We partner with you to review your current network 
                layout and offer setup proposals to meet your current business needs and plan for the future.
                Plus, we present a cost-effective plan to maintain your network for years to come.</p>
            </div>
        </div>

        <Link to="/services" className="view"> 
            {clicker}
        </Link>
    </div>
    )
}

export default S_CardSection;

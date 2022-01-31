import React from 'react';

import './Services.css'


function Services() {
  return( 
    <div>
       {/** <S_CardSection clicked={true}/>*/} 

        <div className="cards__section">
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
            
            <div className="scard">
                <img src="pos.png" alt="" />
                <h3 className="service__title">POS SETUP</h3>
                <p className="service__description">
                POS systems are, in many ways, the great equalizer; allowing small businesses to avoid getting bogged
                 down with business-facing obligations that consume so much time and energy. 
                 With the right point-of-sale system, a smaller brand can deliver fast and friendly service at nearly the same rate as a much larger, 
                 more established brand.
                </p>
            </div>

           

              

                <div className="scard">
                    <img src="" alt="" />
                    <h3 className="service__title">IT Projects and Support</h3>
                    <p className="service__description">You finding it hard to proceed with your IT Project? We at Valtru Enterprises
                    are here to offer a solution to your problems in the most effective and efficient way possible</p>
                </div>

                <div className="scard">
                    <img src="" alt="" />
                    <h3 className="service__title">Data Recovery</h3>
                    <p className="service__description">Data recovery is the process of accessing and 
                    recovering information from digital media that is not accessible through standard means. 
                    This is a necessary service in a variety of situations from user error and deletion, 
                    to mechanical and physical damage on your storage device.</p>
                </div>
     
                <div className="scard">
                    <img src="" alt="" />
                    <h3 className="service__title">Linux, Windows Server Setup and Maintenance</h3> 
                    <p className="service__description">Valtru provides a complete range of professional services to get your Linux systems up and running.
                    We help organizations around the world to run their Linux server infrastructure ensuring optimal performance, 
                    highest security and minimal downtime.Linux support and maintenance is provided as monthly plans and one-off support jobs.</p>
                </div>
            
            </div>
        </div>
    </div>

  )
}

export default Services;

import React from 'react';
import { Button} from '@mui/material';
import './HeroSection.css';

function HeroSection() {

    const faders = document.querySelectorAll('.feature-box') ;

    const appearOptions = {
        threshold:1,
       
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classlist.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

  return (
    
    <>
    <div className="hero__container">
          <div className="card">
              <div className="card-1">
                  <h1 className="card-title">Software innovation<br />tailored to your business needs</h1>

                  <p className="card-content">Gaining a competitive advantage in today's fast-paced digital world can be challenging. Capture the full business value<br />
                      of tech by partnering with a boutique software development firm that's all-in on your growth story</p>
                  <Button variant="contained" color="success" className="card-btn">Let's get Started</Button>
              </div>

                <div className="card-2">
                  <h1 className="card-title">A personalized approach that brings your business vision to life</h1>

                  <p className="card-content"> Unlock the potential of cross-platform tech to cut costs, accelerate growth, and extend your reach. We use an agile<br />
                      methodology to keep all aspects of a project collaborative and flexible
                  </p>
                </div>
            </div>
              <div className="values">
                  <div className="feature-box">
                      <div className="circle-overlay"></div>
                      <h3 className="value-title">
                          Work smarter<br /> and harder
                      </h3>
                      <p>
                          Test, build, and scale faster with a talented team of software experts. Create stand-out digital experiences that work for your business.
                      </p>
                  </div>

                  <div className="feature-box">
                      <div className="circle-overlay" id="overlay-1"></div>
                      <h3 className="value-title">
                          Transform tech<br />into profit
                      </h3>
                      <p id="description">
                          Valtru Enterprises closes the gap between emerging technologies and profit. Our goal is to turn innovation into maximum-value outcomes
                      </p>
                  </div>

                  <div className="feature-box">
                      <div className="circle-overlay" id="overlay-2"></div>
                      <h3 className="value-title">
                          Get to<br />market faster
                      </h3>
                      <p id="description">
                          We work tirelessly to create market-ready solutions tailored to your exact business needs. Move fast, deliver value, and disrupt the competition with Valtru Enterprises.
                      </p>
                  </div>
              </div>
          
              <div className="sect_success">
                  <div className="sect__img">
                    <img src="specialize-img.webp" alt="" />
                  </div>
                  
                  <div className="sect_head">
                    <div className="circle-overlay" id="overlay-3"></div>
                      <h2>Specialized For<br />Your success</h2>
                      <p>We're built differently. Valtru Enterprises offers hands-on, specialized solutions for businesses
                          that don't have time or money to waste. We believe in helping you make the most of cutting-edge digital technologies through our agile approach to software development. Our first and only priority is your success.
                          That means we work around the clock to deliver a solution that works for you.</p>
                  </div>
              </div>     
    </div>
    </>
  )
}

export default HeroSection;


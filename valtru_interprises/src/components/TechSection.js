import React from 'react';

function TechSection() {
  return (
    <div className="tech__section">
         <div  id="overlay-5"></div>
            <h2 className="prod__title">Our Technologies</h2>
            <p className="prod__description">
                We have extensive knowledge in making web and mobile applications.<br/>
                Our execution handles with latest trends in technologies in order to make the software in highly efficient manner.
            </p>

            <div className="tech__flex-section">
                <img className="prod__image" src="tech.png" alt="" />
                
            </div>

    </div>

  )
}

export default TechSection;

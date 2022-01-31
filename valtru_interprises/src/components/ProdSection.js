import React from 'react';
import './ProdSection.css';
function ProdSection() {
  return (
  
        <div className="prod__section">

            <div  id="overlay-4"></div>
            <h2 className="prod__title">Our Products</h2>
            <p className="prod__description">Your success is our success. That means we don't stop<br/>
                until you achieve the outcomes you want.
            </p>
            <div className="prod__container">

                <img className="prod__image" src="pos.png" alt="" />

                <div className="prod__content">
                    <h3 className="prod__title-2">POINT OF SALE SYSTEM (onPOS)</h3>

                    <p>
                        onPOS is a point of sale system that is user friendly, supports multicurrency sales in USD, ZAR and<br/> ZWL.
                        The POS can be integrated with the following bank options:<br/>
                        <ul></ul>
                        onPOS allows online payments using  ECOCASH.On the fiscalisation side of things the point of sale<br/> system 
                        can be integrated with the RevMax fiscal support system.
                    </p>
                       
            </div>        
            </div>
        </div>
    )
}

export default ProdSection;

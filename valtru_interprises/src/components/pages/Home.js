import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ProdSection from '../ProdSection';
import S_CardSection from '../S_CardSection';

function Home() {
  return (
    <div>
       <HeroSection/>
        <div className="">
          <S_CardSection/>
          
        </div>  
        <ProdSection/>
    </div>
  )
}

export default Home;
 
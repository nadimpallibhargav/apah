import React from 'react';
import apahWater from '../../../assets/images/apahWater.png';

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="bannerContent">
          <div className="bannerText">
            <h1>Apah, The Ai Water.</h1>
            <p>The gulp of goodness in each drop from Nature's elixir .</p>
          </div>
          <div className="bannerImage">
            <div className="imageWrapper">
              <img src={apahWater} alt="Apah Water" />
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}

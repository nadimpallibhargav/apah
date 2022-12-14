import React from 'react'
import map from '../../../assets/images/westernGhats.svg'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="aboutHeading">
            <h2>Who is Apah?</h2>
            <p>
                Ayurveda inspired water. <br />
                Sourced from the foothills of the western ghats are these herbs and spices infused in water.                
            </p>
        </div>
        <div className="aboutContent">
          <div className="aboutImage">
            <div className="imageWrapper">
                <img src={map} alt="apah water sourced from western ghats" />
            </div>
          </div>
          <div className="aboutVideo">
            <div className="videoWrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mvOCeV8GMYc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default About
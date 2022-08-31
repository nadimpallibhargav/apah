import React from 'react'
import apahBenefits from '../../../assets/images/apahBenefits.webp'
import benefitsIcon from '../../../assets/images/benefitsIcon.png'

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefitsHeading">
            <h2>How It Benefit's YOU</h2>
        </div>
        <div className="benefitsContent">
          <div className="benefitsImage">
            <div className="imageWrapper">
                <img src={apahBenefits} alt="Apah water benefits" />
            </div>
          </div>
          <div className="benefitsText">
            <div className="benefitsList">
                <div className="benefitsIcon">
                    <img src={benefitsIcon} alt="Apah water benefits" />
                </div>
                <div className="benefitsDetails">
                    <h3>Benefit One</h3>
                    <p>Replenished - Revived and Refreshed with every gulp is our promise</p>
                </div>
            </div>
            <div className="benefitsList">
                <div className="benefitsIcon">
                    <img src={benefitsIcon} alt="Apah water benefits" />
                </div>
                <div className="benefitsDetails">
                    <h3>Benefit Two</h3>
                    <p>Replenished - Revived and Refreshed with every gulp is our promise</p>
                </div>
            </div>
            <div className="benefitsList">
                <div className="benefitsIcon">
                    <img src={benefitsIcon} alt="Apah water benefits" />
                </div>
                <div className="benefitsDetails">
                    <h3>Benefit Three</h3>
                    <p>Replenished - Revived and Refreshed with every gulp is our promise</p>
                </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Benefits
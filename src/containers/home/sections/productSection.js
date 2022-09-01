import React from 'react'
import ProductImage from '../../../assets/images/apahBenefits.webp'

const Product = () => {
  return (
    <section className='product'>
        <div className="container">            
            <div className="productContent">           
                <div className="productText">
                    <h2>Cardamom Water</h2>
                    <p>Replenished - Revived and Refreshed with every gulp is our promise</p>
                    <button className="commonBtn">⚡Buy Now</button>
                    <p>❤️ by 1500+ Athletes</p>
                </div>
                <div className="productImage">
                    <div className="imageWrapper">
                        <img src={ProductImage} alt="Apah water product" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product
import React from 'react';
import './home.scss';
import Header from '../../components/header';
import Banner from './sections/bannerSection';
import About from './sections/aboutSection';
import Benefits from './sections/benefitsSection';
import Product from './sections/productSection';
import Testimonial from './sections/testimonialSection';
import Contact from './sections/contactSection';
import Footer from '../../components/footer';


const Home = () => {
  return (
    <>
      <Header />
      <Banner />      
      <About />
      <Benefits />
      <Product />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
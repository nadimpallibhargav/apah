import React from 'react';
import './home.scss';
import Header from '../../components/header';
import Banner from './sections/bannerSection';
import About from './sections/aboutSection';
import Benefits from './sections/benefitsSection';


const Home = () => {
  return (
    <>
      <Header />
      <Banner />      
      <About />
      <Benefits />
    </>
  );
};

export default Home;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../containers/home';

const AppRoutes = () => (
  
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
  
);

export default AppRoutes;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../containers/home';

const AppRoutes = () => (
  <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
  </Router>
);

export default AppRoutes;
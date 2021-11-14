import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import {Home,Event, About} from '../pages';

const AppRoutes: React.FC = () => (
  <div>
    <Router>
      <NavBar />
      {/* Route Declaration - Start */}
      <About/>
      {/* Route Declaration - End */}
    </Router>
    <Footer />
  </div>
);

export default AppRoutes;
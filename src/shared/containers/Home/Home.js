import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PATHS } from "../../constants/Paths";

const HomeContainer = () => (<div className="home-container">
  <Helmet>
    <title>Home</title>
  </Helmet>
  <h2>Home</h2>
  <Link to={PATHS.ABOUT} >About</Link>
</div>);

export default HomeContainer;

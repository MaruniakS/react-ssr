import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { PATHS } from "../../constants/Paths";

const AboutContainer = () => (<div className="about-container">
  <Helmet>
    <title>About</title>
  </Helmet>
  <h2>About</h2>
  <Link to={PATHS.HOME}>Home</Link>
</div>);

export default AboutContainer;

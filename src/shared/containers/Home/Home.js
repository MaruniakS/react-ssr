import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import { withStyles } from 'isomorphic-style-loader'
import withStyles from 'isomorphic-style-loader/withStyles';
import { PATHS } from "../../constants/Paths";

import styles from './Home.scss';

const HomeContainer = () => (<div className="home-container">
  <Helmet>
    <title>Home</title>
  </Helmet>
  <h2 className={styles.title}>Home</h2>
  <Link to={PATHS.ABOUT} >About</Link>
</div>);

export default withStyles(styles)(HomeContainer);

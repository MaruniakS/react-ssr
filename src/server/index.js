import express from 'express';
import cors from 'cors';
import React from 'react';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'

import App from '../shared/App';
import { ROUTES } from "../shared/constants/Routes";

import template from './template';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const activeRoute = ROUTES.find(path => matchPath(req.path, path)) || {};

  const apiResponse = activeRoute.getInitialData ? activeRoute.getInitialData(req.path) : Promise.resolve();

  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
  apiResponse
      .then(data => {
        const markup = renderToString(
            <StaticRouter location={req.url} context={{ data }}>
              <StyleContext.Provider value={{ insertCss }}>
                <App />
              </StyleContext.Provider>
            </StaticRouter>
        );
        const title = Helmet.renderStatic();

        res.send(template(data, markup, title, css));
      })
      .catch(next);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
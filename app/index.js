import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './styles/main.scss';
import App from './app';

render(<App/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

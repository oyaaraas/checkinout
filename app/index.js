import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import 'react-dates/lib/css/_datepicker.css';
require('!style-loader!css-loader!sass-loader!../node_modules/react-dates/css/styles.scss');
require('!style-loader!css-loader!sass-loader!../node_modules/react-dates/css/variables.scss');

import './styles/main.scss';
import Root from './components/Root';

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

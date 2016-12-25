import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Root from './components/Root';

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

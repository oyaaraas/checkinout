import React from 'react';
import Navigation from './modules/Navigation';

const App = (props) => {
  return (
    <div className="page">
      <Navigation/>
      {props.children}
    </div>
  );
};

export default App;


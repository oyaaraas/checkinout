import React from 'react';
import Navbar from './modules/Navigation';

const App = (props) => {
  return (
    <div className="page">
      <Navbar/>
      {props.children}
    </div>
  );
};

export default App;


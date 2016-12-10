import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div>
    <h3>React Redux Starter</h3>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation.component';

const MainLayout = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
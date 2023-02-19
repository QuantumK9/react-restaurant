import React from 'react';

import logo from '../../assets/logo.jpg';

const Slogan = ({ title }) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p-slogan">{title}</p>
    <img src={logo} alt="logo_image" className="logo-img" />
  </div>
);

export default Slogan;
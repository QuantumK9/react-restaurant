import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="best-menuitem">
    <div className="best-menuitem-head">
      <div className="best-menuitem-name">
        <p className="p-slogan" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="best-menuitem-dash" />
      <div className="best-menuitem-price">
        <p className="p-slogan">{price}</p>
      </div>
    </div>
    <div className="best-menuitem-sub">
      <p className="p-slogan" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
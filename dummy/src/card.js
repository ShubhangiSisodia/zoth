import React from 'react';

export const Card = ({ title, image, description, status, poolSize, usdc, loanTenure, logo }) => (
  
  <div className='card'>
  <div className="LiquidityPool1">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-status">{status ? 'Open' : 'Close'}</p>
      <p className="card-pool-size">Pool Size: {poolSize}</p>
      <p className="card-usdc">USDC: {usdc}</p>
      <p className="card-loan-tenure">Loan Tenure: {loanTenure}</p>
      <img src={logo} alt={title} className="card-logo" />
    </div>
  </div>
  </div>
);

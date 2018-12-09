import React from 'react';
import './SharedComponents.css';
export default props => {
  return (
    <div
      className="jumbo-header"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h1>{props.title}</h1>
    </div>
  );
};

import React, {Component} from 'react';

var CardPackage = (props) => {
  var {title, description, urlImage} = props;
  return (
    <div className="small-12 medium-6 large-4 columns">
      <div className="card" src={urlImage}>
        <img className="card-image"/>
        <div className="card-divider card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-section card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPackage;

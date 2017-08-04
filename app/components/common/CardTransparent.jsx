import React, {Component} from 'react';

var CardTransparent = (props) => {
  var {title, description, urlImage} = props;
  return (
    <div className="small-12 medium-6 large-4 columns">
      <div className="card-transparent">
        <img className="card-image" src={urlImage}/>
        <div className="card-section">
          <h4><b>{title}</b></h4>
        </div>
        <div className="card-section card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTransparent;

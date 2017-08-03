import React, {Component} from 'react';

var CardPackage = (props) => {
  return (
    <div className="small-3 medium-3 large-3 cell">
      <div className="card">
        <div className="card-divider">
          This is a header
        </div>
        <img src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-1.jpg"/>
        <div class="card-section">
          <h4>This is a card.</h4>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
        </div>
      </div>
    </div>
  );
}

export default CardPackage;

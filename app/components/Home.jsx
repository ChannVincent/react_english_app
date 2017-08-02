import React, {Component} from 'react';

// http://dhiglobal.com/wp-content/uploads/2016/07/placeholder.jpg
// https://www.youtube.com/watch?v=hExwnLlj2xk
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-landing-picture">
          <h1 className="home-landing-title">Phrase d'accroche à déterminer</h1>
          <h4 className="home-landing-subtitle">Ils nous font confiance.</h4>
        </div>
        <div className="home-client-package-description">

          <div>
            <h3>Efficace,<br/> Rapide, Economique</h3>
            <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.</p>
          </div>



        </div>
      </div>
    )
  }
}

export default Home;

/*
<div class="card" style="width: 300px;">
  <div class="card-divider">
    This is a header
  </div>
  <img src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-1.jpg"/>
  <div class="card-section">
    <h4>This is a card.</h4>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
  </div>
</div>
*/

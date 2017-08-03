import React, {Component} from 'react';
import CardPackage from 'CardPackage';

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

        <div class="grid-x">
          <CardPackage />
          <CardPackage />
        </div>
      </div>
    )
  }
}

export default Home;

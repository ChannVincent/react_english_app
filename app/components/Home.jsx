import React, {Component} from 'react';
import CardPackage from 'CardPackage';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className="home-landing-picture">
          <div className="row">
            <div className="home-teaser-description small-offset-1 medium-offset-1 large-offset-1 small-10 medium-10 large-6">
              <h1 className="home-landing-title">Phrase d'accroche à déterminer</h1>
              <h4 className="home-landing-subtitle">Ils nous font confiance.</h4>
            </div>
          </div>
        </div>

        <div className="home-student">
          <div className="row">
            <div className="home-package-description small-12 medium-12 large-12">
              <h2>Packages Etudiant</h2>
              <br/>
              <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.</p>
            </div>
          </div>

          <div className="row">
            <CardPackage
              title="Package 1"
              urlImage="https://www.w3schools.com/css/img_fjords.jpg"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
            <CardPackage
              title="Package 2"
              urlImage="https://www.w3schools.com/css/img_fjords.jpg"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
            <CardPackage
              title="Package 3"
              urlImage="https://www.w3schools.com/css/img_fjords.jpg"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
          </div>
        </div>

        <div className="home-teacher">
          <div className="row">
            <div className="home-package-description small-12 medium-12 large-12">
              <h2>Avantages professeurs</h2>
              <br/>
              <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.</p>
            </div>
          </div>

          <div className="row">

          </div>
        </div>


      </div>
    )
  }
}

export default Home;

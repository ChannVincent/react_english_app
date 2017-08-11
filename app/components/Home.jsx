import React, {Component} from 'react';
import CardPackage from 'CardPackage';
import CardTransparent from 'CardTransparent';
import {Link, IndexLink} from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className="home-landing-picture">
          <div className="row">

            <div className="home-teaser-description small-offset-1 medium-offset-1 large-offset-1 small-10 medium-5 large-5 column">
              <h1 className="home-landing-title"><b>Phrase d'accroche à déterminer</b></h1>
              <h4 className="home-landing-subtitle">Ils nous font confiance.</h4>
            </div>

            <br/>
            <br/>
            <br/>
            <div className="medium-6 large-6 small-12 column">
              <div className="card medium-8 large-8 small-10 small-offset-1 medium-offset-2 large-offset-2 column">
                <h2><b>Inscription</b></h2>
                <form ref="form" onSubmit={this.onSubmit}>
                  <p>Email</p>
                  <input type="email" ref="email" placeholder="exemple@gmail.com"/>
                  <p>Password</p>
                  <input type="password" ref="password" placeholder="password"/>
                  <br/>
                  <Link to="/">
                    <button className="button expanded"><strong>Inscription</strong></button>
                  </Link>
                </form>
              </div>
            </div>

          </div>
        </div>

        <div className="home-student">
          <div className="row">
            <div className="home-package-description small-12 medium-12 large-12">
              <h2><b>Packages Etudiant</b></h2>
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
              urlImage="http://www.supportduweb.com/ftp/ybouane/scripts_astuces/gimp/cadre/image.png"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
            <CardPackage
              title="Package 3"
              urlImage="https://user.oc-static.com/files/6001_7000/6410.jpg"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
          </div>

          <br/>
          <div className="row">
            <div className="small-12 medium-10 large-8 small-offset-0 medium-offset-1 large-offset-2 columns start">
              <Link to="/">
                <button className="button expanded"><strong>Inscription</strong></button>
              </Link>
            </div>
          </div>

        </div>

        <div className="home-teacher">
          <div className="row">
            <div className="home-package-description small-12 medium-12 large-12">
              <h2><b>Avantages professeur</b></h2>
              <br/>
              <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.</p>
            </div>
          </div>

          <div className="row">
            <CardTransparent
              title="Avantage 1"
              urlImage="https://daks2k3a4ib2z.cloudfront.net/5599dd77c19d1f625d781d22/55c8f59d8f9512171195fdc4_Phone%20savings.png"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
            <CardTransparent
              title="Avantage 2"
              urlImage="http://www.iconsdb.com/icons/preview/white/time-8-xxl.png"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
            <CardTransparent
              title="Avantage 3"
              urlImage="http://www.iconsdb.com/icons/preview/white/star-xxl.png"
              description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
              />
          </div>

          <br/>
          <div className="row">
            <div className="small-12 medium-10 large-8 small-offset-0 medium-offset-1 large-offset-2 columns start">
              <Link to="/">
                <button className="button button-white expanded"><strong>Inscription</strong></button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;

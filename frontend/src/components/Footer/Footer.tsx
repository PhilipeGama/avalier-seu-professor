import "./Footer.css";
import {
  TwitterLogo,
  Envelope,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";

function App() {
  return (
    <footer>
      <div className="wrapper">
        <div className="container">
          <h3 className="collumnTitle">Quem somos?</h3>
          <ul className="list">
            
            <li>
              <a target={'_blank'} href="https://www.github.com/ruanx14"><GithubLogo className="icons" /></a>
              <a target={'_blank'} href="https://www.linkedin.com/in/ruanbarroso7/"><LinkedinLogo className="icons" /></a>
              <a target={'_blank'} href="https://www.github.com/ruanx14">Ruan Soares</a>
            </li>
            
            <li>
              <a target={'_blank'} href="https://www.github.com/mad1scool"><GithubLogo className="icons" /></a>
              <a target={'_blank'} href="https://www.linkedin.com/in/roberto-vinicius-695abb1bb/"><LinkedinLogo className="icons" /></a>
              <a target={'_blank'} href="https://www.github.com/mad1scool">Roberto Vinicius</a>
            </li>
            <li>
              <a target={'_blank'} href="https://www.github.com/PhilipeGama"><GithubLogo className="icons" /></a>
              <a target={'_blank'} href="https://www.linkedin.com/in/philipegama/"><LinkedinLogo className="icons" /></a>
              <a target={'_blank'} href="https://www.github.com/PhilipeGama">Philipe Gama</a>
            </li>
            <li>
              <a target={'_blank'} href="https://www.github.com/CarolinaRodrigues"><GithubLogo className="icons" /></a>
              <LinkedinLogo className="icons" />
              <a target={'_blank'} href="https://www.github.com/CarolinaRodrigues">Carolina Rodrigues</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <h3 className="collumnTitle">Contatos</h3>
          <ul className="list">

            <li>
              <Envelope className="icons" /> 
              <a href="mailto:robertovva@gmail.com">Email</a>
            </li>

            <li>
              <Phone className="icons" />
              <a href="tel:+5593991631430">Telefone</a> 
            </li>

            <li>
              <MapPin className="icons" /> 
              <a target={'_blank'} href="https://goo.gl/maps/7kXCjXxb2P5JwQcx9">Endereço</a>
            </li>

          </ul>
        </div>

        <div className="container">
          <h3 className="collumnTitle">Redes Sociais</h3>
          <ul className="list">

            <li>
              <a target={'_blank'} href="https://twitter.com/home"><TwitterLogo className="icons" /> Twitter</a>
            </li>

            <li>
              <a target={'_blank'} href="https://www.facebook.com/"><FacebookLogo className="icons" /> Facebook</a>
            </li>

            <li>
              <a target={'_blank'} href="https://www.instagram.com/"><InstagramLogo className="icons" /> Instagram</a>
            </li>

          </ul>
        </div>
      </div>
      
      <div className="footerBottom">
        <p> © 2022 | Avalie Seu Professor | Termos e Condições</p>
      </div>
    </footer>
  );
}

export default App;

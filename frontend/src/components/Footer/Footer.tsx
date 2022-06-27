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
              <GithubLogo className="icons" />
              <LinkedinLogo className="icons" />
              Ruan Soares
            </li>
            <li>
              <GithubLogo className="icons" />
              <LinkedinLogo className="icons" />
              Roberto Vinicius
            </li>
            <li>
              <GithubLogo className="icons" />
              <LinkedinLogo className="icons" />
              Philipe Gama
            </li>
            <li>
              <GithubLogo className="icons" />
              <LinkedinLogo className="icons" />
              Carolina Rodrigues
            </li>
          </ul>
        </div>

        <div className="container">
          <h3 className="collumnTitle">Contatos</h3>
          <ul className="list">
            <li>
              <Envelope className="icons" /> Email
            </li>
            <li>
              <Phone className="icons" /> Telefone
            </li>
            <li>
              <MapPin className="icons" /> Endereço
            </li>
          </ul>
        </div>

        <div className="container">
          <h3 className="collumnTitle">Redes Sociais</h3>
          <ul className="list">
            <li>
              <TwitterLogo className="icons" /> Twitter
            </li>
            <li>
              <FacebookLogo className="icons" /> Facebook
            </li>
            <li>
              <InstagramLogo className="icons" /> Instagram
            </li>
            <li>Rede social</li>
            <li>Outra rede</li>
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

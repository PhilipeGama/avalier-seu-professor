import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    let logged = 'My Account';
    
  return (
     <header>
        <div className="block info">
        </div>
        <div className="block search">
            <div className="info_content">
                <div className="search_content">
                    <img src="./src/assets/teacher.png" alt="default"></img> 
                </div>
            </div>
        </div>
        <nav className="block nav">
     

         
            <ul className="info_content">
                <Link to="/">
                    <li>Inicio</li>
                </Link>
                <Link to="/teacher">
                    <li>Professores</li>
                </Link>
                <Link to="/register-teacher">
                    <li>Adicionar Professor</li>
                </Link>
                <Link to="/about">
                    <li>Sobre</li>
                </Link>
            </ul>
        </nav>
     </header>
  )
}

export default Header

import "../styles/header.css";

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
                <li>Inicio</li>
                <li>Professores</li>
                <li>Adicionar Professor</li>
                <li>Sobre</li>
            </ul>
        </nav>
     </header>
  )
}

export default Header

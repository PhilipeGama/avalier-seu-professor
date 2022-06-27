import { Link } from "react-router-dom";
import "./Header.css";
import {List} from "phosphor-react";
import { useRef } from "react";

function Header() {     
    //const [active, setActive] = useState(false);
    const listClickCheck = useRef(HTMLUListElement);
    const clickable = useRef(HTMLUListElement);

    const setToogle = () => {
       /*  if(active){
            setActive(false);
        }else{
            setActive(true);
        } */       
        if(listClickCheck.current.style.transform=="translateX(0px)"){
            listClickCheck.current.style.transform = "translateX(-100%)";
            clickable.current.style.display = "none";
        }else{
            listClickCheck.current.style.transform = "translateX(0px)";
            clickable.current.style.display = "block";
        }
    }
    
    document.body.addEventListener('click', function(e){
        if(e.target == clickable.current){
            listClickCheck.current.style.transform = "translateX(-100%)";
            clickable.current.style.display = "none";
        }
        if(listClickCheck.current.childNodes!=undefined){
            for(var i=0;i<listClickCheck.current.childNodes.length;i++){
                listClickCheck.current.childNodes[i].addEventListener('click', () => {
                    listClickCheck.current.style.transform = "translateX(-100%)";
                    clickable.current.style.display = "none";
                });
            }
        }
       

    },true);
    
    return (
     <header>
        <div className="block info">
        </div>
        <div className="block search">
            <div className="info_content">
                <div className="search_content">
                   {/*  <img src="./src/assets/teacher.png" alt="default"></img>  */}
                   <h2 id="titleinit">Avalie seu Professor</h2>
                </div>
            </div>
        </div>
        <nav className="block nav">
            <div className="listBlock" onClick={(e) => setToogle()}>
                <List id="listMenu" />
                <h4 id="titleInitMobile">Avalie seu Professor</h4>
            </div>
            {/* <ul ref={listClickCheck}className={active ? "info_content listItemsOpened" : "info_content listItemsClosed"}> */}
            <ul ref={listClickCheck} className="info_content">
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
            <div ref={clickable} id="clickable"></div>
        </nav>
     </header>
  )
}

export default Header

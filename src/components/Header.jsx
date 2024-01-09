import { Link } from "react-router-dom";
import "./Header.css";
import "../index.css";
import { IconSearch } from "./Svg/IconSearch.jsx";
import { IconLanguage } from "./Svg/IconLanguage.jsx";

export const Header = () => {
  return (
    <header>
        
      <nav className="mainMenu">
        <div className="mainNav">
          <img src="public/imgs/LOGO_RESTFLIX.png" alt="Logotipo Filmin" />
        </div>
        <div className="mainNav">
          <a href="#">Inicio</a>
          <a href="#">Series</a>
          <a href="#">Películas</a>
          <a href="#">Novedades</a>
          <a href="#">Explorar por idiomas</a>
        </div>
        <div className="secondaryNav">
          <button className="suscriptionButton">Suscríbete</button>
          <button className="searchButton">
            <IconSearch />
          </button>
          <div className="selectLanguage">
            <div className="iconWorld"><IconLanguage /></div>
            <nav>
              <ul className="language">
                <li>
                  <Link to="/">
                    Español
                  </Link>
                </li>
                <li>
                  <Link to="/cat">
                    Catalán
                  </Link>
                </li>
              </ul>
            </nav>
            <ul className="language">
              <li>▼</li>
              <li>▲</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

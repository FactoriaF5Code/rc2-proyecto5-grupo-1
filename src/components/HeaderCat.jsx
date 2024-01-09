import { Link } from "react-router-dom";
import "./Header.css"; 
import { IconSearch } from "./Svg/IconSearch.jsx";
import { IconLanguage } from "./Svg/IconLanguage.jsx";

export const HeaderCat = () => {
  return (
    <header>
        
      <nav className="mainMenu">
        <div className="mainNav">
          <img src="public/imgs/LOGO_RESTFLIX.png" alt="Logotipo Filmin" />
        </div>
        <div className="mainNav">
          <a href="#">Inici</a>
          <a href="#">Sèries</a>
          <a href="#">Pel·lícules</a>
          <a href="#">Novetats</a>
          <a href="#">Explorar per idiomes</a>
        </div>
        <div className="secondaryNav">
          <button className="suscriptionButton">Subscriu-te</button>
          <button className="searchButton">
            <IconSearch />
          </button>
          <div className="selectLanguage">
            <div className="iconWorld"><IconLanguage /></div>
            <nav>
              <ul className="language">
                <li>
                  <Link to="/">
                    Espanyol
                  </Link>
                </li>
                <li>
                  <Link to="/cat">
                    Català
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

import "./Header.css";
import "../index.css";


export const Header = () => {
    return (
        <header>
            <nav className="mainMenu">
                <div className="mainNav">
                    <img src="public\imgs\LogoFilmin.svg" alt="Logotipo Filmin" />
                    <a href="#">Inicio</a>
                    <a href="#">Películas</a>
                    <a href="#">Series</a>
                    <a href="#">Colecciones</a>
                    <a href="#">Festivales</a>
                    <a href="#">Más
                        <svg id="arrowDown" width="12" height="8">
                            <path className="st0" d="M11.8,0.3c-0.4-0.4-1-0.5-1.4-0.1L5.9,4.1L1.7,0.3c-0.4-0.4-1-0.3-1.4,0.1c-0.4,0.4-0.3,1,0.1,1.4l4.9,4.4
                            c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.2l5.1-4.4C12.1,1.4,12.1,0.8,11.8,0.3z"/>
                        </svg>
                    </a>
                </div>
                <div className="secondaryNav">
                    <button className="suscriptionButton">Suscríbete</button>
                    <button className="loginButton">Iniciar Sesión</button>  
                    <button className="searchIcon">
                        <svg width="24" height="22">
                            <path className="st0" d="M23.1,18.8l-4.9-4.9c-0.1-0.1-0.1-0.1-0.2-0.1c0.7-1.3,1-2.7,1-4.3C19,4.3,14.7,0,9.5,0S0,4.3,0,9.5
	S4.3,19,9.5,19c2.6,0,5-1.1,6.7-2.8l4.7,4.7c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4C23.6,20.4,23.6,19.4,23.1,18.8z M9.5,16
	C5.9,16,3,13.1,3,9.5S5.9,3,9.5,3S16,5.9,16,9.5S13.1,16,9.5,16z"/>
                        </svg>
                    </button>
                </div>    
            </nav>
        </header>
    );
};

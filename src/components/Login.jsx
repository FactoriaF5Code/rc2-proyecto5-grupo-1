import { Header } from "./Header";
import { Footer } from "./Footer";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
    const [currentLanguage, setCurrentLanguage] = useState("es");
    return (
        <>

            <Header currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
            <section className= "imagenfondo">

            </section>
            <section className= "contenidologin">
                <div className="titulos">
                    <p className="titulo1">El descanso que te mereces.</p>
                    <h1 className="subtitulo">Disfruta del mejor contenido con el culo pegado al sofá y tú kilo de palomitas, así que... ¡dale al Play!</h1>
                </div>
                <form className="subscribe-form">
                    <input type="email" id="email" className="subscribe-input" placeholder="Dirección de correo"></input>
                    <button className="subscribe-button">SUSCRÍBETE AHORA</button>

                </form>
            </section>
            <Footer currentLanguage={currentLanguage} />

        </>
    );
};

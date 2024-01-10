import { Header } from "./Header";
import { Footer } from "./Footer";
import "./Login.css";
import  { useState } from "react";

export const Login = () => {
    const [currentLanguage, setCurrentLanguage] = useState("es");
    return (
        <>

<Header currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />

            <div style="text-align: center; margin: 30px;">
                <p>El descanso que te mereces. Disfruta del mejor contenido con el culo pegado al sofá y tú kilo de palomitas, así que... ¡dale al Play!</p>
            </div>
            <div className="subscribe-form">
                <label htmlFor="email">Dirección de tu correo electrónico:</label>
                <input type="email" id="email" className="subscribe-input" placeholder="tu@email.com"></input>
                    <button className="subscribe-button">SUSCRÍBETE AHORA</button>

            </div>

            <Footer currentLanguage={currentLanguage}  />

        </>
    );
};

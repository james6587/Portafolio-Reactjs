import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="home">
            <h1>
                Hey my name is <strong>James Vargas</strong>, I'm a
                Frontend development with <strong>React JS</strong>, <strong>Angular</strong>,
                <strong>Jquery programming languages</strong>, and <strong>CSS3</strong>, <strong>HTML5</strong>,
                <strong>Bootstrap</strong> styling and tags.
            </h1><br />
            <h2>
                <Link to="/contacto">Contact me.</Link>
            </h2>
        </div>
    );
};

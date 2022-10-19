import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hello, my name is <strong> James Vargas</strong>, I'm a Frontend
        developer, I work with programming languages like:
        <strong> React JS</strong>, <strong> Angular</strong>,
        <strong> Jquery</strong> and tag languages like: <strong> CSS3</strong>,
        <strong> HTML5</strong>, <strong> Bootstrap</strong>. <br />
        <br />
        I am good at building interpersonal relationships and I always try to
        have a good relationship with my team. <br />
        <br />
        Currently I have 1 year of experience, I define myself as a
        <strong> responsible </strong>
        and <strong>self-taught</strong> person, I like to listen to music, read
        documentation on different technologies on the market and in my spare
        time I like to exercise.
      </h1>
      <br />
      <h2>
        <Link to="/contacto">Contact me.</Link>
      </h2>
    </div>
  );
};

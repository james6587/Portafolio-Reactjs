import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return (
        <div className='home'>

            <h1>
                Hey my name is <strong>James Vargas</strong>, I am a web developer in Colombia,
                I'm a Frontend development with React JS, Angular, Jquery programming
                languages, and CSS3, HTML5, Bootstrap styling and tags.
            </h1>
            <h2>
                <Link to='/contacto'>Contact me.</Link>
            </h2>

            <section className='last-works'>
                <h2 className='heading'>Some proyects</h2>
                <p>Web development proyects</p>

                <div className='works'>

                </div>
            </section>

        </div>
    )
}

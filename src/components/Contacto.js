import React from 'react'


export const Contacto = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contact</h1>
            <div className='contacto'>
                <section className='email'>
                    <h2>Gmail</h2>
                    <p>jameseliotv@gmail.com</p>
                </section>
                <section className='number'>
                    <h2>Phone number</h2>
                    <p>3219480601</p>
                </section>
                <section className='linkedin'>
                    <h2>LinkedIn</h2>
                    <a href='https://www.linkedin.com/in/jamesvargass'>https://www.linkedin.com/in/jamesvargass</a>
                </section>
                <section className='github'>
                    <h2>GitHub</h2>
                    <a href='https://github.com/james6587'>https://github.com/james6587</a>
                </section>
            </div>

        </div>
    )
}

import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contacto = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contact</h1>
            <div className='contacto'>
                <section className='cont'>
                    <h2>Gmail</h2>
                    <p><EmailIcon /> &nbsp; jameseliotv@gmail.com</p>
                </section>
                <section className='cont'>
                    <h2>Phone number</h2>
                    <p><PhoneIcon /> &nbsp; +57 3219480601</p>
                </section>
                <section className='cont'>
                    <h2>LinkedIn</h2>
                    <a href='https://www.linkedin.com/in/jamesvargass'><LinkedInIcon /> &nbsp; https://www.linkedin.com/in/jamesvargass</a>
                </section>
                <section className='cont'>
                    <h2>GitHub</h2>
                    <a href='https://github.com/james6587'><GitHubIcon /> &nbsp; https://github.com/james6587</a>
                </section>
            </div>

        </div>
    )
}

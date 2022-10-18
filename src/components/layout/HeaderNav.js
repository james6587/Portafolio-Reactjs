import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>J</span>
                <h3>James Vargas WEB</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/more" className={({ isActive }) => isActive ? "active" : ""}>More</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

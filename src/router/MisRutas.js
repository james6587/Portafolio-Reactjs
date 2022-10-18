import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio"
import { More } from "../components/More"
import { Servicios } from "../components/Servicios"
import { Curriculum } from "../components/Curriculum"
import { Contacto } from "../components/Contacto"
import { HeaderNav } from '../components/layout/HeaderNav';
import { Fotter } from '../components/layout/Fotter';


export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/*HEADER Y NAVEGACION*/}
            <HeaderNav />


            {/*CONTENIDO CENTRAL*/}
            <section className='content'>
                <Routes>
                    <Route path='/*' element={<Navigate to="/Portafolio-Reactjs" />} />
                    <Route path='/Portafolio-Reactjs' element={<Inicio />} />
                    <Route path='/more' element={<More />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/*' element={<h1 className='heading'>Error 404</h1>} />
                </Routes>
            </section>

            {/*FOTTER*/}
            <Fotter />
        </BrowserRouter>
    )
}

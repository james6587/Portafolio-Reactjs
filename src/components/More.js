import React from 'react'
import Spline from '@splinetool/react-spline';

export const More = () => {
    return (
        <div className='page'>
            <h1 className='heading'>More</h1>


            <div className='page-item'>
                <section className='spline'>
                    <Spline scene="https://prod.spline.design/sbqo3l1AHmmvMzFR/scene.splinecode" />
                </section>
                <section className='spline'>
                    <Spline scene="https://prod.spline.design/OlYFZhlHSTaQgK0W/scene.splinecode" />
                </section>
            </div>


        </div>
    )
}

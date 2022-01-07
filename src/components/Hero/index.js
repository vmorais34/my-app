import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <>
            <div className="slick">
                <picture>
                    <img src="./images/banner.png" alt="Logo corebiz"/> 
                </picture>
                <picture>
                    <img src="./images/banner.png" alt="Logo corebiz"/> 
                </picture>
                <picture>
                    <img src="./images/banner - 2.png" alt="Logo corebiz"/> 
                </picture>
                <picture>
                    <img src="./images/banner - 3.png" alt="Logo corebiz"/> 
                </picture>
            </div>
            <section className="container">
                <article>
                    <h2 className="title-shelf">
                        Mais Vendidos
                    </h2>
                </article>
                Shelfs Section
            </section>


        </>
    )
}

export default Hero

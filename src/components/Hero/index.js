import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <>
            <div className="slick">
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
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

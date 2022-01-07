import React from 'react'
import "./Footer.css"

// function envia() {
//     var newsletter_name = document.getElementById("newsletter_name").value;
//     var newsletter_email = document.getElementById("newsletter_email").value;
//     if(newsletter_name === '' || newsletter_email === '') {
//         alert("Preencha todos os campos!");
//     }
//     else {
//         document.getElementById("formulario").submit();
//     }   
// }
function Footer() {
    return (
        <>
            <section className="newsleeter_box">
                <p>
                    Participe das nossas news com promoções e novidades! 
                </p>
                <article>
                    <input placeholder="Digite seu nome" id="newsletter_name">
                    
                    </input>
                    <input placeholder="Digite seu email" id="newsletter_email">
                    
                    </input>
                    {/* <input id="btn" type="button" onclick={envia()} name="go" value="Eu quero!"></input> */}
                    <button>
                        Eu quero!
                    </button>
                </article>
            </section>
            <footer>
                <div className="footer_box">
                    <section className="container flex">
                        <article className="local">
                            <h3>Localização</h3>

                            <p>
                            Avenida Andrômeda, 2000. Bloco 6 e 8 
                            <br/><br/>
                            Alphavile SP
                            <br/><br/>
                            brasil@corebiz.ag
                            <br/><br/>
                            +55 11 3090 1039
                            </p>
                        </article>
                        <article className="contact"> 
                            <button>
                                <img src="./images/icn-email.svg" alt="icone contato"></img>
                                Entre em contato
                            </button>
                            <button>
                                <img src="./images/icn-headset.svg" alt="icone contato"></img>
                                Fale com o nosso consultor online
                            </button>
                        </article>
                        <article className="poweredBy flex">
                            <div className="created">
                                Created by
                                <img src="./images/logo-corebiz-white.png" alt="Logo Corebiz"></img>
                            </div>
                            <div className="powered">
                                 Powered by
                                <img src="./images/icn-vtex.png" alt="Logo VTEX"></img>
                             </div>
                        </article>
                    </section>
                </div>
            </footer>   
        </>
    )
}

export default Footer

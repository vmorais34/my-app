import React from 'react'
import './Header.css'

function Header() {
    return (
        <>
            <header className="flex container">
                <div className="menu-mobile">
                    <button>
                            <img src="./images/icn-hamburguer.svg" alt="menu Mobile" width={22} height={15}/>
                    </button>
                </div>
                <h1>
                    <picture>
                        <img src="./images/logo-corebiz-preto-cinza.png" alt="Logo corebiz"/> 
                    </picture>
                </h1>
                <div className="search_box flex">
                    <input 
                        className="input_group"
                        placeholder="O que está procurando?"
                        >
                    </input>
                    <img className="lupa" src="./images/icn-lupa.svg" alt="Lupa busca" width={18} height={18}/>
                </div>
                <div className="actions_box flex">
                    <div className="actions_box-account">
                        <a href='/' className='flex'>                                               
                            <img src="./images/icn-user.svg" alt="User conta" width={18} height={18}/>
                            Minha conta
                        </a>
                    </div>
                    <div className="actions_box-cart">
                        <a href='/'>                                               
                            <img src="./images/icn-cart.svg" alt="Cart" width={18} height={18}/>
                        </a>
                    </div>
                </div>
            </header>
            <section className="search_box-mobile flex">
                <input 
                    className="input_group"
                    placeholder="O que está procurando?"
                    >
                </input>
                <img className="lupa" src="./images/icn-lupa.svg" alt="Lupa busca" width={18} height={18}/>
            </section>
        </>
    )
}

export default Header

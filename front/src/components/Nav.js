import React from 'react'
import './styles/Nav.scss'
import logo from '../components/assets/Logo_ML.png'

const Nav = () => {

    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="/">
                    <img className="mercadolibre-logo" alt="mercadolibre-logo" src={logo} />
                </a>
                <form className="search">
                    <input className="input" type="text" placeholder="Nunca dejes de buscar"></input>
                    <div className="button-container">
                        <button type="submit" className="button"></button>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Nav

import React from 'react'
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <nav className="mainNav mainContainer">
            <div>
                <Link to="/" className="menuLinks">Главная</Link>
                <a className="menuLinks">Котировки</a>
                <Link to="/report" className="menuLinks">Репорт</Link>
                <a className="menuLinks">История</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h3>100 000₽</h3>
                <div className="circle"></div>
            </div>
        </nav>
    )
}

export default Navbar;
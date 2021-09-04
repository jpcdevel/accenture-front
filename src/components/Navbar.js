import React from 'react'

function Navbar () {
    return (
        <nav className="mainNav mainContainer">
            <div>
                <a className="menuLinks">Главная</a>
                <a className="menuLinks">Котировки</a>
                <a className="menuLinks">Отчёты</a>
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
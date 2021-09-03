import React from 'react'

import PortfolioItemChoose from './PortfolioItemChoose'

function MainDash () {
    return (
        <div className="mainDash mainContainer">
            <div className="portfolio">
                <h1>Мои портфели</h1>
                <h2 className="addPortfolio">+</h2>

                <div className="portfolios">
                    <PortfolioItemChoose />
                    <PortfolioItemChoose />
                    <PortfolioItemChoose />
                </div>
            </div>
        </div>
    )
}

export default MainDash
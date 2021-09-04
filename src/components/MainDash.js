import React from 'react'

import Portfolio from './Portfolio'
import Recommendation from './Recommendation'
import Stock from './Stock'
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

            <Portfolio />

            <h1 className="mt-4">Рекомендации</h1>
            <div className="row">
                <Recommendation />
                <Recommendation />
                <Recommendation />
                <Recommendation />
            </div>

            <h1 className="mt-4">Мой портфель</h1>
            <div className="row">
                <Stock />
                <Stock />
                <Stock />
                <Stock />
            </div>
        </div>
    )
}

export default MainDash
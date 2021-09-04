import React, { useContext } from 'react'

import Portfolio from './Portfolio'
import Recommendation from './Recommendation'
import Stock from './Stock'
import PortfolioItemChoose from './PortfolioItemChoose'

import {PortfolioContext} from "../App";
import Report from "./Report";
import TestControl from "./TestControl";

function MainDash () {
    const { portfolios, currentPortfolio } = useContext(PortfolioContext);

    return (
        <div className="mainDash mainContainer">
            <div className="portfolio">
                <h1>Мои портфели</h1>
                <h2 className="addPortfolio">+</h2>

                <div className="portfolios">
                    {portfolios.map((portfolio, idx) => {
                        return (
                            <PortfolioItemChoose portfolio={portfolio} key={idx} />
                        )
                    })}
                </div>
            </div>



            {currentPortfolio.name && (
                <div>
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
                    <h1 className={"mt-4"}>Отчеты портфелей</h1>
                    <TestControl />
                </div>
            )}
        </div>
    )
}

export default MainDash
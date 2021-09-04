import React, {useContext} from 'react'

import {PortfolioContext} from "../App";

function Portfolio () {
    const { currentPortfolio } = useContext(PortfolioContext)

    return (
        <div className="portfolioOverview d-block mt-2">
            <h1>{currentPortfolio.name}</h1>
            <b>
                {currentPortfolio.riskStatus == 'low' && 'Консервативный портфель'}
                {currentPortfolio.riskStatus == 'medium' && 'Умеренный портфель'}
                {currentPortfolio.riskStatus == 'high' && 'Агрессивный портфель'}
            </b>
            <div className="portfolioParams">
                <div>
                    <h2>{currentPortfolio.cost}$</h2>
                    <p>
                        Стоимость портфеля
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>{currentPortfolio.yearChange}%</h3>
                    <p>
                        За последний год
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>{currentPortfolio.predictedIncome}$</h3>
                    <p>
                        Предполагаемая доходность
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>{currentPortfolio.risk}%</h3>
                    <p>
                        Рискованность портфеля
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>{currentPortfolio.limit}$</h3>
                    <p>
                        Лимит вероятных потерь
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;
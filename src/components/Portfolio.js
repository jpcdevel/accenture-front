import React from 'react'

function Portfolio () {
    return (
        <div className="portfolioOverview d-block mt-2">
            <h1>Высокорискованный портфель</h1>
            <b>Умеренно агрессивный портфель</b>
            <div className="portfolioParams">
                <div>
                    <h2>+110.10$</h2>
                    <p>
                        +10.2$ за последний день
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>-5%</h3>
                    <p>
                        За последний год
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>+110.10$</h3>
                    <p>
                        Предполагаемая доходность
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>48%</h3>
                    <p>
                        Рискованность портфеля
                    </p>
                </div>

                <div className="ms-5 paramBox">
                    <h3>12.5$</h3>
                    <p>
                        Лимит вероятных потерь
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;
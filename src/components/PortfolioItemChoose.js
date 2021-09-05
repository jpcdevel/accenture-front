import React, {useContext} from 'react'

import caseImg from '../static/images/caseImg.svg'
import {PortfolioContext} from "./MainDash";

function PortfolioItemChoose({ portfolio }) {
    const { currentPortfolio } = useContext(PortfolioContext)
    return (
        <div
            className={currentPortfolio.id == portfolio.id ? "portfolioItemChoose activeWhite" : "portfolioItemChoose"}
            onClick={() => document.location.href = `/portfolio/${portfolio.id}`}
        >
            <img src={caseImg} alt="" width="25px"/>
            <b className="ms-2">{ portfolio.name }</b>
        </div>
    )
}

export default PortfolioItemChoose;
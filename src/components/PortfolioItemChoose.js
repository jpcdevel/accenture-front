import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'

import caseImg from '../static/images/caseImg.svg'
import {PortfolioContext} from "./MainDash";

function PortfolioItemChoose({ portfolio }) {
    const history = useHistory()
    const { currentPortfolio } = useContext(PortfolioContext)
    return (
        <div
            className={currentPortfolio.id == portfolio.id ? "portfolioItemChoose activeWhite" : "portfolioItemChoose"}
            onClick={() => history.push(`portfolio/${portfolio.id}`)}
        >
            <img src={caseImg} alt="" width="25px"/>
            <b className="ms-2">{ portfolio.name }</b>
        </div>
    )
}

export default PortfolioItemChoose;
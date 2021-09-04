import React, {useContext} from 'react'

import caseImg from '../static/images/caseImg.svg'
import {PortfolioContext} from "../App";

function PortfolioItemChoose({ portfolio }) {
    const { currentPortfolio, getPortfolioById } = useContext(PortfolioContext)
    return (
        <div
            className={currentPortfolio.id == portfolio.id ? "portfolioItemChoose activeWhite" : "portfolioItemChoose"}
            onClick={() => getPortfolioById({
                variables: {
                    id: portfolio.id
                }
            })}
        >
            <img src={caseImg} alt="" width="25px"/>
            <b className="ms-2">{ portfolio.name }</b>
        </div>
    )
}

export default PortfolioItemChoose;
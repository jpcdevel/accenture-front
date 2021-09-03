import React from 'react'

import caseImg from '../static/images/caseImg.svg'

function PortfolioItemChoose() {
    return (
        <div className="portfolioItemChoose">
            <img src={caseImg} alt="" width="25px"/>
            <b className="ms-2">Все акции</b>
        </div>
    )
}

export default PortfolioItemChoose;
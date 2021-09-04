import React from 'react'

function Stock () {
    return (
        <div className="col-6">
            <div className="defaultBox d-flex" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>
                    APPL (Apple)
                </h2>
                <h3>100$</h3>
                <button className="defaultBtn">Купить</button>
            </div>
        </div>
    )
}

export default Stock
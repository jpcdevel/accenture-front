import React, { useState, useContext, useEffect } from 'react'
import { useMutation } from "@apollo/client";
import {toast} from "react-hot-toast";

import {ADD_SECURITY} from "../GraphQL/Mutations/addSecurity";
import {REMOVE_SECURITY} from "../GraphQL/Mutations/removeSecurity";

import {PortfolioContext} from "./MainDash";
import Loader from "./Loader";

function Stock ({ isMine, security }) {
    const [amount, setAmount] = useState(1)
    const [volumesAmount, setVolumesAmount] = useState(0)
    const { allVolumes, refetchGetPortfolio, refetchAll, currentPortfolio, getPortfolioById } = useContext(PortfolioContext)

    const [addSecurity, {loading: addLoading}] = useMutation(ADD_SECURITY, {
        onCompleted: (data) => {
            refetchGetPortfolio()
            return setTimeout (() => {
                toast.success('Ценная бумага добавлена');
            }, 100)
        },
        onError: (error => {
            return setTimeout (() => {
                toast.error('Ошибка!');
            }, 100)
        })
    })

    const [removeSecurity, {loading: removeLoading}] = useMutation(REMOVE_SECURITY, {
        onCompleted: (data) => {
            refetchGetPortfolio()

            return setTimeout (() => {
                toast.success('Ценная бумага удалена');
            }, 100)
        },
        onError: (error => {
            return setTimeout (() => {
                toast.error('Ошибка!');
            }, 100)
        })
    })

    useEffect(() => {
        let volumes = allVolumes.filter(volume => volume.security.name == security.name)
        setVolumesAmount(volumes.length)
        setAmount(amount + volumes.length)
    }, [allVolumes]);


    return (
        <div className="col-6">
            <Loader color={"#000"} loading={removeLoading} />
            <Loader color={"#000"} loading={addLoading} />
            {security && (
                <div className="defaultBox d-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2>
                            {security.name}
                        </h2>
                        <p>
                            {security.type == 'curr' && "Валюта"}
                            {security.type == 'obl' && "Облигации"}
                            {security.type == 'gobl' && "Гос. Облигации"}
                            {(security.type == 'fcom' || security.type == 'lcom' || security.type == 'scom') && "Акция"}
                        </p>
                    </div>
                    <h3>{security.cost}</h3>
                    <div>
                        <h3>{security.spoint}/100</h3>
                        <p>риск</p>
                    </div>

                    {isMine && (
                        <div className="d-flex" style={{alignItems: 'center', minWidth: "100px", justifyContent: 'flex-end'}}>
                            <h1
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    amount >= 0 && removeSecurity({
                                        variables: {
                                            idp: currentPortfolio.id,
                                            ids: security.id
                                        }
                                    })
                                    amount > 0 && setAmount(amount - 1)
                                }}
                            >
                                -
                            </h1>
                            <h2 className="me-2 ms-2">{amount}</h2>
                            <h1
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    addSecurity({
                                        variables: {
                                            idp: currentPortfolio.id,
                                            ids: security.id
                                        }
                                    })
                                    setAmount(amount + 1)
                                }}
                            >
                                +
                            </h1>
                        </div>
                    )}
                    {!isMine && (
                        <button
                            className="defaultBtn"
                            onClick={() => {
                                addSecurity({
                                    variables: {
                                        idp: currentPortfolio.id,
                                        ids: security.id
                                    }
                                })
                                setAmount(amount)
                            }}
                        >
                            Купить
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Stock
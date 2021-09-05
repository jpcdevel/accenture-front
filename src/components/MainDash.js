import React, { useContext, useState } from 'react'
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {toast} from "react-hot-toast";
import {useParams} from 'react-router-dom'

import { CREATE_PORTFOLIO } from "../GraphQL/Mutations/createPortfolio";

import Portfolio from './Portfolio'
import Recommendation from './Recommendation'
import Stock from './Stock'
import PortfolioItemChoose from './PortfolioItemChoose'
import Loader from './Loader'
import Report from "./Report";
import TestControl from "./TestControl";

import {GET_PORTFOLIO_BY_ID} from "../GraphQL/Queries/getPortfolioById";
import {GET_ALL_VOLUMES} from "../GraphQL/Queries/getAllVolumes";
import {GET_ALL_PORTFOLIOS} from "../GraphQL/Queries/getAllProtfolios";
import {GET_ALL_SECURITIES} from "../GraphQL/Queries/getAllSecurities";

export const PortfolioContext = React.createContext({})


function MainDash () {
    const { id } = useParams()
    const { loading: loadingSingle, refetch: refetchGetPortfolio } = useQuery(GET_PORTFOLIO_BY_ID, {
        variables: {
            id
        },
        onCompleted: (data) => {
            setCurrentPortfolio(data.getPortfolioById)
        },
        onError: (error) => {
            return setTimeout ((error) => {
                toast.error('Ошибка!');
            }, 100)
        },
        notifyOnNetworkStatusChange: true
    });

    const { loading: loadingVolumes } = useQuery(GET_ALL_VOLUMES, {
        variables: {
            id
        },
        onCompleted: (data) => {
            setAllVolumes(data.getAllVolumes)
        },
        onError: (error) => {
            return setTimeout ((error) => {
                toast.error('Ошибка!');
            }, 100)
        }
    });

    const {loading: loadingAll, refetch: refetchAll} = useQuery(GET_ALL_PORTFOLIOS, {
        onCompleted: (data) => {
            setPortfolios(data.getAllPortfolios)
        },
        onError: (error) => {
            return setTimeout ((error) => {
                toast.error('Ошибка!');
            }, 100)
        },

        notifyOnNetworkStatusChange: true
    })

    const [portfolios, setPortfolios] = useState([])
    const [currentPortfolio, setCurrentPortfolio] = useState([])
    const [allSecurities, setAllSecurities] = useState([])
    const [allVolumes, setAllVolumes] = useState([])

    const contextValues = {
        portfolios, setPortfolios,
        currentPortfolio, setCurrentPortfolio,
        refetchGetPortfolio,
        allSecurities, setAllSecurities,
        allVolumes, setAllVolumes,
        refetchAll
    }

    const {loading: loadingSecurities} = useQuery(GET_ALL_SECURITIES, {
        onCompleted: (data) => {
            console.log(data)
            setAllSecurities(data.getAllSecurities)
        },
        onError: (error) => {
            return setTimeout ((error) => {
                toast.error('Ошибка!');
            }, 100)
        }
    })

    const [toBuyType, setToBuyType] = useState('rec')
    const [name, setName] = useState('')
    const [risk, setRisk] = useState('')
    const [limit, setLimit] = useState()

    const [createPortfolio, {loading: createLoading}] = useMutation(CREATE_PORTFOLIO, {
        onCompleted: (data) => {
            document.location.href = `/portfolio/${data.createPortfolio.portfolio.id}`
        },
        onError: (error => {
            return setTimeout (() => {
                toast.error('Ошибка!');
            }, 100)
        })
    })

    return (
        <PortfolioContext.Provider value={contextValues}>
        <Loader color={"#000"} loading={createLoading} />
        <Loader color={"#000"} loading={loadingAll} />
        <Loader color={"#000"} loading={loadingSingle} />
        <Loader color={"#000"} loading={loadingSecurities} />
        <Loader color={"#000"} loading={loadingVolumes} />
        <div className="mainDash mainContainer">

            <div className="portfolio">
                <h1>Мои портфели</h1>
                <h2 className="addPortfolio" data-bs-toggle="modal" data-bs-target="#exampleModal">+</h2>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">Создание портфеля</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <form
                                action=""
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    createPortfolio({
                                        variables: {
                                            name,
                                            risk,
                                            limit: parseInt(limit, 10)
                                        }
                                    })
                                }}
                            >
                                <div className="modal-body">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={"Название портфеля"} required
                                    />
                                    <input
                                        type="number"
                                        className="form-control mt-2"
                                        onChange={(e) => setLimit(e.target.value)}
                                        placeholder={"Лимит вероятных потерь ($)"} required
                                    />
                                    <select
                                        style={{width: '100%', padding: '5px'}}
                                        onChange={(e) => setRisk(e.target.value)}
                                        className="mt-2" required
                                    >
                                        <option value="medium" disabled selected>Риск профиль</option>
                                        <option value="low">Консервативный</option>
                                        <option value="medium">Умеренный</option>
                                        <option value="high">Агреессивный</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть
                                    </button>

                                        <button type="submit" className="btn btn-primary">Создать</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



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
                        {currentPortfolio.risk > (currentPortfolio.riskStatus == 'low' ? 32 : currentPortfolio.riskStatus == 'medium' ? 65 : 98) && (
                            <Recommendation msg={1} />
                        )}

                        {currentPortfolio.risk < (currentPortfolio.riskStatus == 'low' ? 32 : currentPortfolio.riskStatus == 'medium' ? 65 : 98) && (
                            <Recommendation msg={3} />
                        )}

                        {/*<Recommendation msg={2} />*/}
                    </div>

                    <h1 className="mt-4">Мой портфель</h1>
                    <div className="row">
                        {currentPortfolio.securities.map((security, idx) => {
                            return (
                                <Stock security={security} isMine={true} key={idx} />
                            )
                        })}

                        {currentPortfolio.securities.length == 0 && (
                            <p>Здесь ничего нет!</p>
                        )}
                    </div>

                    <div className="d-flex" style={{alignItems: 'center', justifyContent: 'space-between'}}>
                        <h1 className="mt-4">Рекомендуем вам</h1>
                        <div className="d-flex">
                            <button
                                className={toBuyType == 'rec' ? "catBtn activeWhite" : "catBtn"}
                                onClick={() => setToBuyType('rec')}
                            >
                                Рекомендации
                            </button>
                            <button
                                className={toBuyType == 'all' ? "catBtn activeWhite" : "catBtn"}
                                onClick={() => setToBuyType('all')}
                            >
                                Всё
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {toBuyType == 'rec' && currentPortfolio.recommendedSecurities.map((security, idx) => {
                            return (
                                <Stock security={security} key={idx} />
                            )
                        })}

                        {toBuyType == 'all' && allSecurities.map((security, idx) => {
                            return (
                                <Stock security={security} key={idx} />
                            )
                        })}
                    </div>
                    <h1 className={"mt-4"}>Отчеты портфелей</h1>
                    <TestControl />
                </div>
            )}
        </div>
        </PortfolioContext.Provider>
    )
}

export default MainDash
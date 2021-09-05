import React, {useContext} from 'react'
import {useQuery} from "@apollo/client";
import { useHistory } from 'react-router-dom'

import {PortfolioContext} from "./MainDash";

import {GET_ALL_PORTFOLIOS} from "../GraphQL/Queries/getAllProtfolios";
import {toast} from "react-hot-toast";

function Redirect () {
    const history = useHistory()
    const {getPortfolioById} = useContext(PortfolioContext)
    const {loading: loadingAll, refetch: refetchAll} = useQuery(GET_ALL_PORTFOLIOS, {
        onCompleted: (data) => {
            if (data.getAllPortfolios.length !== 0) {
                getPortfolioById({
                    variables: {
                        id: data.getAllPortfolios[0].id
                    }
                })
            }
        },
        onError: (error) => {
            return setTimeout ((error) => {
                toast.error('Ошибка!');
            }, 100)
        },

        notifyOnNetworkStatusChange: true
    })



    return (
        <></>
    )
}

export default Redirect
import React from 'react'
import {useQuery} from "@apollo/client";
import { useHistory } from 'react-router-dom'

import {GET_ALL_PORTFOLIOS} from "../GraphQL/Queries/getAllProtfolios";
import {toast} from "react-hot-toast";

function Redirect () {
    const history = useHistory()
    const {loading: loadingAll, refetch: refetchAll} = useQuery(GET_ALL_PORTFOLIOS, {
        onCompleted: (data) => {
            if (data.getAllPortfolios.length !== 0) {
                history.push(`portfolio/${data.getAllPortfolios[0].id}`)
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
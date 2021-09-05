import React from 'react'
import {gql} from "@apollo/client";

export const CREATE_PORTFOLIO = gql`
    mutation createPortfolio($name: String!, $risk: String!, $limit: Int!) {
        createPortfolio(name: $name, risk: $risk, limit: $limit) {
            portfolio {
                id
            }
        }
    }
`


import {gql} from '@apollo/client'

export const GET_ALL_SECURITIES = gql`
    query {
        getAllSecurities {
            id
            name
            volatility
            type
            price
            var
            tog
            pne
            type
            debtLoad
            capm
            spoint
        }
    }
`


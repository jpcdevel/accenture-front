import {gql} from '@apollo/client'

export const GET_ALL_PORTFOLIOS = gql`
    query {
        getAllPortfolios {
            id
            name
        }
    }
`


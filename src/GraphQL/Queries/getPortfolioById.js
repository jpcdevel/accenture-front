import {gql} from '@apollo/client'

export const GET_PORTFOLIO_BY_ID = gql`
    query($id: ID!) {
        getPortfolioById(id: $id) {
            id
            cost
            riskStatus
            yearChange
            limit
            predictedIncome
            risk
            yearIncome
            securities {
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
            recommendedSecurities {
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
            dateCreated
            name
        }
    }
`


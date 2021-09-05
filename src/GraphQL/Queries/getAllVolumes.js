import {gql} from '@apollo/client'

export const GET_ALL_VOLUMES = gql`
    query($id: ID!) {
        getAllVolumes(id: $id) {
            portfolio {
                id
                name
            }
            security {
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
    }
`


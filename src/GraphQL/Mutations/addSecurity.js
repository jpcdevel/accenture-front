import React from 'react'
import {gql} from "@apollo/client";

    export const ADD_SECURITY = gql`
    mutation addSecurity($idp: ID!, $ids: ID!) {
        addSecurity(idp: $idp, ids: $ids) {
            portfolio {
                id
            }
        }
    }
`


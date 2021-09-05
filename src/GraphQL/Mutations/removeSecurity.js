import React from 'react'
import {gql} from "@apollo/client";

export const REMOVE_SECURITY = gql`
    mutation removeSecurity($idp: ID!, $ids: ID!) {
        removeSecurity(idp: $idp, ids: $ids) {
            portfolio {
                id
            }
        }
    }
`


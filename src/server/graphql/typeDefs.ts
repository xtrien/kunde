import gql from 'graphql-tag'

export const typeDefs = gql`
    # The "Query" type is the root of all GraphQL queries.
    type Query {
        einKunde(email: String): Kunde
        alleKunden: [Kunde]
    }

    # Mutation type to modify data
    type Mutation {
        addKunde(
            email: String!
            passWord: String!
            vorName: String
            nachName: String
            strasse: String
            hausNummer: String
            plz: String
            stadt: String
            land: String
            telefon: String
        ): MutationResult
        changeKunde(
            email: String!
            passWord: String
            vorName: String
            nachName: String
            strasse: String
            hausNummer: String
            plz: String
            stadt: String
            land: String
            telefon: String
        ): MutationResult
        deleteKunde(email: String!): MutationResult
        login(email: String!, password: String!): MutationResult
    }

    "Wird bei Ausfuehren einer Mutation zurueck gegeben"
    type MutationResult {
        status: String!
        message: String!
    }

    "Kundenprofil"
    type Kunde {
        email: String!
        passWord: String!
        vorName: String
        nachName: String
        strasse: String
        hausNummer: String
        plz: String
        stadt: String
        land: String
        telefon: String
    }
`

export const typeDefs = `
    # The "Query" type is the root of all GraphQL queries.
    type Query {
    getKunde(vorname: String!): Kunde
    }

    # Mutation type to modify data
    type Mutation {
    deleteKunde(vorname: String!): Kunde
    }

    "Publically accessible Kunden profile"
    type Kunde {
    vorname: String!
    nachname: String!
    }
`;

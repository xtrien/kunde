export const typeDefs = `
    # The "Query" type is the root of all GraphQL queries.
    type Query {
    einKunde(id: ID!): Kunde
    alleKunden: [Kunde]
    }

    # Mutation type to modify data
    type Mutation {
    addKunde(vorname: String!, nachname: String!, email: String!, vorName: String!, nachName: String!, strasse: String!, hausNummer: String!, plz: Int!, stadt: String!, land: String!, telefon: Int): Kunde
    changeKunde(vorname: String!, nachname: String!, email: String!, vorName: String!, nachName: String!, strasse: String!, hausNummer: String!, plz: Int!, stadt: String!, land: String!, telefon: Int): Kunde
    deleteKunde(id: ID!): Kunde
    login(email: String!, password: String!): String
    }

    "Kundenprofil"
    type Kunde {
    vorname: String!
    nachname: String!
    email: String!
    vorName: String!
    nachName: String!
    strasse: String!
    hausNummer: String!
    plz: Int!
    stadt: String!
    land: String!
    telefon: Int
    }
`;

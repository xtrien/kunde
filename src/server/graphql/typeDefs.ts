import gql from "graphql-tag";

export const typeDefs = gql`
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    einKunde(id: ID!): Kunde
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
    ): Kunde
    changeKunde(
      email: String
      passWord: String
      vorName: String
      nachName: String
      strasse: String
      hausNummer: String
      plz: String
      stadt: String
      land: String
      telefon: String
    ): Kunde
    deleteKunde(id: ID!): Kunde
    login(email: String!, password: String!): String
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
`;

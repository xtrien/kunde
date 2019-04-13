import {
  addKunde,
  changeKunde,
  deleteKunde,
  alleKunden,
  einKunde,
  login
} from "../db/mongo";

export const resolvers = {
  Query: {
    alleKunden: async () => {
      alleKunden();
    },
    einKunde: async id => {
      einKunde(id);
    }
  },
  Mutation: {
    deleteKunde: async id => deleteKunde(id),
    changeKunde: async (
      email,
      passWord,
      vorName,
      nachName,
      strasse,
      hausNummer,
      plz,
      stadt,
      land,
      telefon
    ) =>
      changeKunde(
        email,
        passWord,
        vorName,
        nachName,
        strasse,
        hausNummer,
        plz,
        stadt,
        land,
        telefon
      ),
    addKunde: async (
      email,
      passWord,
      vorName,
      nachName,
      strasse,
      hausNummer,
      plz,
      stadt,
      land,
      telefon
    ) =>
      addKunde(
        email,
        passWord,
        vorName,
        nachName,
        strasse,
        hausNummer,
        plz,
        stadt,
        land,
        telefon
      ),
    login: async (email, password) => login(email, password)
  }
};

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
      return alleKunden();
    },
    einKunde: async (_: any, args: object) => {
      return einKunde(args);
    }
  },
  Mutation: {
    deleteKunde: async (_: any, args: object) => {
      return deleteKunde(args);
    },
    changeKunde: async (_: any, args: object) => {
      return changeKunde(args);
    },
    addKunde: async (_: any, args: object) => {
      return addKunde(args);
    },
    login: async (_: any, args: object) => login(args)
  }
};

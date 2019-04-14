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
    alleKunden: async (_: any, __: any, { kunde }: any) => {
      return alleKunden(kunde);
    },
    einKunde: async (_: any, args: object, { kunde }: any) => {
      return einKunde(args, kunde);
    }
  },
  Mutation: {
    deleteKunde: async (_: any, args: object, { kunde }: any) => {
      return deleteKunde(args, kunde);
    },
    changeKunde: async (_: any, args: object, { kunde }: any) => {
      return changeKunde(args, kunde);
    },
    addKunde: async (_: any, args: object) => {
      return addKunde(args);
    },
    login: async (_: any, args: object) => {
      return login(args);
    }
  }
};

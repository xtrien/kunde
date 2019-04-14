import { Kunde } from "../model/kunde";
import { hashPw, checkPw } from "../crypt/crypt";

export const login = async (email: string, password: string) => {};

export const addKunde = async (args: any) => {
  const hashedpw = await hashPw(args.passWord);
  args.passWord = hashedpw;
  return await Kunde.create(args)
    .then(function() {
      return { status: "success", message: "Kunde wurde erfolgreich erstellt" };
    })
    .catch(function(err: object) {
      return { status: "error", message: err.errmsg };
    });
};

export const changeKunde = async (args: object) => {
  return await Kunde.findOneAndUpdate({ email: args.email }, args)
    .then(function() {
      return { status: "success", message: "Kunde wurde erfolgreich geändert" };
    })
    .catch(function(err: object) {
      return { status: "error", message: err.errmsg };
    });
};

export const deleteKunde = async (args: object) => {
  return await Kunde.deleteOne({ email: args.email })
    .then(function() {
      return { status: "success", message: "Kunde wurde erfolgreich gelöscht" };
    })
    .catch(function(err: object) {
      return { status: "error", message: err.errmsg };
    });
};

export const alleKunden = async () => {
  return await Kunde.find().then(function(res: object) {
    return res;
  });
};

export const einKunde = async (args: object) => {
  return await Kunde.findOne({ email: args.email }).then(function(res: object) {
    return res;
  });
};

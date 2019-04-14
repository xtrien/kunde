import { Kunde, validateKunde } from "../model/kunde";
import { hashPw, checkPw } from "../crypt/crypt";
import { sendMail } from "../mail/mailer";
const { createToken } = require("../crypt/auth");

export const login = async (args: any) => {
  return await Kunde.findOne({ email: args.email })
    .then(async function(res: any) {
      const isValid = await checkPw(args.password, res.passWord);
      if (isValid) {
        const token = await createToken(args.email);
        return { status: "success", message: token };
      }
      return { status: "invalid", message: "Passwort ungueltig" };
    })
    .catch(function(err: any) {
      return { status: "error", message: err.errmsg };
    });
};

export const addKunde = async (args: any) => {
  // Validiere Kundendaten
  const isValidKunde = await validateKunde(args);
  if (isValidKunde !== undefined) {
    return isValidKunde;
  }
  const hashedpw = await hashPw(args.passWord);
  args.passWord = hashedpw;
  return await Kunde.create(args)
    .then(function() {
      sendMail(
        args.email,
        "Willkommen zur Kundenverwaltung",
        "Guten Tag \n Sie wurden in die Beispiel-Kundenverwaltung aufgenommen. \n Mit freundlichen Gruessen, \n die Kundenverwaltung"
      );
      return { status: "success", message: "Kunde wurde erfolgreich erstellt" };
    })
    .catch(function(err: any) {
      return { status: "error", message: err.errmsg };
    });
};

export const changeKunde = async (args: any, kunde: string) => {
  const isValidKunde = await validateKunde(args);
  if (isValidKunde !== undefined) {
    return isValidKunde;
  }
  // Ueberpruefe Berechtigung
  if (args.email !== kunde && "admin@admin.admin" !== kunde) {
    return { status: "invalid", message: "Nicht authorisiert" };
  }
  const hashedpw = await hashPw(args.passWord);
  args.passWord = hashedpw;
  return await Kunde.findOneAndUpdate({ email: args.email }, args)
    .then(function() {
      return { status: "success", message: "Kunde wurde erfolgreich geändert" };
    })
    .catch(function(err: any) {
      return { status: "error", message: err.errmsg };
    });
};

export const deleteKunde = async (args: any, kunde: string) => {
  if (args.email !== kunde && "admin@admin.admin" !== kunde) {
    return { status: "invalid", message: "Nicht authorisiert" };
  }
  return await Kunde.deleteOne({ email: args.email })
    .then(function() {
      return { status: "success", message: "Kunde wurde erfolgreich gelöscht" };
    })
    .catch(function(err: any) {
      return { status: "error", message: err.errmsg };
    });
};

export const alleKunden = async (kunde: string) => {
  if (kunde !== "admin@admin.admin") {
    return { status: "invalid", message: "Nicht authorisiert" };
  }
  return await Kunde.find().then(function(res: object) {
    return res;
  });
};

export const einKunde = async (args: any, kunde: string) => {
  if (args.email !== kunde && "admin@admin.admin" !== kunde) {
    return { status: "invalid", message: "Nicht authorisiert" };
  }
  return await Kunde.findOne({ email: args.email }).then(function(result: any) {
    return result;
  });
};

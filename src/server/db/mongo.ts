import { Kunde } from "../model/kunde";
export const login = async (email, password) => {};

export const addKunde = async (
  email: string,
  vorName: string,
  nachName: string,
  strasse: string,
  hausNummer: string,
  plz: string,
  stadt: string,
  land: string,
  telefon: string
) => {
  Kunde.create({
    email: "aa@bb.cc",
    passWord: "1234"
    // email,
    // vorName,
    // nachName,
    // strasse,
    // hausNummer,
    // plz,
    // stadt,
    // land,
    // telefon
  });
  return "Done";
};

export const changeKunde = async (
  email,
  vorName,
  nachName,
  strasse,
  hausNummer,
  plz,
  stadt,
  land,
  telefon
) => {
  return await Kunde.update(
    email,
    vorName,
    nachName,
    strasse,
    hausNummer,
    plz,
    stadt,
    land,
    telefon
  );
};

export const deleteKunde = async id => {
  return await Kunde.delete(id);
};

export const alleKunden = async () => {
  return await Kunde.find();
};

export const einKunde = async id => {
  return await Kunde.findById(id);
};

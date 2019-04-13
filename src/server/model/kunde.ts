// https://brianflove.com/2016/10/04/typescript-declaring-mongoose-schema-model/

import { Document, Schema, model } from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = "mongodb://localhost:27017/kunde";

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);

import { isUUID } from "validator";

interface KundeDocument extends Document {
  email?: string;
  passWord?: string;
  vorName: string;
  nachName: string;
  strasse: string;
  hausNummer: string;
  plz: string;
  stadt: string;
  land: string;
  telefon: string;
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  passWord: { type: String, required: true },
  vorName: { type: String },
  nachName: { type: String },
  strasse: { type: String },
  hausNummer: { type: String },
  plz: { type: String },
  stadt: { type: String },
  land: { type: String },
  telefon: { type: String }
});

export const Kunde = model<KundeDocument>("Kunde", schema);

// Validierung mit validator
const isEmpty = (obj: string | undefined) =>
  obj === undefined || obj === null || obj === "";

export const validateKunde = (kunde: any) => {
  const err: any = {};
  const { email } = kunde;

  if (!kunde.isNew && !isUUID(kunde._id)) {
    err.id = "Der Kunde hat eine ungueltige ID.";
  }
  if (isEmpty(email)) {
    err.titel = "Ein Kunde  muss eine email haben.";
  }
  return Object.keys(err).length === 0 ? undefined : err;
};

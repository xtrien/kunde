// https://brianflove.com/2016/10/04/typescript-declaring-mongoose-schema-model/

import { Document, Schema, model } from "mongoose";
import { isUUID } from "validator";

export interface KundeDocument extends Document {
  email?: string;
  vorName?: string;
  nachName?: string;
  strasse?: string;
  hausNummer?: string;
  plz?: number;
  stadt?: string;
  land?: string;
  telefon: number;
}

export const schema = new Schema({
  _id: { type: String },
  email: { type: String, required: true },
  vorName: { type: String, required: true },
  nachName: { type: String, required: true },
  strasse: { type: String, required: true },
  hausNummer: { type: Number, required: true },
  plz: { type: Number, required: true },
  stadt: { type: String, required: true },
  land: { type: String, required: true },
  telefon: { type: Number, required: true }
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

import mongoose = require("mongoose");
import Kunde = require("../model/kunde");

export const login = (email, password) => {};

export const addKunde = (
  email,
  vorName,
  nachName,
  strasse,
  hausNummer,
  plz,
  stadt,
  land,
  telefon
) => {};

export const changeKunde = (
  email,
  vorName,
  nachName,
  strasse,
  hausNummer,
  plz,
  stadt,
  land,
  telefon
) => {};

export const deleteKunde = id => {};

export const alleKunden = () => {};

export const einKunde = id => {};

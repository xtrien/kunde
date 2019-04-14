const bcrypt = require("bcrypt");
const saltRounds = 10;
import { logger } from "../shared/logger";

export const hashPw = async (plainTextPassword: string) => {
  return await bcrypt
    .hash(plainTextPassword, saltRounds)
    .then(function(hash: string) {
      return hash;
    });
};

export const checkPw = async (
  plainTextPassword: string,
  HashedPassword: string
) => {
  return await bcrypt
    .compare(plainTextPassword, HashedPassword)
    .then(function(res: boolean) {
      return res;
    })
    .catch(function(err: any) {
      logger.error(`Passwort kann nicht validiert werden ${err}`);
    });
};

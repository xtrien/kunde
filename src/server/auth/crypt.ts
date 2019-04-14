import * as bcrypt from 'bcrypt'
const saltRounds = 10
import { logger } from '../shared/logger'

export const hashPw = async (plainTextPassword: string) => {
    return bcrypt.hash(plainTextPassword, saltRounds).then((hash: string) => {
        return hash
    })
}

export const checkPw = async (
    plainTextPassword: string,
    hashedPassword: string,
) => {
    return bcrypt
        .compare(plainTextPassword, hashedPassword)
        .then((res: boolean) => {
            return res
        })
        .catch((err: any) => {
            logger.error(`Passwort kann nicht validiert werden ${err}`)
        })
}

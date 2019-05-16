import { checkPw, hashPw } from '../auth/crypt'
import { createToken } from '../auth/jwt'
import { kundeModel, validateKunde } from '../model/kunde'
import { logger } from '../shared/logger'
import { sendMail } from '../shared/mailer'

export const login = async (args: any) => {)
    return kundeModel
        .findOne({ email: args.email })
        .then(async (res: any) => {
            const isValid = await checkPw(args.password, res.passWord)
            if (isValid === true) {
                logger.debug('Login erfolgt')
                const token = createToken(args.email)
                return { status: 'success', message: token }
            }
            return { status: 'invalid', message: 'Passwort ungueltig' }
        })
        .catch((err: any) => {
            logger.debug(`Login nicht moeglich: ${err}`)
            return { status: 'error', message: err.errmsg }
        })
}

export const addKunde = async (args: any) => {
    // Validiere Kundendaten
    const isValidKunde = await validateKunde(args)
    if (isValidKunde !== undefined) {
        return isValidKunde
    }
    const hashedpw = await hashPw(args.passWord)
    args.passWord = hashedpw
    return kundeModel
        .create(args)
        .then(() => {
            logger.debug('Neuer Kunde wurde angelegt')
            sendMail(
                args.email,
                'Willkommen zur Kundenverwaltung',
                `Guten Tag \n Sie wurden in die Beispiel-Kundenverwaltung aufgenommen.
                \n Mit freundlichen Gruessen, \n die Kundenverwaltung`,
            )
            return {
                status: 'success',
                message: 'Kunde wurde erfolgreich erstellt',
            }
        })
        .catch((err: any) => {
            logger.debug(`Kunde kann nicht angelegt werden: ${err}`)
            return { status: 'error', message: err.errmsg }
        })
}

export const changeKunde = async (args: any, kunde: string) => {
    const isValidKunde = await validateKunde(args)
    if (isValidKunde !== undefined) {
        return isValidKunde
    }
    // Ueberpruefe Berechtigung
    if (args.email !== kunde && 'admin@admin.admin' !== kunde) {
        logger.debug('Authorisierungsfehler')
        return { status: 'invalid', message: 'Nicht authorisiert' }
    }
    const hashedpw = await hashPw(args.passWord)
    args.passWord = hashedpw
    return kundeModel
        .findOneAndUpdate({ email: args.email }, args)
        .then(() => {
            logger.debug('Kunde wurde geaendert')
            return {
                status: 'success',
                message: 'Kunde wurde erfolgreich geändert',
            }
        })
        .catch((err: any) => {
            logger.debug(`Kunde kann nicht geaendert werden: ${err}`)
            return { status: 'error', message: err.errmsg }
        })
}

export const deleteKunde = async (args: any, kunde: string) => {
    if (args.email !== kunde && 'admin@admin.admin' !== kunde) {
        logger.debug('Authorisierungsfehler')
        return { status: 'invalid', message: 'Nicht authorisiert' }
    }
    return kundeModel
        .deleteOne({ email: args.email })
        .then(() => {
            logger.debug('Kunde wurde geloescht')
            return {
                status: 'success',
                message: 'Kunde wurde erfolgreich gelöscht',
            }
        })
        .catch((err: any) => {
            logger.debug(`Kunde kann nicht entfernt werden: ${err}`)
            return { status: 'error', message: err.errmsg }
        })
}

export const alleKunden = async (kunde: string) => {
    if (kunde !== 'admin@admin.admin') {
        logger.debug('Authorisierungsfehler')
        return { status: 'invalid', message: 'Nicht authorisiert' }
    }
    return kundeModel
        .find()
        .then((res: object) => {
            logger.debug('alleKunden query')
            return res
        })
        .catch((err: any) => {
            logger.error(`Fehler bei alleKunden query ${err}`)
            return
        })
}

export const einKunde = async (args: any, kunde: string) => {
    if (args.email !== kunde && 'admin@admin.admin' !== kunde) {
        logger.debug('Authorisierungsfehler')
        return { status: 'invalid', message: 'Nicht authorisiert' }
    }
    return kundeModel
        .findOne({ email: args.email })
        .then((result: any) => {
            logger.debug('einKunde query')
            return result
        })
        .catch((err: any) => {
            logger.error(`Fehler bei einKunde query ${err}`)
            return
        })
}

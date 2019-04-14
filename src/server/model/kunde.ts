// https://brianflove.com/2016/10/04/typescript-declaring-mongoose-schema-model/

import { connect, connection, Document, model, Schema } from 'mongoose'
import { isEmail } from 'validator'

import { logger } from '../shared/logger'

const url = 'mongodb://localhost:27017/kunde'

connect(
    url,
    { useNewUrlParser: true },
)
connection.once('open', () => logger.info(`Connected to mongo at ${url}`))

interface KundeDocument extends Document {
    email?: string
    passWord?: string
    vorName: string
    nachName: string
    strasse: string
    hausNummer: string
    plz: string
    stadt: string
    land: string
    telefon: string
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
    telefon: { type: String },
})

export const kundeModel = model<KundeDocument>('Kunde', schema)

// Validierung mit validator
export const validateKunde = (kunde: any) => {
    const err: any = {}

    if (!isEmail(kunde.email)) {
        err.status = 'invalid'
        err.message = 'Ein Kunde muss eine gueltige Email haben.'
    }
    return Object.keys(err).length === 0 ? undefined : err
}

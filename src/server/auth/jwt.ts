import * as jwt from 'jsonwebtoken'
const JWT_SECRET = 'mysecret' // pruduction environment: sicheren private key von .env einlesen

// Erzeugt json web token. Dieser wird client-seitig in einem cookie/
// local storage gespeichert und anschließend bei jdem request als
// "authorization"-Header mitgeschickt
export const createToken = (email: string) => {
    const token = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: '1w',
        issuer: 'Kundenverwaltung',
    })
    return token
}

// Ueberprueft Gueltigkeit des JWT und gibt user email zurueck falls gueltig
export const verifyKunde = async (token: string) => {
    try {
        const verify: any = await jwt.verify(token, JWT_SECRET, {
            issuer: 'Kundenverwaltung',
        })
        return verify.email
    } catch {
        return undefined
    }
}

module.exports = {
    verifyKunde,
    createToken,
}

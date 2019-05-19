import {should} from 'chai'
import request from 'supertest'

import {app, basePath} from '../../server/app'
import { HttpStatus } from '../../server/shared/statusCodes'

should()

// Test Daten
const loginDaten = {
    email: 'admin@admin.admin',
    password: '123456',
}
const wrongEmail = {
    email: 'armin@admin.admin',
    password: '123456',
}
const wrongPassword = {
    email: 'admin@admin.admin',
    password: 'blablabla',
}
const wrongtoken = 'hksajdflsk'

let token = ''

// Login und alle Kunden ausgeben mit gültigen Logindaten
describe (' Login ', () => {
    it('Login mit falscher Emailadresse', (done: Mocha.Done) => {
        request(app)
            .post(`${basePath}/login`)
            .set('Content-type', 'application/x-www-form-urlencoded')
            .send(wrongEmail)
            .expect(HttpStatus.FORBIDDEN)
            // Promise
            .end((error, response) => {
                if (error) {
                    return done(error)
                }
                token = response.body.message // eslint-disable-line prefer-destructuring
                // tslint:disable-next-line:no-unused-expression
                token.should.be.not.empty
                // synchroner Before-Hook
                done()
            })
    })
    it('Login mit falschem Passwort', (done: Mocha.Done) => {
        request(app)
            .post(`${basePath}/login`)
            .set('Content-type', 'application/x-www-form-urlencoded')
            .send(wrongPassword)
            .expect(HttpStatus.FORBIDDEN)
            // Promise
            .end((error, response) => {
                if (error) {
                    return done(error)
                }
                token = response.body.message // eslint-disable-line prefer-destructuring
                // tslint:disable-next-line:no-unused-expression
                token.should.be.not.empty
                // synchroner Before-Hook
                done()
            })
    })
    it('Login erfolgreich', (done: Mocha.Done) => {
        request(app)
            .post(`${basePath}/login`)
            .set('Content-type', 'application/x-www-form-urlencoded')
            .send(loginDaten)
            .expect(HttpStatus.OK)
            // Promise
            .end((error, response) => {
                if (error) {
                    return done(error)
                }
                token = response.body.message // eslint-disable-line prefer-destructuring
                // tslint:disable-next-line:no-unused-expression
                token.should.be.not.empty
                // synchroner Before-Hook
                done()
            })
    })
})

describe (' GET /kunden', () => {
    before((done: MochaDone) => {
        request(app)
            .post(`${basePath}/login`)
            .set('Content-type', 'application/x-www-form-urlencoded')
            .send(loginDaten)
            .expect(HttpStatus.OK)
            // Promise
            .end((error, response) => {
                if (error) {
                    return done(error)
                }
                token = response.body.message // eslint-disable-line prefer-destructuring
                // tslint:disable-next-line:no-unused-expression
                token.should.be.not.empty
                // synchroner Before-Hook
                done()
            })
    })
    it('Alle Kunden ausgeben', (done: Mocha.Done) => {
        request(app)
            .get(`${basePath}/kunden`)
            .set('Authorization', token)
            .expect(HttpStatus.OK)
            .expect('Content-Type', /json/)
            .end((error, response) => {
                if (error) {
                    return done(error)
                }
                // tslint:disable-next-line:no-unused-expression
                response.body.should.not.be.empty
                done()
            })
    })
    it ('Alle Kunden ausgeben mit falschem Token', (done: Mocha.Done) => {
        request(app)
            .get(`${basePath}/kunden`)
            .set('Authorization', wrongtoken)
            .expect(HttpStatus.UNAUTHORIZED)
            .expect('Content-Type', /json/)
            .end((error, response) => {
                if (error) {
                    console.log(response)
                    return done(error)
                }
                // tslint:disable-next-line:no-unused-expression
                response.body.should.not.be.empty
                done()
             })
   })
})

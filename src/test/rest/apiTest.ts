import {should} from 'chai'
import request from 'supertest'

import {app, basePath} from '../../server/app'
import { HttpStatus } from '../../server/shared/statusCodes'

should()

const loginDaten = {
    email: 'admin@admin.admin',
    password: '123456',
}
let token = ''

// Login und alle Kunden ausgeben
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
})

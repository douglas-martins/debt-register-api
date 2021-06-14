const mongoose = require('mongoose');
const faker = require('faker');
const supertest = require('supertest');
const MockModel = require("jest-mongoose-mock");

const app = require('@root/app');
const DebController = require('@controllers/debt-controller');
const DebService = require('@services/debt-service');
const debtModel = require('@services/debt-service');

jest.mock('@models/debt-model', () => new MockModel());
jest.mock('mongoose');
jest.mock('faker');

describe('Debt Controller Unit Tests', () => {
   describe('createDebt()', () => {
       it('should not return a success, for create new debt document, ' +
           'debt with reason is already register for this userId',  (done) => {
           supertest(app)
               .post('/debt')
               .send({ userId: 1, price: 20, reason: 'Fake Reason', debtDate: new Date() })
               .then((response) => {
                   expect(response.statusCode).toBe(500);
                   done();
               });
       });

       it('should return a success, for create new debt document',  (done) => {
           supertest(app)
               .post('/debt')
               .send({ userId: 1, price: 20, reason: faker.name.findName(), debtDate: new Date() })
               .then((response) => {
                   expect(response.statusCode).toBe(200);
                   done();
               });
       });

       it('should return a error, for missing required userId property',  (done) => {
           supertest(app)
               .post('/debt')
               .send({ price: 20, reason: 'Fake Reason', debtDate: new Date() })
               .then((response) => {
                   const message = JSON.parse(response.error.text).errors[0].userId;
                   expect(response.statusCode).toBe(422);
                   expect(message).toBe('Invalid user id');
                   done();
               });
       });

       it('should return a error, for missing required price property',  (done) => {
           supertest(app)
               .post('/debt')
               .send({ userId: 1, reason: 'Fake Reason', debtDate: new Date() })
               .then((response) => {
                   const message = JSON.parse(response.error.text).errors[0].price;
                   expect(response.statusCode).toBe(422);
                   expect(message).toBe('Invalid debt price');
                   done();
               });
       });

       it('should return a error, for missing required reason property',  (done) => {
           supertest(app)
               .post('/debt')
               .send({ userId: 1, price: 1, debtDate: new Date() })
               .then((response) => {
                   const message = JSON.parse(response.error.text).errors[0].reason;
                   expect(response.statusCode).toBe(422);
                   expect(message).toBe('Invalid debt reason');
                   done();
               });
       });

       it('should return a error, for invalid required userId userId type',  (done) => {
           supertest(app)
               .post('/debt')
               .send({ userId: {}, price: 1, reason: 'Fake Reason', debtDate: new Date() })
               .then((response) => {
                   const message = JSON.parse(response.error.text).errors[0].userId;
                   expect(response.statusCode).toBe(422);
                   expect(message).toBe('Invalid user id');
                   done();
               });
       });
   })

    describe('updateDebt()', () => {
        it('should update debt price property success, and return the debt data object', (done) => {
            const id = '60c3f442511f63e742afe3ea-FAKE';
            supertest(app)
                .put(`/debt/${id}`)
                .send({ price: 1000 })
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
        });
    });

   const debts = [
        {
            debtDate: "2020-06-11",
            _id: "60c3f442511f63e742afe3ea",
            price: 5345.46673,
            reason: "fgffg",
            userId: 1
        },
        {
            debtDate: "2021-06-11",
            _id: "60c3f442511f63e742afgfwege3ea",
            price: 53534445.43,
            reason: "fgffg",
            userId: 1
        },
        {
            debtDate: "2022-06-11",
            _id: "60c3f442511f63e742afdgfgde3ref3ea",
            price: 11.43,
            reason: "fgfrwtg3ergfg",
            userId: 2
        }
    ];

   describe('findDebt()', () => {
       it('should find a debt, with id passed', (done) => {
           const id = '60c3f442511f63e742afe3ea';
            supertest(app)
                .get(`/debt/${id}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    const debt = debts.find(({ _id }) => _id === id);
                    expect(debt._id).toBe(id);
                    done();
                });
       });

       it('should not find a debt, with id passed', (done) => {
           const id = 'FAKE';
           supertest(app)
               .get(`/debt/${id}`)
               .then((response) => {
                   expect(response.statusCode).toBe(200);
                   const debt = debts.find(({ _id }) => _id === id);
                   expect(debt).toBeFalsy();
                   done();
               });
       });
   });

   describe('findAllDebts()', () => {
       it('should send a list of mock debts', (done) => {
           supertest(app)
               .get('/debt/all')
               .then((response) => {
                   expect(response.statusCode).toBe(200);
                   done();
               })
       });
   });

    describe('findAllDebtsByUser()', () => {
        it('should send a list of mock debts that user have, should return 2', (done) => {
            const userId = 1;
            supertest(app)
                .get('/debt/all')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    const userDebts = debts.filter(({ userId: uId }) => userId === uId);
                    expect(userDebts.length).toBe(2);
                    done();
                });
        });

        it('should send a list of mock debts that user have, should return 0', (done) => {
            const userId = 0;
            supertest(app)
                .get('/debt/all')
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    const userDebts = debts.filter(({ userId: uId }) => userId === uId);
                    expect(userDebts.length).toBe(0);
                    done();
                });
        });
    });

    describe('deleteDebt()', () => {
        it('should delete a debt mock from array success', (done) => {
            const debtId = '60c3f442511f63e742afgfwege3ea'
            supertest(app)
                .delete(`/debt/${debtId}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    const newDebts = debts.filter(({ _id }) => _id !== debtId);
                    expect(newDebts.length).toBe(2);
                    done();
                });
        });

        it('should not delete a debt mock from array', (done) => {
            const debtId = 'FAKE'
            supertest(app)
                .delete(`/debt/${debtId}`)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    const newDebts = debts.filter(({ _id }) => _id !== debtId);
                    expect(newDebts.length).toBe(3);
                    done();
                });
        });
    });
});

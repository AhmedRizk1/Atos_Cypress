/// <reference types="Cypress" />

import userRegisteration from '../../support/Pages/RegisterationPage'
import validDta from '../../fixtures/registerationValidTD01.json'
import inValidData from '../../fixtures/registerationInValidTD01.json'

describe('Registeration Test', function () {

    beforeEach(function () {
        cy.visit('/');

    })


    it('Registeration Test with Valid data', function () {
        const userRegisterationTest = new userRegisteration;
        validDta.forEach(data => {
            userRegisterationTest.signup(data.FirstName, data.LastName, data.Phone, data.Email, data.Password);

        })
    })

    it('Registeration Test with invalid data', function () {
        const userRegisterationTest = new userRegisteration;
        inValidData.forEach(data => {
            cy.visit('/');
            userRegisterationTest.signup(data.FirstName, data.LastName, data.Phone, data.Email, data.Password);

        })
    })

})
/// <reference types="cypress" />
require('cypress-xpath')

describe('Demo Automation Testing', () => {
    it('Register Page', () => {

        //Open Google and redirect to automation testing
        cy.request('https://www.seleniumeasy.com/test')
        cy.visit('https://www.seleniumeasy.com/test')

        //cy.wait(5000)

        cy.xpath('//a[contains(text(),"No, thanks!")]').should('be.visible').click()

        cy.xpath('//li[contains(@class,"tree")]//a[contains(text(),"Input Forms")]').click()

        cy.xpath('(//ul/li/a[contains(text(),"Simple Form Demo")])[2]').click()


        var userMessage = 'I typed using cypress'

        cy.get('input#user-message').type(userMessage)
        cy.get('button[onclick="showInput();"]').click()
        cy.wait(1000)

        cy.get('div#user-message span#display').then(($usermsg) => {
            var message = $usermsg[0].outerText
            cy.log("User Message : " + message)
            assert.equal(userMessage, message)
        })


        var num1 = 10
        var num2 = 40

        cy.get('input#sum1').type(num1)
        cy.get('input#sum2').type(num2)
        cy.get('button[onclick="return total()"]').click()

        cy.wait(1000)

        cy.get('span#displayvalue').then(($usermsg) => {
            var message = $usermsg[0].outerText
            cy.log("Value : " + message)
            assert.equal(message, (num1 + num2))
        })





    })
})

/*

** WEBSITES TO PRACTICE AUTOMATION **

http://zero.webappsecurity.com/
http://automationpractice.com/index.php
https://www.seleniumeasy.com/test
https://computer-database.gatling.io/computers


*/
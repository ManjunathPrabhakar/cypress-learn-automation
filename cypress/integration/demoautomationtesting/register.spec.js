/// <reference types="cypress" />
require('cypress-xpath')
import './demoautomationUtility'
describe('Demo Automation Testing', () => {
    it('Register Page', () => {

        cy = catalogEvents(cy)

        cy.request('http://demo.automationtesting.in/')
        cy.visit('http://demo.automationtesting.in/')

        cy.xpath('//button[contains(text(),"Skip Sign In")]').click()

        cy.log(cy.url())

        //FirstName
        cy.xpath('//input[@placeholder="First Name"]').type("John")

        //LastName
        cy.xpath('//input[@placeholder="Last Name"]').type("Doe")


        //Address
        var userAddress = 'No 123, Some Main, Some Cross, Some Road, Some Area, Some City 123456'
        cy.xpath('//textarea[@ng-model="Adress"]').type(userAddress)

        //Email
        cy.xpath('//input[@ng-model="EmailAdress"]').type("johndoe@gmail.com")

        //Phone
        cy.xpath('//input[@ng-model="Phone"]').type("9876543210")

        //Gender
        var userGender = "male"
        if (userGender === "male") {
            cy.xpath('//input[@value="Male"]').click()
        } else if (userGender === "female") {
            cy.xpath('//input[@value="FeMale"]').click()
        }

        //Hobby
        var hobby = ["Cricket", "Movies"]
        for (let i = 0; i < hobby.length; i++) {
            cy.xpath('//input[@value="' + hobby[i] + '"]').click()
        }

        //Languages
        var lang = "English"
        cy.xpath('//label[text()="Languages"]/../div').click()
        cy.xpath('//li/a[text()="' + lang + '"]').click()
        cy.xpath('//label[text()="Languages"]').click()

        //Skills
        var skills = "Java"
        cy.get('#Skills').select(skills)

        //Country
        var country = "India"
        cy.get('#countries').select(country)

        //Select Country
        cy.xpath('//span[contains(@class,"select2-selection") and @role="combobox"]').click()
        cy.xpath('//input[@class="select2-search__field" and @type="search"]').type('India{enter}')


        //DOB
        cy.get('#yearbox').select('1990')
        cy.xpath('//select[contains(@ng-model,"monthbox")]').select('July')
        cy.get('#daybox').select('15')

        //Password
        cy.get('#firstpassword').type("Password123")

        //Confirm Password
        cy.get('#secondpassword').type("Password123")

        //submit
        cy.get('#submitbtn').click()




    })
})


function catalogEvents(cy) {
    cy.on('uncaught:exception', (err, runnable) => {
        // cy.log("Browser log has Error(s) : " + err.name)
        if (err.name === 'CypressError' || err.name === 'Error') {
            cy.log("Browser log has Error(s) : " + err.name)
            return false
        } else {
            return true
        }
    })

    return cy;
}




/*

** WEBSITES TO PRACTICE AUTOMATION **

http://zero.webappsecurity.com/
http://automationpractice.com/index.php
https://www.seleniumeasy.com/test
https://computer-database.gatling.io/computers


*/
const PO_login_field = '#login_field'
const PO_pass_field = '#password'
const PO_signIn_button = '[name="commit"]'
const PO_errorContainer = '[class="flash-container"]'
const PO_message_validation = '[class="js-submit-button-value"]'    
const PO_form = '[class*="auth-form"]'
const PO_logo = '[class="header-logo"]'
const error1 = "Incorrect username or password."

let uIElemets = {
    sign1 :'Sign in to GitHub',
    user_pass: 'Username or email address',
    password : "Password",
    sign2 : 'Sign in',
    key_pass : 'Sign in with a passkey',
    new : 'New to GitHub?',
    create : ' Create an account'
}
export default class login_page {
    /* 
    Go to the url and validate the url 
    */
    goToUrl(){    
        //The url is configured in the cypress.config.js file
        cy.visit('/')
        cy.url().should('include', 'https://github.com/login')
    }

    validateLoginUIElements(){
        cy.get(PO_form).should('contain', uIElemets.sign1)
        cy.get(PO_form).should('contain', uIElemets.user_pass)
        cy.get(PO_form).should('contain', uIElemets.password)
        cy.get(PO_form).should('contain', uIElemets.sign2)
        cy.get(PO_form).should('contain', uIElemets.key_pass)
        cy.get(PO_form).should('contain', uIElemets.new)
        cy.get(PO_form).should('contain', uIElemets.create)
        cy.get(PO_logo).should("exist")
    }

    login(username, password){
        if (username!=null)
            cy.get(PO_login_field).type(username)
        if (password!=null)
            cy.get(PO_pass_field).type(password)
        cy.get(PO_signIn_button).click()        
    }

    loginError(){
        cy.get(PO_errorContainer).should('contain', error1)
    }

}

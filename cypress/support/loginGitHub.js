const { describe } = require("mocha");

describe ("Loging form validations", ()=>{
    const url = "https://github.com/login"
    
    //Identifiers
    const PO_login_field = '#login_field'
    const PO_pass_field = '#password'
    const PO_signIn_button = '[name="commit"]'
    const PO_errorContainer = '[class="flash-container"]'
    const error1 = "Incorrect username or password."

    let user1 = {
        username: 'username',
        password: 'password1'
    }

    beforeEach(() => {
        cy.visit(url);
    })

    it.only("Login Form validation", () => {
        cy.get(PO_login_field).type(user1.username)
        cy.get(PO_login_field).type(user1.password)
        cy.get(PO_errorContainer).should('contain', error1)

    })
    it("Login ", () => {

    })
    it("Login ", () => {

    })
    it("Login ", () => {

    })
    it("Login ", () => {

    })



    
}
)
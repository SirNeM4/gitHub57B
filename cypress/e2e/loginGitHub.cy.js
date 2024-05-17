describe ("Loging Page for GitHub", ()=>{
    const url = "https://github.com/login"
    
    //Identifiers
    const PO_login_field = '#login_field'
    const PO_pass_field = '#password'
    const PO_signIn_button = '[name="commit"]'
    const PO_errorContainer = '[class="flash-container"]'
    const PO_message_validation = '[class="js-submit-button-value"]'    
    const PO_form = '[class*="auth-form"]'
    const PO_logo = '[class="header-logo"]'

    const error1 = "Incorrect username or password."    
    
    let user1 = {
        username: 'username',
        password: 'password1'
    }

    let uIElemets = {
        sign1 :'Sign in to GitHub',
        user_pass: 'Username or email address',
        password : "Password",
        sign2 : 'Sign in',
        key_pass : 'Sign in with a passkey',
        new : 'New to GitHub?',
        create : ' Create an account'
    }

    beforeEach(() => {
        cy.visit(url);
        cy.url().should("contain",url);
    })

    it("GH01 Login using invalid credentiasl", () => {
        cy.get(PO_login_field).type(user1.username)
        cy.get(PO_pass_field).type(user1.password)
        cy.get(PO_signIn_button).click()
        cy.get(PO_errorContainer).should('contain', error1)
    })

    it("GH09 Verify Login UI elements", () => {
        cy.get(PO_form).should('contain', uIElemets.sign1)
        cy.get(PO_form).should('contain', uIElemets.user_pass)
        cy.get(PO_form).should('contain', uIElemets.password)
        cy.get(PO_form).should('contain', uIElemets.sign2)
        cy.get(PO_form).should('contain', uIElemets.key_pass)
        cy.get(PO_form).should('contain', uIElemets.new)
        cy.get(PO_form).should('contain', uIElemets.create)
        cy.get(PO_logo).should("exist")
    })
    
    it("GH04 Verify the Form validations (password field)", () => {
        cy.get(PO_login_field).type(user1.username)
        cy.get(PO_signIn_button).click()
        cy.get(PO_message_validation).should("exist")

    })
    it("GH07 Verify form validation using an invalid password", () => {
        cy.get(PO_login_field).type("napomu@msn.com")
        cy.get(PO_login_field).type(user1.password)
        cy.get(PO_signIn_button).click()
        cy.get(PO_errorContainer).should('contain', error1)
    })

}
)
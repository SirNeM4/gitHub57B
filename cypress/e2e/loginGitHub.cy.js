import Login_Page from "../page_objects/login_page.js";
describe ("Loging Page for GitHub", ()=>{
    const login_page = new Login_Page();
    
    let user1 = {
        username: 'username',
        password: 'password1',
        usernameOK: 'napomu@msn.com'
    }

    beforeEach(() => {
        login_page.goToUrl()
    })

    it("GH01 Login using invalid credentiasl", () => {
        login_page.login(user1.username, user1.password)
        login_page.loginError()
    })

    it("GH09 Verify Login UI elements", () => {
        login_page.validateLoginUIElements()
    })
    
    it("GH04 Verify the Form validations (password field)", () => {
        login_page.login(user1.username, null)
        cy.get(PO_message_validation).should("exist")

    })
    it("GH07 Verify form validation using an invalid password", () => {
        login_page.login(user1.usernameOK, user1.password)
        login_page.loginError()
    })

}
)
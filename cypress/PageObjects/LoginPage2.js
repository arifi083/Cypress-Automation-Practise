class Login2
{
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmsg = '.oxd-topbar-header-breadcrumb > .oxd-text';


    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin(expected)
    {
        cy.get(this.lblmsg).should('have.text',expected);
    }
}

export default Login2;
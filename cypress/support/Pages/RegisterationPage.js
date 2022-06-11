class userRegisteration {

    signup(firstNameTxt, lastnameTxt, phoneTxt, emailTxt, passwordTxt) {
        //FirstName filed Element
        const firstName = cy.get('input[name="first_name"]')
        firstName.clear({ force: true });
        firstName.type(firstNameTxt);
        //LastName filed Element
        const lastName = cy.get('input[name="last_name"]')
        lastName.clear({ force: true });
        lastName.type(lastnameTxt);
        //Phone filed Element
        const phone = cy.get('input[name="phone"]')
        phone.clear({ force: true });
        phone.type(phoneTxt);
        //Email filed Element
        const email = cy.get('input[name="email"]')
        email.clear({ force: true });
        email.type(emailTxt);
        //Password filed Element
        const password = cy.get('input[name="password"]')
        password.clear({ force: true });
        password.type(passwordTxt);
        //SignUp Button Element
        const signupButton = cy.xpath('(//button[@type="submit"]//span)[1]')
        signupButton.click({ force: true });
    }
} export default userRegisteration;
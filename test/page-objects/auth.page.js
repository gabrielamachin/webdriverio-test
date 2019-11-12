class LoginPage {
    get emailField () { return $('#email') }
    get passwordField () { return $('#passwd') }
    get submitLoginBtn () { return $('#SubmitLogin') }
    get validationMessage () { return $('.alert-danger li') }

    submit() {
        this.submitLoginBtn.click()
    }

    getErrorMessage () {
        return this.validationMessage.getText()
    }

}

export default new LoginPage()
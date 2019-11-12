class ForgotPassword {
    get forgotPassword () { return $('.lost_password a') }
    get legend () { return $('.box p') }
    get emailField () { return $('#email') }
    get retrievePasswordBtn () { return $('.submit button') }
    get errorMessage () { return $('.alert-danger li') }
    get confirmationMessage () { return $('.alert-success') }

    forgotPasswordLink() {
        this.forgotPassword.click()
    }

    retrievePassword() {
        this.retrievePasswordBtn.click()
    }

    getErrorMessage () {
        return this.errorMessage.getText()
    }

    getConfirmationMessage () {
        return this.confirmationMessage.getText()
    }


}
export default new ForgotPassword()
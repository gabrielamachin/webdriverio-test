class CreateAccount {
    get emailField () { return $('#email_create') }
    get createAccountBtn () { return $('#SubmitCreate') }
    get createAccountLegend () { return $('.form_content p') }
    get validationMessage () { return $('.alert-danger li') }
    get gender1Field () { return $('#id_gender1') }
    get gender2Field () { return $('#id_gender2') }
    get customerFirstName () { return $('#customer_firstname') }
    get customerLastName () { return $('#customer_lastname') }
    get customerEmailField () { return $('#email') }
    get passwordField () { return $('#passwd') }
    get passwordLegend () { return $('.password span') }
    get dayOfBirthField () { return $('#days') }
    get monthOfBirthField () { return $('#months') }
    get yearOfBirthField () { return $('#years') }
    get firstNameField () { return $('#firstname') }
    get lastNameField () { return $('#lastname') }
    get companyField () { return $('#company') }
    get address1Field () { return $('#address1') }
    get address2Field () { return $('#address2') }
    get cityField () { return $('#city') }
    get stateField () { return $('#id_state') }
    get postCodeField () { return $('#postcode') }
    get countryField () { return $('#id_country') }
    get otherField () { return $('#other') }
    get phoneField () { return $('#phone') }
    get mobilePhoneField () { return $('#phone_mobile') }
    get aliasField () { return $('#alias') }
    get checkbox1 () { return $('#newsletter') }
    get checkbox2 () { return $('#optin') }
    get submitAccountBtn () { return $('#submitAccount') }
    get viewMyAccount () { return $('a.account span') }

    createEmail() {
        this.emailField.setValue(Math.random().toString(36).substring(7)+'@endava.com');
    }
    
    submitCreate() {
        this.createAccountBtn.click()
    }

    submitAccount() {
        this.submitAccountBtn.click()
    }

    getErrorMessage() {
        return this.validationMessage.getText()
    }

    getLegend() {
        return this.createAccountLegend.getText()
    }

    completeRequiredFields(firstname, lastname, pass, address1, city, state, postcode, country, mphone) {
        this.customerFirstName.setValue(firstname);
        this.customerLastName.setValue(lastname);
        this.passwordField.setValue(pass);
        this.address1Field.setValue(address1);
        this.cityField.setValue(city);
        this.stateField.selectByVisibleText(state);
        this.postCodeField.setValue(postcode);
        this.countryField.selectByVisibleText(country);
        this.mobilePhoneField.setValue(mphone);
    }

}
export default new CreateAccount()
import NavSection from '../page-objects/nav.section';
import CreateAccount from '../page-objects/createAccount.section';

describe('create an account', () => {
    it('verify content of legend', () => {
        browser.url('');
        NavSection.signIn();
        expect(CreateAccount.getLegend()).toEqual('Please enter your email address to create an account.');
    })

    it('verify content of create an account area', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        expect($('.account_creation h3').getText()).toEqual('YOUR PERSONAL INFORMATION');
        expect($('.row h1').getText()).toEqual('CREATE AN ACCOUNT');
        expect(CreateAccount.gender1Field.isExisting()).toEqual(true);
        expect(CreateAccount.gender2Field.isExisting()).toEqual(true);
        expect(CreateAccount.firstNameField.isExisting()).toEqual(true);
        expect(CreateAccount.lastNameField.isExisting()).toEqual(true);
        expect(CreateAccount.customerEmailField.isExisting()).toEqual(true);
        expect(CreateAccount.passwordField.isExisting()).toEqual(true);
        expect(CreateAccount.dayOfBirthField.isExisting()).toEqual(true);
        expect(CreateAccount.monthOfBirthField.isExisting()).toEqual(true);
        expect(CreateAccount.yearOfBirthField.isExisting()).toEqual(true);
        expect(CreateAccount.checkbox1.isExisting()).toEqual(true);
        expect(CreateAccount.checkbox2.isExisting()).toEqual(true);
        expect($('#account-creation_form > div:nth-child(2) > h3').getText()).toEqual('YOUR ADDRESS');
        expect(CreateAccount.cityField.isExisting()).toEqual(true);
        expect(CreateAccount.stateField.isExisting()).toEqual(true);
        expect(CreateAccount.postCodeField.isExisting()).toEqual(true);
        expect(CreateAccount.countryField.isExisting()).toEqual(true);
        expect(CreateAccount.otherField.isExisting()).toEqual(true);
        expect(CreateAccount.phoneField.isExisting()).toEqual(true);
        expect(CreateAccount.mobilePhoneField.isExisting()).toEqual(true);
        expect(CreateAccount.aliasField.isExisting()).toEqual(true);
    })

    it('verify behaviour of radio buttons', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.gender1Field.click();
        expect(CreateAccount.gender1Field.isSelected()).toEqual(true);
        expect(CreateAccount.gender2Field.isSelected()).toEqual(false);
    })

    it('verify behaviour of radio buttons', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.gender2Field.click();
        expect(CreateAccount.gender1Field.isSelected()).toEqual(false);
        expect(CreateAccount.gender2Field.isSelected()).toEqual(true);
    })

    it('email should be empty by default', () => {
        browser.url('');
        NavSection.signIn();
        expect(CreateAccount.emailField.getValue()).toEqual('');
    })

    it('create account with existing email address', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.emailField.setValue('adelquis.trinidad@endava.com');
        CreateAccount.submitCreate();
        expect(CreateAccount.getErrorMessage()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
    })

    it('create account with invalid email', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.emailField.setValue('123aaa');
        CreateAccount.submitCreate();
        expect(CreateAccount.getErrorMessage()).toEqual('Invalid email address.');
    })

    it('create account with unexisting email - happy path', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        expect(browser.getTitle()).toEqual('Login - My Store'); 
    })

    it('first name field should be required', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('', 'abab', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('firstname is required.')
    })

    it('maximum length of first name field', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcdabcdabcdabcdabcdabcdabcdabcde', 'abab', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('firstname is too long. Maximum length: 32')
    })

    it('first name field cannot start with a number', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('1abcde', 'abab', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('firstname is invalid.')
    })

    it('last name field should be required', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', '', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('lastname is required.')
    })

    it('maximum length of last name field', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwerqwerqwerqwerqwerqwerqwerqwert', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('lastname is too long. Maximum length: 32')
    })

    it('last name field cannot start with a number', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', '1qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('lastname is invalid.')
    })

    it('email field should be completed by default', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        const mail = CreateAccount.emailField.getValue();
        CreateAccount.submitCreate();
        expect(CreateAccount.customerEmailField.getValue()).toEqual(mail);
    })

    it('email field should be required', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.customerEmailField.clearValue();
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('email is required.')
    })

    it('email field cannot be completed with existing email', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.customerEmailField.setValue('adelquis.trinidad@endava.com');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('An account using this email address has already been registered.')
    })

    it('email field cannot be completed with invalid email', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.customerEmailField.setValue('adelquis.trinidadendava.com');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('email is invalid.')
    })

    it('password field should be required', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', '', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('passwd is required.')
    })

    it('password field should have a legend', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        expect(CreateAccount.passwordLegend.getText()).toEqual('(Five characters minimum)')
    })

    it('password field cannot be less than 5 characters', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('passwd is invalid.')
    })

    it('verify values of days in date of birth dropdown', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        expect(CreateAccount.dayOfBirthField.getText().replace(/\s/g,'')).toEqual('-12345678910111213141516171819202122232425262728293031')
    })

    it('verify values of months in date of birth dropdown', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        expect(CreateAccount.monthOfBirthField.getText().replace(/\s/g,'')).toEqual('-JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember')
    })

    it('verify values of years in date of birth dropdown', () => {
        browser.url('');
        NavSection.signIn()
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        expect(CreateAccount.yearOfBirthField.getText().replace(/\s/g,'')).toEqual('-201920182017201620152014201320122011201020092008200720062005200420032002200120001999199819971996199519941993199219911990198919881987198619851984198319821981198019791978197719761975197419731972197119701969196819671966196519641963196219611960195919581957195619551954195319521951195019491948194719461945194419431942194119401939193819371936193519341933193219311930192919281927192619251924192319221921192019191918191719161915191419131912191119101909190819071906190519041903190219011900')
    })

    it('verify validation of day in date of birth dropdown', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.monthOfBirthField.selectByIndex(1);
        CreateAccount.yearOfBirthField.selectByIndex(11);
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('Invalid date of birth')
    })

    it('verify validation of month in date of birth dropdown', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.dayOfBirthField.selectByIndex(1);
        CreateAccount.yearOfBirthField.selectByIndex(11);
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('Invalid date of birth')
    })

    it('verify validation of year in date of birth dropdown', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields('abcde', 'qwe', 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456');
        CreateAccount.dayOfBirthField.selectByIndex(1);
        CreateAccount.monthOfBirthField.selectByIndex(1);
        CreateAccount.submitAccount();
        expect(CreateAccount.getErrorMessage()).toEqual('Invalid date of birth')
    })

    it('verify behaviour of "Sign up for our newsletter!" checkbox', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.checkbox1.click();
        expect(CreateAccount.checkbox1.isSelected()).toEqual(true);
    })

    it('verify behaviour of "Receive special offers from our partners!" checkbox', () => {
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.checkbox2.click();
        expect(CreateAccount.checkbox2.isSelected()).toEqual(true);
    })

    it('create an account - happy path', () => {
        const firstName = 'Gabriela';
        const lastName = 'G';
        browser.url('');
        NavSection.signIn();
        CreateAccount.createEmail();
        CreateAccount.submitCreate();
        CreateAccount.completeRequiredFields(firstName, lastName, 'abc111', 'Bbbb 1234', 'Rosario', 'Alabama', '11111', 'United States', '123456', 'Cccc 1234');
        CreateAccount.submitAccount();
        expect(browser.getTitle()).toEqual('My account - My Store');
        expect(CreateAccount.viewMyAccount.getText()).toEqual(firstName +' '+ lastName);
    })
})
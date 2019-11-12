import LoginPage from '../page-objects/auth.page';
import NavSection from '../page-objects/nav.section';

describe('login section', () => {
    it('should have the right title', () => {
        browser.url('');
        expect(browser.getTitle()).toEqual('My Store');
    })

    it('Login should have the right title', () => {
        browser.url('');
        NavSection.signIn();
        expect(browser.getTitle()).toEqual('Login - My Store');
    })

    it('email should be required', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.submit();
        expect(LoginPage.getErrorMessage()).toEqual('An email address required.');
    })

    it('password should be required', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.emailField.setValue('adelquis.trinidad@endava.com');
        LoginPage.submit();
        expect(LoginPage.getErrorMessage()).toEqual('Password is required.');
    })
    
    it('log in with invalid email', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.emailField.setValue('253652sgssg');
        LoginPage.submit();
        expect(LoginPage.getErrorMessage()).toEqual('Invalid email address.');
    })

    it('log in with unexisting email and password', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.emailField.setValue('adelquis.trinidad@endava.com');
        LoginPage.passwordField.setValue('123ab');
        LoginPage.submit();
        expect(LoginPage.getErrorMessage()).toEqual('Authentication failed.');
    })

    it('should log in with valid email and password', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.emailField.setValue('adelquis.trinidad@endava.com');
        LoginPage.passwordField.setValue('abc123');
        LoginPage.submit();
        expect(browser.getTitle()).toEqual('My account - My Store');
    })
})
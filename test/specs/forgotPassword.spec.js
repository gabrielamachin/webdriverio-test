import NavSection from '../page-objects/nav.section';
import ForgotPassword from '../page-objects/forgotPassword.page';

describe('forgot password', () => {
    it('forgot password page should have the right title', () => {
        browser.url('');
        NavSection.signIn();
        ForgotPassword.forgotPasswordLink();
        expect(browser.getTitle()).toEqual('Forgot your password - My Store'); 
    })

    it('legend should be displayed', () => {
        browser.url('');
        NavSection.signIn();
        ForgotPassword.forgotPasswordLink();
        expect(ForgotPassword.legend.getText()).toEqual('Please enter the email address you used to register. We will then send you a new password.'); 
    })

    it('enter invalid email', () => {
        browser.url('');
        NavSection.signIn();
        ForgotPassword.forgotPasswordLink();
        ForgotPassword.emailField.setValue('adelquistrinidadendava.com');
        ForgotPassword.retrievePassword();
        expect(ForgotPassword.getErrorMessage()).toEqual('Invalid email address.');
    })

    it('enter unexisting email', () => {
        browser.url('');
        NavSection.signIn();
        ForgotPassword.forgotPasswordLink();
        ForgotPassword.emailField.setValue('mail124@endava.com');
        ForgotPassword.retrievePassword();
        expect(ForgotPassword.getErrorMessage()).toEqual('There is no account registered for this email address.');
    })

    it('enter existing email', () => {
        browser.url('');
        NavSection.signIn();
        ForgotPassword.forgotPasswordLink();
        ForgotPassword.emailField.setValue('adelquis.trinidad@endava.com');
        ForgotPassword.retrievePassword();
        expect(ForgotPassword.getConfirmationMessage()).toEqual('A confirmation email has been sent to your address: adelquis.trinidad@endava.com');
    })
})
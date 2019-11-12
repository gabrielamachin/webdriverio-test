import NavSection from '../page-objects/nav.section';
import LoginPage from '../page-objects/auth.page';

describe('my account screen', () => {
    it('verify content of my account screen', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.emailField.setValue('adelquis.trinidad@endava.com');
        LoginPage.passwordField.setValue('abc123');
        LoginPage.submit();
        expect(browser.getTitle()).toEqual('My account - My Store');
        expect($('.my-account h1').getText()).toEqual('MY ACCOUNT');
        expect($('.info-account').getText()).toEqual('Welcome to your account. Here you can manage all of your personal information and orders.');
        expect($('*=history').isExisting(true));
        expect($('*=slip').isExisting(true));
        expect($('*=addresses').isExisting(true));
        expect($('*=identity').isExisting(true));
        expect($('*=wishlist').isExisting(true));
        expect($('.logout').getText()).toEqual('Sign out');
        expect($('.btn').isExisting(true));
    })
})
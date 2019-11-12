import NavSection from '../page-objects/nav.section';
import LoginPage from '../page-objects/auth.page';

describe('order history page', () => {
    it('client is able to access order history page', () => {
        browser.url('');
        NavSection.signIn();
        LoginPage.emailField.setValue('automation1111@mail.com');
        LoginPage.passwordField.setValue('aabb111');
        LoginPage.submit();
        $('ul:nth-child(1)').click();
        expect(browser.getTitle()).toEqual('Order history - My Store');
    })
})
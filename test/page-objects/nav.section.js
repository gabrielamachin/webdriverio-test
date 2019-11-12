class NavSection {
    get signInBtn () { return $('.login') }

    signIn() {
        this.signInBtn.click()
    }
}
export default new NavSection()
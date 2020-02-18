
class Login_Page {

    public get username()  { return browser.element('#username') }
    public get password()  { return browser.element('#password') }
    public get form()      { return browser.element('#login') }
    public get flash()     { return browser.element('#flash') }

    public open(): void {
        browser.url('/login')
    }
    public submit(): void {
        this.form.submitForm()
    }

}
const LoginPage = new Login_Page()
export default LoginPage
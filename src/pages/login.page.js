"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login_Page {
    get username() { return browser.element('#username'); }
    get password() { return browser.element('#password'); }
    get form() { return browser.element('#login'); }
    get flash() { return browser.element('#flash'); }
    open() {
        browser.url('/login');
    }
    submit() {
        this.form.submitForm();
    }
}
const LoginPage = new Login_Page();
exports.default = LoginPage;

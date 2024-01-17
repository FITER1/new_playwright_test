import { test } from "../../fixtures/basePage";
import MifosUILogin from "../../pageObjects/pages/ols/mifosHomePage";

export default class MifosLoginAction {

    public static async logInMifos(loginPage: MifosUILogin, username: string, password: string): Promise<MifosUILogin> {
        return await test.step(`Attempt login on mifos UI`, async () => {
            await loginPage.usernameTextBox.fill(username);
            await loginPage.passwordTextBox.fill(password);
            await loginPage.loginButton.click();
            return loginPage.initialisePage();
        });
    }

}
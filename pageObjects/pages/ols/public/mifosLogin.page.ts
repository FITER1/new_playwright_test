import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";
export default class MifosUILogin {
    page: Page;

    /* Note: These are NOT LOCATORS, but are TEXTS are using in both test validations and
     if applicable, in accessing the links they represent. */
    pageTexts = {
        forgotYourPasswordLinkText: 'Forgot your password?',
        forgotYourUsernameLinkText: 'Forgot your username?',
        mainServiceLinkText: 'Login to online services',
        passwordText: 'Password',
        usernameText: 'Username',
    };

    /* Note from here are the locators for objects (elements) available on this page. */

    // TODO It could be possible to avoid label/field doubles if we try proper locators eg getByLabel etc
    get usernameTextBox(): Locator {
        return this.page.locator('input[id="j_username"]');
    }

    get passwordTextBox(): Locator {
        return this.page.locator('input[id="j_password"]');
    }

    get loginButton(): Locator {
        return this.page.locator('input[id="formSubmit"]');
    }

    constructor(page: Page) {
        this.page = page;
    }

    public async initialisePage(): Promise<MifosUILogin> {
        return await test.step('Wait for the Mifos Login Page to load', async (): Promise<MifosUILogin> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

}
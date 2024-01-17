import { Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the final 'Register New Business (WPII) ' Page after completing an application,
 * looks like: ../newBusiness/wpiiSuccess.wc */
export default class RegisterNewBusinessWpiiSuccess {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewBusinessWpiiSuccess> {
        return await test.step('Wait for the Register New Business (WPII) Success Page to load', async (): Promise<RegisterNewBusinessWpiiSuccess> => {
            await this.page.waitForLoadState();
            return this;
        });
    }
}
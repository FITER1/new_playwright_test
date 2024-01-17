import { Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the first 'Register New Provider' Page after navigation from OLS Index,
 * and before the New Provider Wizard starts. */
export default class RegisterNewProvider {
    page: Page;

    // These are the locators for objects (elements) available on this page
    get startNewApplicationButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewProvider> {
        return await test.step('Wait for the Register New Provider Page to load', async (): Promise<RegisterNewProvider>  => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    // TODO Navigation wrappers here could really help understand page flow...
}
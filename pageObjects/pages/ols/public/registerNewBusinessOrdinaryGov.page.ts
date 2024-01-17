import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the first ' Register New Business Ordinary / Government' Page after navigation from OLS Index,
 * and before the New Business Wizard starts. */
export default class RegisterNewBusinessOrdinaryGov {
    page: Page;

    // These are the locators for objects (elements) available on this page

    get submitButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    constructor(page: Page) {
        this.page = page;
    }


    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewBusinessOrdinaryGov> {
        return await test.step('Wait for the Register New Business (Ordinary/Government) Page to load', async (): Promise<RegisterNewBusinessOrdinaryGov> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    // TODO Navigation wrappers here could really help understand page flow...
}
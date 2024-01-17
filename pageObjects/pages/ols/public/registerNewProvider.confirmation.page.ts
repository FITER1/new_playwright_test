import { Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the final 'Register New Provider' Page after completing an application,
 * i.e. after the New Provider Wizard ends - looks like:
 * ../newprovider/wizard.wc?confirmation=confirmation. */
export default class RegisterNewProviderConfirmation {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewProviderConfirmation> {
        return await test.step('Wait for the Register New Provider Confirmation Page to load', async (): Promise<RegisterNewProviderConfirmation> => {
            await this.page.waitForLoadState();
            return this;
        });
    }
}
import { Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** Represents the confimration page that comes after a successful register New Businnes (Ordinary / Government) process
 * such as via the wizatd
 * This page looks like: ../newbusiness/v2/wizard.wc?confirmation=confirmation
 */
export class RegisterNewBusinessOrdinaryGovConfirmation {
    page: Page;

    // These are the locators for objects (elements) available on this page
    locatorTextHelper = {
        amountLabel: '#amount',
    };

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    public async initialisePage(): Promise<RegisterNewBusinessOrdinaryGovConfirmation> {
        return await test.step('Wait for the Register New Businnes (Ordinary / Government) Confirmation page to load', async (): Promise<RegisterNewBusinessOrdinaryGovConfirmation> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

}
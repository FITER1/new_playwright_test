import { Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the final 'Register New Business (Household Worker) ' Page after completing an application,
 * looks like: ../newBusiness/hhwSuccess.wc */
export default class RegisterNewBusinessHouseholdWorkerSuccess {
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewBusinessHouseholdWorkerSuccess> {
        return await test.step('Wait for the Register New Business (Household Worker) Success Page to load', async (): Promise<RegisterNewBusinessHouseholdWorkerSuccess> => {
            await this.page.waitForLoadState();
            return this;
        });
    }
}
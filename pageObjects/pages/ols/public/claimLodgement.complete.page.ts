import { Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the final 'Claim Lodgement Complete' Page after submitting a claim,
 * looks like: ../claim/claimLodgementComplete.wc */
export default class ClaimLodgementComplete {
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<ClaimLodgementComplete> {
        return await test.step('Wait for the Claim Lodgement Complete Page to load', async (): Promise<ClaimLodgementComplete>  => {
            await this.page.waitForLoadState();
            return this;
        });
    }
}
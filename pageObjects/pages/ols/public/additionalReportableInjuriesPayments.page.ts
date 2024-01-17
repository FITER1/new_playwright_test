import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the Additional Reportable Injuries Payments Page reached from OLS Index.
 * This uses 'tab' like sections rather than the wizard (left hand sections and url with wizard in it.)
 * Each of the tabs should be supported with stable 'waitFor<TabName>' functions so that actions can proceed smoothly.
 */
export default class AdditionalReportableInjuriesPayments {
    page: Page;

    // These are the locators for objects (elements) available on this page
    // class 'current' is being used to designate the visible tab text
    private get sectionIdentifier(): Locator {
        return this.page.locator(".current");
    }

    // AddPayments Tab
    get paymentsTabUniqueText(): Locator {
        return this.sectionIdentifier.getByText('Add payments');
    }

    get reportAnInjuryFormLink(): Locator {
        // TODO This looks much more complex than should be for a link locator - investigate if better option.
        return this.page.locator('a[href*="ols/public/claim/lodgement.wc?reasonForClaim=R"]:has-text("Report an injury form")');
    }

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<AdditionalReportableInjuriesPayments> {
        return await test.step('Wait for the Additional Reportable Injuries Payments Page to load', async (): Promise<AdditionalReportableInjuriesPayments> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForAddPaymentsTab(): Promise<AdditionalReportableInjuriesPayments> {
        return await test.step(`Check page is on the Additional Reportable Injuries Payments > Add Payments Tab`, async (): Promise<AdditionalReportableInjuriesPayments> => {
            await this.paymentsTabUniqueText.waitFor({ state: "visible" });
            return this;
        });
    }
}
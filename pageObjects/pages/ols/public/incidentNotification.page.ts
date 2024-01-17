import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the Incident Notification Page reached from OLS Index.
 * This uses 'tab' like sections rather than the wizard (left hand sections and url with wizard in it.)
 * Each of the tabs should be supported with stable 'waitFor<TabName>' functions so that actions can proceed smoothly.
 */
export default class IncidentNotification {
    page: Page;

    // These are the locators for objects (elements) available on this page

    // class 'current' is being used to designate the visible tab text (but NOT the other elements inside the tab, only use it for checking tab title)
    private get sectionTitleIdentifier(): Locator {
        return this.page.locator(".current");
    }

    // Category Tab
    get categorySectionTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Category', { exact: true });
    }

    get onlineClaimFormLink(): Locator {
        return this.page.locator('[href*="ols/public/claim/lodgement"]');
    }

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<IncidentNotification> {
        return await test.step('Wait for the Incident Notification Page to load', async (): Promise<IncidentNotification> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForCategoryTab(): Promise<IncidentNotification> {
        return await test.step(`Check page is on the Incident Notification > Category Tab`, async (): Promise<IncidentNotification> => {
            await this.categorySectionTitleText.waitFor({ state: "visible" });
            return this;
        });
    }
}
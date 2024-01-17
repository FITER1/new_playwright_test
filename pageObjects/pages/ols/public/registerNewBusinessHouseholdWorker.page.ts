import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the Register New Business (Household Worker) Page reached from OLS Index.
 * This uses 'tab' like sections rather than the wizard (left hand sections and url with wizard in it.)
 * Each of the tabs are supported with stable 'waitFor<TabName>' functions so that actions can proceed smoothly.
 */
export default class RegisterNewBusinessHouseholdWorker {
    page: Page;

    // These are the locators for objects (elements) available on this page
    // class 'current' is being used to designate the visible tab text (but NOT the other elements inside the tab, only use it for checking tab title).
    private get sectionTitleIdentifier(): Locator {
        return this.page.locator(".current");
    }

    // Terms and Conditions Tab
    get termsConditionsTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Terms and conditions', { exact: true });
    }

    get surveyAnswerDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.surveyAnswer"]');
    }

    get conditionsAcceptedCheckbox(): Locator {
        return this.page.locator('input[id="conditionsAccepted1"]');
    }

    get nextSectionButton(): Locator {
        return this.page.locator('#formSubmit');
    }


    //  policy Details Tab
    get policyDetailsTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Policy details', { exact: true });
    }

    get titleDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.policyContact.contact.title"]');
    }

    get fullNameTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.name"]');
    }

    get locationAddressLine1TextBox(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.line1"]');
    }

    get postcodeTextBox(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.postCode"]');
    }

    get phoneNumberTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.workPhone"]');
    }

    get emailAddressTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.email"]');
    }

    get confirmEmailAddressTextBox(): Locator {
        return this.page.locator('input[id="confirmedEmailAddress"]');
    }

    get sameMailingAddressCheckbox(): Locator {
        return this.page.locator('input[id="mailingAddressSameAsLocationAddress1"]');
    }


    // confirmation Tab: {
    get confirmationTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Confirmation', { exact: true });
    }

    get formSubmit(): Locator {
        return this.page.locator('#formSubmit');
    }

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewBusinessHouseholdWorker> {
        return await test.step('Wait for the Register New Business  (Household Worker) Page to load', async (): Promise<RegisterNewBusinessHouseholdWorker> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForTermsConditionsTab(): Promise<RegisterNewBusinessHouseholdWorker> {
        return await test.step(`Check page is on the New Business Household Worker > Terms and conditions Tab`, async (): Promise<RegisterNewBusinessHouseholdWorker> => {
            await this.termsConditionsTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForPolicyDetailsTab(): Promise<RegisterNewBusinessHouseholdWorker> {
        return await test.step(`Check page is on the New Business Household Worker > Policy details Tab`, async (): Promise<RegisterNewBusinessHouseholdWorker> => {
            await this.policyDetailsTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForConfirmationTab(): Promise<RegisterNewBusinessHouseholdWorker> {
        return await test.step(`Check page is on the New Business Household Worker > Confirmation Tab`, async (): Promise<RegisterNewBusinessHouseholdWorker> => {
            await this.confirmationTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }
}
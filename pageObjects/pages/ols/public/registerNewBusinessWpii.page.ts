import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the Register New Business (WPII) Page reached from OLS Index.
 * This uses 'tab' like sections rather than the wizard (left hand sections and url with wizard in it.)
 * Each of the tabs are supported with stable 'waitFor<TabName>' functions so that actions can proceed smoothly.
 */
export default class RegisterNewBusinessWpii {
    page: Page;

    // class 'current' is being used to designate the visible tab text (but NOT the other elements inside the tab, only use it for checking tab title).
    private get sectionTitleIdentifier(): Locator {
        return this.page.locator('.current');
    }

    // These are the locators for objects (elements) available on this page

    //---------------  insuredPersonTab -----------------
    get insuredPersonTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText(`Insured person's name`, { exact: true });
    }

    get sourceDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.surveyAnswer"]');
    }

    get insuredFullNameTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.name"]');
    }

    get wpiiAbnTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.abn"]');
    }

    get wpiiBusinessDescriptionTextBox(): Locator {
        return this.page.locator('textarea[id="policyDetails.currentPeriod.businessDescription"]');
    }

    get wpiiDeclaredEarningsTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.declaredEarnings"]');
    }

    get insuredPersonNextButton(): Locator {
         return this.page.locator('#formSubmit');
    }

    //---------------  estimateTab -----------------
    get estimateTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Estimate', { exact: true });
    }

    get estimateNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    //---------------  termsConditionsTab -----------------
    get termsConditionsTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Terms and conditions', { exact: true });
    }

    get conditionsAcceptedCheckbox(): Locator {
        return this.page.locator('input[id="conditionsAccepted1"]');
    }

    get termsAndConditionsNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }


    //---------------  contactInformationTab -----------------
    get contactInformationTitleText(): Locator {
         return this.sectionTitleIdentifier.getByText('Contact information', { exact: true });
    }

    get titleDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.policyContact.contact.title"]');
    }

    get insuredDateOfBirthDatePicker(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.birthDate"]');
    }

    get insuredLocationAddressLine1TextBox(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.line1"]');
    }

    get postcodeTextBox(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.postCode"]');
    }

    get sameMailingAddressCheckbox(): Locator {
        return this.page.locator('input[id="mailingAddressSameAsLocationAddress1"]');
    }

    get phoneNumberTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.workPhone"]');
    }

    get insuredAccountTypeDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.bankAccount.accountType"]');
    }

    get insuredBsbTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.bankAccount.bsbCode"]');
    }

    get insuredAccountNameTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.bankAccount.accountName"]');
    }

    get insuredAccountNumberTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.bankAccount.accountNumber"]');
    }

    get emailAddressTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.email"]');
    }

    get confirmEmailAddressTextBox(): Locator {
        return this.page.locator('input[id="confirmedEmailAddress"]');
    }

    get contactInformationNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    //---------------  confirmationTab -----------------
    get confirmationTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Confirmation', { exact: true });
    }

    get confirmationSubmitButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewBusinessWpii> {
        return await test.step('Wait for the Register New Business (WPII) Page to load', async (): Promise<RegisterNewBusinessWpii> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForInsuredPersonTab(): Promise<RegisterNewBusinessWpii> {
        return await test.step(`Check page is on the New Business WPII > Insured person's name Tab`, async (): Promise<RegisterNewBusinessWpii> => {
            await this.insuredPersonTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForEstimateTab(): Promise<RegisterNewBusinessWpii> {
        return await test.step(`Check page is on the New Business WPII > Estimate Tab`, async (): Promise<RegisterNewBusinessWpii> => {
            await this.estimateTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForTermsConditionsTab(): Promise<RegisterNewBusinessWpii> {
        return await test.step(`Check page is on the New Business WPII > Terms and conditions Tab`, async (): Promise<RegisterNewBusinessWpii> => {
            await this.termsConditionsTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForContactInformationTab(): Promise<RegisterNewBusinessWpii> {
        return await test.step(`Check page is on the New Business WPII > Contact information Tab`, async (): Promise<RegisterNewBusinessWpii> => {
           await this.contactInformationTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForConfirmationTab(): Promise<RegisterNewBusinessWpii> {
        return await test.step(`Check page is on the New Business WPII > Confirmation Tab`, async (): Promise<RegisterNewBusinessWpii> => {
            await this.confirmationTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }
}
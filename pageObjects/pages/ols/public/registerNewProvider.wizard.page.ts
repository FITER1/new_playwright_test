import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the 'Register New Provider' Wizard such as: ../newprovider/wizard.wc
 * which is multi-part sections that expand/contract as a user progresses through the application.
 * This all comes after the Register New Provider Landing page > Start New Application.
 */
export default class RegisterNewProviderWizard {
    page: Page;


    //---------------1. Payee Details ---------------------------
    get payeeDetailsTitleText(): Locator {
        return this.page.locator('#page1').getByText('Payee details')
    }

    get abnTextBox(): Locator {
        return this.page.locator('input[id="providerDetails.abn"]');
    }

    get entityNameTextBox(): Locator {
        return this.page.locator('input[id="providerDetails.name"]');

    }

    get typeOfProviderTextBox(): Locator {
        return this.page.locator('input[id="providerDetails.providerTypeDescription"]');
    }

    get accountTypeDropDown(): Locator {
        return this.page.locator('select[id="providerDetails.bankAccount.accountType"]');
    }

    get bsbTextBox(): Locator {
        return this.page.locator('input[id="providerDetails.bankAccount.bsbCode"]');
    }

    get accountNameTextBox(): Locator {
        return this.page.locator('input[id="providerDetails.bankAccount.accountName"]');
    }

    get accountNumberTextBox(): Locator {
        return this.page.locator('input[id="providerDetails.bankAccount.accountNumber"]');
    }

    get nextSectionButton(): Locator {
        return this.page.locator("#next");
    }

    // -------------2. Contact Information--------------------
    get contactInformationTitleText(): Locator {
        return this.page.locator('#page2').getByText('Contact information')
    }

    // Physical location address
    get locationAddressInQldRadioButtons(): Locator {
        return this.page.locator("#locationAddress");
    }

    get locationAddressLine1TextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.locationAddress\\.line1"]');
    }

    get locationAddressSuburbTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.locationAddress\\.suburb"]');
    }

    get locationAddressPostCodeTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.locationAddress\\.postCode"]');
    }

    // Mailing address
    get mailingAddressInQldRadioButtons(): Locator {
        return this.page.locator("#mailingAddress");
    }

    get mailingAddressLine1TextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.mailingAddress\\.line1"]');
    }

    get mailingAddressSuburbTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.mailingAddress\\.suburb"]');
    }

    get mailingAddressPostCodeTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.mailingAddress\\.postCode"]');
    }

    //Preferred contact

    get providerPreferredContactFirstNameTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.providerRequestUser\\.userFirstname"]');
    }

    get providerPreferredContactLastNameTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.providerRequestUser\\.userSurname"]');
    }

    get providerPreferredContactPhoneNumberTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.phoneNo"]');
    }

    get providerPreferredContactEmailAddressTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.email"]');
    }

    get providerPreferredContactConfirmEmailAddressTextBox(): Locator {
        return this.page.locator('input[id="confirmedEmailAddress"]');
    }

    // 3. Working with us
    get workingWithUsTitleText(): Locator {
        return this.page.locator('#page3').getByText('Working with us');
    }

    //Sign up for ProviderConnect
    get newProviderUsernameTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.providerRequestUser\\.username"]');
    }

    get contactAboutB2bBillingRadioButtons(): Locator {
        return this.page.locator('#control_providerDetails_providerRequestUser_managementSoftwareFlag');
    }

    get practiceManagementSoftwareTextBox(): Locator {
        return this.page.locator('input[id="providerDetails\\.providerRequestUser\\.managementSoftwareName"]');
    }

    // 4. Review and confirmation Section
    get reviewConfirmationTitleText(): Locator {
        return this.page.locator('#page4').getByText('Review and confirmation');
    }

    get submitButton(): Locator {
        return this.page.locator('#confirm');
    }


    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewProviderWizard> {
        return await test.step('Wait for the Register New Provider Wizard Page to load', async (): Promise<RegisterNewProviderWizard> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForPayeeDetailsSection(): Promise<RegisterNewProviderWizard> {
        return await test.step('Check page is on the New Provider > Payee Details Section', async (): Promise<RegisterNewProviderWizard> => {
            await this.payeeDetailsTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForContactInformationSection(): Promise<RegisterNewProviderWizard> {
        return await test.step('Check page is on the New Provider > Contact Information Section', async (): Promise<RegisterNewProviderWizard> => {
            await this.contactInformationTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForWorkingWithUsSection(): Promise<RegisterNewProviderWizard> {
        return await test.step('Check page is on the New Provider > Working With Us Section', async (): Promise<RegisterNewProviderWizard> => {
            await this.workingWithUsTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForReviewAndConfirmationSection(): Promise<RegisterNewProviderWizard> {
        return await test.step('Check page is on the New Provider > Review and confirmation Section', async (): Promise<RegisterNewProviderWizard> => {
            await this.reviewConfirmationTitleText.waitFor({ state: "visible" });
            return this;
        });
    }
}
import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the 'New Registration' Page after navigation from OLS Login - Register for Provider Connect,
 * and covers each of the New Registration Tabs. */
export default class RegisterForProviderConnect {
    page: Page;

    // These are the locators for objects (elements) available on this page
    // class 'current' is being used to designate the visible tab text (but NOT the other elements inside the tab, only use it for checking tab title).
    private get sectionTitleIdentifier(): Locator {
        return this.page.locator('.current');
    }

    //---------------  validationTab -----------------
    get validationTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Validation');
    }

    get abnTextBox(): Locator {
        return this.page.locator('#abn');
    }

    get providerAccountTextBox(): Locator {
        return this.page.locator('#accountNumber');
    }

    get remittanceAdviceRefTextBox(): Locator {
        return this.page.locator('#remittanceNumber');
    }

    get validationTabNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }


    //---------------  detailsTab -----------------
    get detailsTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Details');
    }

    get firstNameTextBox(): Locator {
        return this.page.locator('#firstName');
    }

    get userNameTextBox(): Locator {
        return this.page.locator('#username');
    }

    get phoneNumberTextBox(): Locator {
        return this.page.locator('input[id="phone"]');
    }

    get mobileNumberTextBox(): Locator {
        return this.page.locator('#mobile');
    }

    get surNameTextBox(): Locator {
        return this.page.locator('#surname');
    }

    get faxNumberTextBox(): Locator {
        return this.page.locator('#faxNumber');
    }

    get emailAddressTextBox(): Locator {
        return this.page.locator('#email');
    }

    get detailsTabNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    //---------------  notificationTab -----------------
    get notificationTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Notification');
    }

    get remittanceNotificationOptionDropDown(): Locator {
        return this.page.locator('select[id="remittanceNotificationOption"]');
    }

    get notificationTabNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    //---------------  securityTab -----------------
    get securityTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Security');
    }

    get passwordTextBox(): Locator {
        return this.page.locator('input[id="password"]');
    }

    get confirmPasswordTextBox(): Locator {
        return this.page.locator('input[id="confirmPassword"]');
    }

    get securityTabNextButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    //---------------  summaryTab -----------------
    get summaryTabTitleText(): Locator {
        return this.sectionTitleIdentifier.getByText('Summary');
    }

    get termsAndConditionsCheckBox(): Locator {
        return this.page.locator('#acceptTermsAndConditions1');  // NOTE: use as .setChecked(true) or (false) to uncheck.
    }

    get submitButton(): Locator {
        return this.page.locator('#formSubmit');  // NOTE: use as .setChecked(true) or (false) to uncheck.
    }


    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.
    // It is possible to use a direct link for this landing page: ../providerRegistration.wc

    async initialisePage(): Promise<RegisterForProviderConnect> {
        return await test.step('Wait for the New Registration Page to load', async (): Promise<RegisterForProviderConnect> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForValidationTab(): Promise<RegisterForProviderConnect> {
        return await test.step('Check page is on the New Registration > Validation Tab', async (): Promise<RegisterForProviderConnect> => {
            await this.validationTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForDetailsTab(): Promise<RegisterForProviderConnect> {
        return await test.step('Check page is on the New Registration > Details Tab', async (): Promise<RegisterForProviderConnect> => {
            await this.detailsTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }


    async waitForNotificationTab(): Promise<RegisterForProviderConnect> {
        return await test.step('Check page is on the New Registration > Notification Tab', async (): Promise<RegisterForProviderConnect> => {
            await this.notificationTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForSecurityTab(): Promise<RegisterForProviderConnect> {
        return await test.step('Check page is on the New Registration > Security Tab', async (): Promise<RegisterForProviderConnect> => {
            await this.securityTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForSummaryTab(): Promise<RegisterForProviderConnect> {
        return await test.step('Check page is on the New Registration > Summary Tab', async (): Promise<RegisterForProviderConnect> => {
            await this.summaryTabTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

}
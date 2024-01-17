import { Locator, Page } from "@playwright/test";
import { test } from "../../../fixtures/basePage";
import { getAndCheckUri } from "../../../fixtures/env.validations";
import { addReportAnnotation } from "../../../fixtures/report.helper";
import AdditionalReportableInjuriesPayments from "./public/additionalReportableInjuriesPayments.page";
import ClaimLodgement from "./public/claimLodgement.page";
import IncidentNotification from "./public/incidentNotification.page";
import OnlineServicesLogin from "./public/mifosLogin.page";
import RegisterNewBusinessHouseholdWorker from "./public/registerNewBusinessHouseholdWorker.page";
import RegisterNewBusinessOrdinaryGov from "./public/registerNewBusinessOrdinaryGov.page";
import RegisterNewBusinessWpii from "./public/registerNewBusinessWpii.page";
import RegisterNewProvider from "./public/registerNewProvider.page";

// This represents the online index page the Online Services apps can be accessed via.
export default class OnlineServicesPublicIndexPage {
    page: Page;


    /* Note: These are NOT LOCATORS, but are TEXTS are using in both test validations and
       if applicable, in accessing the links they represent. */
    headerTexts = {
        contactUsText: 'Contact us',
        helpFaqText: 'Help & FAQs',
        phoneNumberText: '1300 362 128',
        mainTitleText: "Queensland's safety and workers' compensation services",
    };
    bodyTexts = {
        additionalReportableInjuriesPaymentsText: 'Additional reportable injuries payments',
        claimLodgementLinkText: 'Claim lodgement',
        downloadRemittanceLinkText: 'Download remittance',
        incidentNotificationLinkText: 'Incident notification',
        loginToCoverCheckLinkText: 'Login to cover check',
        loginToOnlineServicesLinkText: 'Login to online services',
        loginToWorkCoverConnectLinkText: 'Login to WorkCover Connect',
        loginTimeoutPageLinkText: 'Login timeout page',
        newBusinessHouseholdWorkerLinkText: 'New business (household worker)',
        newBusinessOrdinaryGovLinkText: 'New business (Ordinary/Government)',
        newBusinessWpiiLinkText: 'New business (WPII)',
        newProviderLinkText: 'New Provider',
        sendOrRequestInformationLinkText: 'Send or request information',
        verificationOfCoverLinkText: 'Verification of cover',
        wicSelectorLinkText: 'Wic Selector',
    };

    footerTexts = {
        accessibilityLinkText: 'Accessibility',
        copyrightLinkText: 'Copyright',
        disclaimerLinkText: 'Disclaimer',
        jobsInQueenslandGovernmentLinkText: 'Jobs in Queensland Government',
        otherLanguagesLinkText: 'Other languages',
        privacyLinkText: 'Privacy',
        queenslandGovernmentLinkText: 'Queensland Government',
        rightToInformationLinkText: 'Right to information',
    };


    /* Note from here are the locators for objects (elements) available on this page. */

    // header
    get workCoverQueenslandLogo(): Locator {
        return this.page.locator('#workCoverLogo');
    }

    // body
    // Navigate by link text - using Playwright recommended native locators is preferred when app supports it.
    // Example use below as: page.getByRole('link', { name: ${locators.body.downloadRemittanceLink}}).click()

    get additionalReportableInjuriesPaymentsLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.additionalReportableInjuriesPaymentsText });
    }

    get claimLodgementLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.claimLodgementLinkText });
    }

    get incidentNotificationLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.incidentNotificationLinkText });
    }

    get loginToOnlineServicesLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.loginToOnlineServicesLinkText });
    }

    get newBusinessHouseholdWorkerLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.newBusinessHouseholdWorkerLinkText })
    }

    get newBusinessOrdinaryGovernmentLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.newBusinessOrdinaryGovLinkText });
    }

    get newBusinessWpiiLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.newBusinessWpiiLinkText });
    }

    get newProviderLink(): Locator {
        return this.page.getByRole('link', { name: this.bodyTexts.newProviderLinkText });
    }

    getSelectSuburbFromList(selectSuburb: string): Locator {
        return this.page.getByRole('option', { name: selectSuburb });
    }


    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, starting on index.wc is a perfect example.
    public async goto(): Promise<OnlineServicesPublicIndexPage> {
        const olsBaseUrl = await getAndCheckUri(olsEnvironmentSettings.URLS.baseURL);
        addReportAnnotation('Application URI', `This test will start at application uri: ${olsBaseUrl}`);
        await this.page.goto(olsBaseUrl);
        return this;
    }

    // Navigations supported here - everything that goes FROM the index page should be listed when used in at least one test.
    public async navigateToLoginPage(): Promise<OnlineServicesLogin> {
        return await test.step(`Navigate from OLS Index to Login Page`, async () => {
            await this.loginToOnlineServicesLink.click();
            return await new OnlineServicesLogin(this.page).initialisePage();
        });
    }

    public async navigateToRegisterNewProviderPage(): Promise<RegisterNewProvider> {
        return await test.step(`Navigate from OLS Index to Register New Provider Page`, async () => {
            await this.newProviderLink.click();
            return await new RegisterNewProvider(this.page).initialisePage();
        });
    }

    public async navigateToRegisterNewBusinessOrdinaryPage(): Promise<RegisterNewBusinessOrdinaryGov> {
        return await test.step(`Navigate from OLS Index to Register New Business (Ordinary/Government) Page`, async () => {
            await this.newBusinessOrdinaryGovernmentLink.click();
            return await new RegisterNewBusinessOrdinaryGov(this.page).initialisePage();
        });
    }

    public async navigateToRegisterNewBusinessWpiiPage(): Promise<RegisterNewBusinessWpii> {
        return await test.step(`Navigate from OLS Index to Register New Business (Wpii) Page`, async () => {
            await this.newBusinessWpiiLink.click();
            return await new RegisterNewBusinessWpii(this.page).initialisePage();
        });
    }

    public async navigateToRegisterNewBusinessHouseholdWorkerPage(): Promise<RegisterNewBusinessHouseholdWorker> {
        return await test.step(`Navigate from OLS Index to Register New Business (Household Worker) Page`, async () => {
            await this.newBusinessHouseholdWorkerLink.click();
            return await new RegisterNewBusinessHouseholdWorker(this.page).initialisePage();
        });
    }

    async navigateToAdditionalReportableInjuriesPaymentsPage(): Promise<AdditionalReportableInjuriesPayments> {
        return await test.step(`Navigate from OLS Index to Additional Reportable Injuries Payments Page`, async () => {
            await this.additionalReportableInjuriesPaymentsLink.click();
            return await new AdditionalReportableInjuriesPayments(this.page).initialisePage();
        });
    }

    async navigateToIncidentNotificationPage(): Promise<IncidentNotification> {
        return await test.step(`Navigate from OLS Index to Incident Notification Page`, async () => {
            await this.incidentNotificationLink.click();
            return await new IncidentNotification(this.page).initialisePage();
        });
    }

    async navigateToClaimLodgementPage(): Promise<ClaimLodgement> {
        return await test.step(`Navigate from OLS Index to Claim Lodgement (Make a Claim) Page`, async () => {
            await this.claimLodgementLink.click();
            return await new ClaimLodgement(this.page).initialisePage();
        });
    }
}
import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

/** This represents the 'Register New Business (Ordinary/Gov)' Wizard such as: ../newbusiness/v2/wizard.wc
 * which is multi-part sections that expand/contract as a user progresses through the application.
 * This all comes after the Register New Business Landing page > Start New Application.
 */
export default class RegisterNewBusinessOrdinaryGovWizard {
    page: Page;

    // 1. Wages Estimate
    get wagesEstimateTitleText(): Locator {
        return this.page.locator('#page1').getByText('Wages estimate', { exact: true });
    }

    // TODO There are better ways to do radio Yes No with native playwright locators. May require redesign of how we use these.
    get currentlyEmployingYesButton(): Locator {
        return this.page.locator('label[for="policyDetails.commencementDateKnownFlag2"]');
    }

    get knownHowMuchPAYGYesButton(): Locator {
        return this.page.locator('label[for="policyDetails.wagePaymentsFromTodayKnownFlag2"]');
    }

    get employmentStartDatePicker(): Locator {
        return this.page.locator('input[id="policyDetails.commEmploymentDate"]');
    }

    get totalPAYGGrossTextBox(): Locator {
        return this.page.locator('input[id="wicWages0.provisionalPremiumWicBreakdown.premiumWicBreakdownDetails0.valueBigDecimal"]');
    }

    get deductedAllPaymentsYesButton(): Locator {
        return this.page.locator('label[for="wicWages[0].provisionalPremiumWicBreakdown.premiumWicBreakdownDetails[1].value2"]');
    }

    get engageSoleTraderNoButton(): Locator {
        return this.page.locator('label[for="wicWages[0].provisionalPremiumWicBreakdown.premiumWicBreakdownDetails[2].value1"]');
    }

    get noOfQLDWorkersDropdown(): Locator {
        return this.page.locator('select[id="wicWages0.provisionalPremiumWicBreakdown.premiumWicBreakdownDetails3.value"]');
    }

    get noOfUnpaidInternsDropdown(): Locator {
        return this.page.locator('select[id="wicWages0.provisionalPremiumWicBreakdown.premiumWicBreakdownDetails4.value"]');
    }

    get totalEstimateAmountTextBox(): Locator {
        return this.page.locator('input[id="wicWages0.provisionalPremiumWicBreakdown.premiumWicBreakdownDetails5.valueBigDecimal"]');
    }

    get wageEstimationLabel(): Locator {
        return this.page.locator('#calculateTotalEstimate .highlight-warning');
    }

    get nextSectionButton(): Locator {
        return this.page.locator("#next");
    }

    // 2. Business Activity
    get businessActivityTitleText(): Locator {
        // Note: sectionTitle: 'Business activity', Note: not unique enough - luckily sectionIdentifier is.
        return this.page.locator('#page2');
    }

    get businessDescriptionTextArea(): Locator {
        return this.page.locator('textarea[id="policyDetails.currentPeriod.businessDescription"]');
    }

    get searchWICButton(): Locator {
        return this.page.locator('#addWic');
    }

    get businessUndertakingButton(): Locator {
        return this.page.locator('#control_policyDetails_moreThanOneBusinessActivityFlag');
    }

    get getQuoteButton(): Locator {
        return this.page.locator('#next');
    }


    // 3. Estimate
    get estimateTitleText(): Locator {
        return this.page.locator('#page3').getByText('Estimate', { exact: true });
    }

    get totalPremiumLabel(): Locator {
        return this.page.locator('#page3').locator('p.call-to-action.highlight-warning').first();
    }

    get proceedButton(): Locator {
        return this.page.locator('#next');
    }

    // 4. Business Details
    get businessDetailsTitleText(): Locator {
        return this.page.locator('#page4').getByText('Business details');
    }

    get typeOfEntityDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.legalEntity"]');
    }

    get haveABNYesButton(): Locator {
        return this.page.locator('#control_policyDetails_employerHasAbnFlag');
    }

    get abnTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.abn"]');
    }

    get otherBusinessEntityButton(): Locator {
        return this.page.locator('#control_policyDetails_otherTradingNamesFlag');
    }

    get registeredForATOButton(): Locator {
        return this.page.locator('#control_policyDetails_gstRegistered');
    }

    get policySuccessionQuestionButton(): Locator {
        return this.page.locator('#control_policyDetails_successionQuestion1');
    }

    get ownORManageOtherBusinessButton(): Locator {
        return this.page.locator('#control_policyDetails_separateServicesQuestion2');
    }

    get storeBankAccountDetailsButton(): Locator {
        return this.page.locator('#control_policyDetails_storeBankAccountDetailsFlag');
    }


    // 5. Contact Details
    get contactDetailsTitleText(): Locator {
        return this.page.locator('#page5').getByText('Contact details', { exact: true });
    }

    get titleDropdown(): Locator {
        return this.page.locator('select[id="policyDetails.policyContact.contact.title"]');
    }

    get fullNameTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.name"]');
    }

    get positionTextBox(): Locator {
        return this.page.locator('input[id="policyDetails.policyContact.contact.position"]');
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

    get usePrimaryContactCheckBox(): Locator {
        return this.page.locator('[id="policyDetails\\.primaryContactAsAdditionalFlag1"]');
    }

    get hasAdditionalPolicyContactButton(): Locator {
        return this.page.locator('#control_policyDetails_hasAdditionalPolicyContactsFlag');
    }

    get externalAccountContactButton(): Locator {
        return this.page.locator('#control_policyDetails_employerUsesAccountant');
    }

    // TODO these are identical and require the action to add 'getByText' - replace with targeted locators or use playwright approach (pending trial).
    get isAddressInQLDYesButton(): Locator {
        return this.page.locator('#locationAddress');
    }
    get isAddressInQLDNoButton(): Locator {
        return this.page.locator('#locationAddress');
    }

    get addressLine1(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.line1"]');
    }

    get suburb(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.suburb"]');
    }

    get postcode(): Locator {
        return this.page.locator('input[name="policyDetails.policyContact.contact.locationAddress.postCode"]');
    }

    get filteredAddressValue(): Locator {
        return this.page.locator('#ui-id-7');
    }

    get sameAddressCheckBox(): Locator {
        return this.page.locator('[id="policyDetails\\.mailingAddressSameAsLocationFlag1"]');
    }

    // 6. Online Account
    get onlineAccountTitleText(): Locator {
        return this.page.locator('#userReg').getByText('Online account for WorkCover Connect');
    }

    get likeToRegisterForWorkCoverConnectButton(): Locator {
        return this.page.locator('#control_policyDetails_registerUser');
    }

    // 7. Review and Confirm
    get reviewAndConfirmTitleText(): Locator {
        return this.page.locator('#page6').getByText('Review and confirm');
    }

    get submitNewBusinessDetailsButton(): Locator {
        return this.page.locator('#confirm');
    }

    get popupIdentifier(): Locator {
        return this.page.locator('div#tariffFinderPopupDiv');
    }

    get searchWICTextBox(): Locator {
        return this.page.locator('input#searchText');
    }

    get selectWICRadioButton(): Locator {
        return this.page.locator('input[type="radio"][name="wic"]'); // Note: use with nth() as this will match multiple items in WIC search results.
    }

    get okButton(): Locator {
        return this.page.locator('#okButton');
    }


    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Wait for the Register New Provider Wizard Page to load', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForWagesEstimateSection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Wages Estimate Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            // exact required otherwise duplicate elements found
            await this.wagesEstimateTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForBusinessActivitySection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Business Activity Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            // Note: cannot use text 'Business activity' here as matches more than one element even with 'exact'.
            await this.businessActivityTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForBusinessDetailsSection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Business Details Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.businessDetailsTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForContactDetailsSection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Contact Details Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.contactDetailsTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForEstimateSection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Estimate Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.estimateTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForOnlineAccountSection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Online Account Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.onlineAccountTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForReviewAndConfirmSection(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Check page is on the New Business > Review and Confirm Section', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.reviewAndConfirmTitleText.waitFor({ state: "visible" });
            return this;
        });
    }

    // Use this for when we expect a popup (dialog / iframe etc) to appear, usually as result of clicking something on a page.
    async waitForWicSearchPopupToLoad(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Wait for the WIC Search Popup to load', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.popupIdentifier.waitFor({ state: "visible" });
            return this;
        });
    }

    // Use this for when we expect a popup (dialog / iframe etc) to appear, usually as result of clicking something on a page.
    async waitForWicSearchPopupToClose(): Promise<RegisterNewBusinessOrdinaryGovWizard> {
        return await test.step('Wait for the WIC Search Popup to close', async (): Promise<RegisterNewBusinessOrdinaryGovWizard> => {
            await this.popupIdentifier.waitFor({ state: "hidden" });
            return this;
        });
    }

}
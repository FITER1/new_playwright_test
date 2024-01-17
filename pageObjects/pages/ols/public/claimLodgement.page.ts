import { Locator, Page } from "@playwright/test";
import { test } from "../../../../fixtures/basePage";

// TODO @Danae to watch: composition needs careful consideration, more to understand about the apps first is recommended.

/** This currently represents 2 titled pages that both are 'claim lodgement' underneath:
 * Make a Claim! aka ../claim/lodgement.wc
 * Report an Injury! ../claim/lodgement.wc?reasonForClaim=R
 *
 * According to SMES:
 * The only difference would only be "What is the claim for" would be set to Report purpose only and is disabled.
 * Then the rest  would be the same for both.
 */
export default class ClaimLodgement {
    page: Page;

    // This is a helper to limit our locators for the Worker fields - without it playwright finds more than one match per field.
    get workerDetailsRootId() {
        return 'id^="injuredPersons"';
    }

    // Note: 2 different page titles depending which variant we are on, only one should be available.
    get makeAClaimHeaderLabelText(): Locator {
        return this.page.locator("#formHeader >> text='Make a claim'");
    }

    get reportAnInjuryHeaderLabelText(): Locator {
        return this.page.locator("#formHeader >> text='Report an injury'");
    }

    // class 'current' is being used to designate the visible tab text (but NOT the other elements inside the tab, only use it for checking tab title).

    get sectionTitleIdentifier(): Locator {
        return this.page.locator(".current");
    }

    // workerTab
    // TODO names can be simplified as already under workerTab to denote worker


    get sectionTitleTextWorkerTab(): Locator {
        return this.sectionTitleIdentifier.getByText('Worker', { exact: true });
    }

    get someSectionTextWorkerTab(): Locator {
        return this.page.getByText('Tell us who you are', { exact: true })
    }

    // TODO Better locators would really help here - something like getByLabel('Mobile') should be investigated as worked in wave 1 codebase.
    // Note: below locators are not ideal but we must limit the locators in some way for playwright to find the exact match
    //TODO this is the selector with text 'Who is registering the WorkCover claim?' but the locator really does not make this clear, can we do better?

    get claimInitiatorCodeDropdown(): Locator {
        return this.page.locator(`select[${this.workerDetailsRootId}][id$=".initiatorCode"]`);
    }

    get reasonForClaimTypeDropdown(): Locator {
        return this.page.locator(`select[${this.workerDetailsRootId}][id$=".reasonForClaimType"]`);
    }

    get workersTitleDropdown(): Locator {
        return this.page.locator(`select[${this.workerDetailsRootId}][id*="titleCode"]`);
    }

    get workerFirstNameTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".firstName"]`);
    }

    get workersSurnameTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id*="lastName"]`);
    }

    get workersDateOfBirthDatepicker(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id*="dateOfBirth"]`);
    }

    get workersGenderDropdown(): Locator {
        return this.page.locator(`select[${this.workerDetailsRootId}][id*="genderCode"]`);
    }

    get workersMobileTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$="mobile"]`);
    }

    get workersWorkPhoneTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$="workPhone"]`);
    }

    get workerEmailTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$="email"]`);
    }

    get manualAddressRadioButton(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".address.manualAddress1"]`);
    }

    get streetNoTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".address.streetNo"]`);
    }

    get streetNameTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".address.streetName"]`);
    }

    get streetTypeDropdown(): Locator {
        return this.page.locator(`select[${this.workerDetailsRootId}][id$=".address.streetType"]`);
    }

    get suburbTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".address.suburb"]`);
    }

    get postcodeTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".address.postcode"]`);
    }

    get bsbTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".bankDetails.bsb"]`);
    }

    get accountNameTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".bankDetails.accountName"]`);
    }

    get accountNumberTextBox(): Locator {
        return this.page.locator(`input[${this.workerDetailsRootId}][id$=".bankDetails.accountNumber"]`);
    }

    get workersTabSubmitButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    // injuryTab

    get sectionTitleTextInjuryTab(): Locator {
        return this.sectionTitleIdentifier.getByText('Injury')
    }

    get someSectionTextInjuryTab(): Locator {
        return this.page.getByText('Injury details');
    }

    get incidentDatepicker(): Locator {
        return this.page.locator("#incidentDate");
    }

    get natureOfInjuryTextBox(): Locator {
        return this.page.locator('textarea[id*="illnessDesc"]');
    }

    get partOfInjuredBodyTextBox(): Locator {
        return this.page.locator('textarea[id^="injuredPersons"][id$=".bodyPartsInjured"]');
    }

    get howInjuryHappenedTextBox(): Locator {
        return this.page.locator('#incidentDesc');
    }

    get placeOfInjuryDropdown(): Locator {
        return this.page.locator('select[id*="incidentLocationCode"]');
    }

    get injuryTabSubmitButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    // TODO there ways to handle this with better locators


    get isAddressInQLDRadioButton(): Locator {
        return this.page.locator('input[id="incidentAddress.manualAddress2"]');
    }

    get isAddressNOTInQLDRadioButton(): Locator {
        return this.page.locator('input[id="incidentAddress.manualAddress1"]');
    }

    get injuryAddressTextBox(): Locator {
        return this.page.locator('input[id="incidentAddress.lookupAddress"]');
    }

    get addressFilteredValue(): Locator {
        return this.page.locator('.ui-corner-all');
    }

    get incidentAddressStreetNoTextBox(): Locator {
        return this.page.locator('input[id="incidentAddress.streetNo"]');
    }

    get incidentAddressStreetTextBox(): Locator {
        return this.page.locator('input[id="incidentAddress.streetName"]');
    }

    get incidentStreetTypeDropdown(): Locator {
        return this.page.locator('select[id="incidentAddress.streetType"]');
    }

    get incidentAddressSuburbTextBox(): Locator {
        return this.page.locator('input[id="incidentAddress.suburb"]');
    }

    get incidentAddressPostCodeTextBox(): Locator {
        return this.page.locator('input[id="incidentAddress.postcode"]');
    }

    get whenEmployerWasAdvisedDatepicker(): Locator {
        return this.page.locator('input[id^="injuredPersons"][id$=".employerNotifiedDate"]');
    }

    get toWhomInjuryWasReportedTextBox(): Locator {
        return this.page.locator('input[id^="injuredPersons"][id$=".reportedTo"]');
    }

    get nameOfDoctorTextBox(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.doctorName"]');
    }

    get diagnosisTextBox(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.diagnosis"]');
    }

    get examDatepicker(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.dateMedCertSigned"]');
    }

    get requiresFutherTreatmentCheckBox(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.requiresFurtherTreatment"]');
    }

    get treatmentFromDatepicker(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.treatmentFrom"]');
    }

    get treatmentToDatepicker(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.treatmentTo"]');
    }

    get treatmentRequiredTextBox(): Locator {
        return this.page.locator('input[id*="claim.medicalDetails.treatmentRequired"]');
    }

    // employment Tab

    get sectionTitleTextEmploymentTab(): Locator {
        return this.sectionTitleIdentifier.getByText('Employment');
    }

    get tradingNameTextBox(): Locator {
        return this.page.locator('input[id="employer.tradingName"]');
    }

    get legalNameTextBox(): Locator {
        return this.page.locator('input[id="employer.legalName"]');
    }

    get isBusinessAddressInQLDRadioButton(): Locator {
        return this.page.locator('input[id="employer.address.manualAddress2"]');
    }

    get isBusinessAddressNOTInQLDRadioButton(): Locator {
        return this.page.locator('input[id="injuredPersons0.address.manualAddress1"]');
    }

    get employerAddressLookupTextBox(): Locator {
        return this.page.locator('input[id="employer.address.lookupAddress"]');
    }

    get addressAutocomplete(): Locator {
        return this.page.locator('.ui-corner-all');
    }

    get isEmployerAddressNOTInQLDRadioButton(): Locator {
        return this.page.locator('input[id="employer.address.manualAddress1"]');
    }

    get employerStreetNoTextBox(): Locator {
        return this.page.locator('input[id="employer.address.streetNo"]');
    }

    get employerStreetTextBox(): Locator {
        return this.page.locator('input[id="employer.address.streetName"]');
    }

    get employerStreetTypeDropdown(): Locator {
        return this.page.locator('select[id="employer.address.streetType"]');
    }

    get employerSuburbTextBox(): Locator {
        return this.page.locator('input[id="employer.address.suburb"]');
    }

    get employerPostCodeTextBox(): Locator {
        return this.page.locator('input[id="employer.address.postcode"]');
    }

    get workerPhoneTextBox(): Locator {
        return this.page.locator('input[id="employer.phone"]');
    }

    get employerEmailTextBox(): Locator {
        return this.page.locator('input[id="employer.email"]');
    }

    get workersOccupationTextBox(): Locator {
        return this.page.locator('input[id^="injuredPersons"][id$=".occupation"]');
    }

    get whoWorkerWasAtTimeOfInjuryDropdown(): Locator {
        return this.page.locator('select[id^="injuredPersons"][id$=".wcRelationshipCode"]');
    }

    get didInjuryHappenDropdown(): Locator {
        return this.page.locator('select[id^="injuredPersons"][id$=".injuryWhileCode"]');
    }

    get employerSatisfiedRadioButton(): Locator {
        return this.page.locator('input[id*=".employerSatisfiedWorkRelated2"]');
    }

    get excessRadioButton(): Locator {
        return this.page.locator('input[id*=".claimExcessPaid1"]');
    }

    get employerContinuedPaymentRadioButton(): Locator {
        return this.page.locator('input[id*=".employerContinuedWorkerPay1"]');
    }

    get employmentTabSubmitButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    // Summary Tab


    get sectionTitleTextSummaryTab(): Locator {
        return this.sectionTitleIdentifier.getByText('Summary');
    }

    get employerAgreesCheckBox(): Locator {
        return this.page.locator('#employerAgreeClaimInfoCorrect1');
    }

    get summaryTabSubmitButton(): Locator {
        return this.page.locator('#formSubmit');
    }

    constructor(page: Page) {
        this.page = page;
    }

    // Note: Only use goto() for when we load a page directly by a url, without prior logins etc required.

    async initialisePage(): Promise<ClaimLodgement> {
        return await test.step('Wait for the Claim Lodgement Page to load', async (): Promise<ClaimLodgement> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

    async waitForWorkerTab(): Promise<ClaimLodgement> {
        return await test.step(`Check page is on the Claims Lodgement > Worker Tab`, async (): Promise<ClaimLodgement> => {
            await this.sectionTitleTextWorkerTab.waitFor({ state: "visible" });
            await this.someSectionTextWorkerTab.waitFor({ state: "visible" });            return this;
        });
    }

    async waitForInjuryTab(): Promise<ClaimLodgement> {
        return await test.step(`Check page is on the Claims Lodgement > Injury Tab`, async (): Promise<ClaimLodgement> => {
            await this.sectionTitleTextInjuryTab.waitFor({ state: "visible" });
            await this.someSectionTextInjuryTab.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForEmploymentTab(): Promise<ClaimLodgement> {
        return await test.step(`Check page is on the Claims Lodgement > Employment Tab`, async (): Promise<ClaimLodgement> => {
            await this.sectionTitleTextEmploymentTab.waitFor({ state: "visible" });
            return this;
        });
    }

    async waitForSummaryTab(): Promise<ClaimLodgement> {
        return await test.step(`Check page is on the Claims Lodgement > Summary Tab`, async (): Promise<ClaimLodgement> => {
            await this.sectionTitleTextSummaryTab.waitFor({ state: "visible" });
            return this;
        });
    }
}
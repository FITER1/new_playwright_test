import { errorMessageDisplays } from '../../fixtures/assert';
import { clickOnRecaptchaCheckbox } from '../../fixtures/authentication';
import { test } from "../../fixtures/basePage";
import { getDataObjectDetailsForLogging } from "../../fixtures/report.helper";
import ClaimLodgementComplete from "../../pageObjects/pages/ols/public/claimLodgement.complete.page";
import ClaimLodgementOnline from "../../pageObjects/pages/ols/public/claimLodgement.page";
import {
    FillWorkerTabDataRules,
    LodgeNewClaimsAllDataRules,
    FillEmploymentTabDataRules,
    FillInjuryTabDataRules
} from "./actionsDataRules/claimLodgementActions.data.rules";

/**
 * On this file, we handle all the interactions with elements on Online claim lodgement page.
 * All the actions that happen when lodging new claims.
 * We have structured the interactions to mimic the workflow in lodging claims.
 * Each function in this file represents a tab or actions in each tab
 */
export default class ClaimLodgementActions {

    /** Starts on Claim Lodgement Page Worker Tab, progresses through tabs, and finishes on Claim Lodgement Complete page.
     * (Assumes process and clicking Submit is successful). */
    public static async lodgeNewClaims(lodgePage: ClaimLodgementOnline, actionData: LodgeNewClaimsAllDataRules): Promise<ClaimLodgementComplete> {
        return await test.step(`Lodge a Claim`, async () => {
            lodgePage = await this.fillWorkerTab(lodgePage, actionData.fillWorkerDetailsTab);
            lodgePage = await this.fillInjuryTab(lodgePage, actionData.fillInjuryDetailsTab);
            lodgePage = await this.fillEmploymentTab(lodgePage, actionData.fillEmploymentTab);
            return await this.fillSummaryTabAndSubmit(lodgePage);
        });
    }

    /** This function handles interactions on the Worker (first) tab of claims lodgement page.
     *  TODO Is this reusable for both entry from report an injury and make a claim? */
    public static async fillWorkerTab(lodgePage: ClaimLodgementOnline, actionData: FillWorkerTabDataRules): Promise<ClaimLodgementOnline> {
        return await test.step(`Fill the Worker tab and continue`, async () => {
            console.log(`Fill the Worker tab using Data: \n ${getDataObjectDetailsForLogging(actionData)}`);
            // Make sure we are at the right starting place for this action, as this page has multiple dynamic sections (visually look like tabs).
            await lodgePage.waitForWorkerTab();
            await lodgePage.claimInitiatorCodeDropdown.selectOption(actionData.claimInitiatorCode);
            await lodgePage.reasonForClaimTypeDropdown.selectOption(actionData.reasonForClaim);
            await lodgePage.workersTitleDropdown.selectOption(actionData.title);
            await lodgePage.workerFirstNameTextBox.fill(actionData.firstName);
            await lodgePage.workersSurnameTextBox.fill(actionData.surname);
            await lodgePage.workersDateOfBirthDatepicker.fill(actionData.dateOfBirth);
            await lodgePage.workersGenderDropdown.selectOption(actionData.gender);
            await lodgePage.workersMobileTextBox.fill(actionData.mobileNumber);
            await lodgePage.workersWorkPhoneTextBox.fill(actionData.phoneNumber);
            await lodgePage.workerEmailTextBox.fill(actionData.email);
            // await lodgePage.manualAddressRadioButton.click(); TODO : This behavior has been removed in ST NOV 2023 @Chermaine to review
            // Note: although this click opens some fields no special wait is needed as Playwright's auto wait on the next locator is sufficient (matches observations in ST).

            await lodgePage.streetNoTextBox.fill(actionData.streetNumber);
            await lodgePage.streetNameTextBox.fill(actionData.streetName);
            await lodgePage.streetTypeDropdown.selectOption(actionData.streetType);
            await lodgePage.suburbTextBox.fill(actionData.suburb);
            await lodgePage.postcodeTextBox.fill(actionData.postCode);
            await lodgePage.bsbTextBox.fill(actionData.bsb);
            await lodgePage.accountNameTextBox.fill(actionData.accountName);
            await lodgePage.accountNumberTextBox.fill(actionData.accountNumber);
            await clickOnRecaptchaCheckbox(lodgePage.page, lodgePage.workersTabSubmitButton);
            await lodgePage.workersTabSubmitButton.click();

            //Check the error message is not displayed TODO Should move to test validations or was this a stability attempt? Also name is confusing to text
            await errorMessageDisplays(lodgePage.page, '#globalErrors');

            // Wait for page refresh (tab change) that happens after click, observations in ST are that this is currently sufficient for stability.
            return await lodgePage.waitForInjuryTab();
        });
    }

    /** This function handles interactions on Injury (second) tab of claims lodgement page. */
    public static async fillInjuryTab(lodgePage: ClaimLodgementOnline, actionData: FillInjuryTabDataRules): Promise<ClaimLodgementOnline> {
        return await test.step(`Fill the Injury tab and continue`, async () => {
            console.log(`Fill the Injury tab using Data: \n ${getDataObjectDetailsForLogging(actionData)}`);

            /* Not strictly required as previous action does this, but what if we chain different actions together?
               Good practice to include, as smart waits add very little extra time. */
            await lodgePage.waitForInjuryTab();

            await lodgePage.incidentDatepicker.fill(actionData.incidentDate);
            await lodgePage.natureOfInjuryTextBox.fill(actionData.natureOfInjury);
            await lodgePage.partOfInjuredBodyTextBox.fill(actionData.partOfInjuredBody);
            await lodgePage.howInjuryHappenedTextBox.fill(actionData.howInjuryHappened);
            await lodgePage.placeOfInjuryDropdown.selectOption(actionData.placeOfInjury);

            // TODO Review - should address lookup just be avoided unless we are specifically testing it, and if so we should not work around the behaviour.
            // NOTE: try catch are very rare good use cases in tests as we expect app behaviour to be deterministic.
            // // Wanting to try/catch ideally prompts authors to investigate further and ask for support if needed before introducing them into the code.
            // try {
            //     await lodgePage.isAddressInQLDRadioButton).click();
            //     // Note: although this click opens some fields no special wait is needed as Playwright's auto wait on the next locator is sufficient (matches observations in ST).
            //     await lodgePage.injuryAddressTextBox).fill(actionData.fullAddress);
            //     // TODO investigate stability issues spotted in debug. Review what we did in wave 1 code to set this field
            //     await lodgePage.page.locator(`${lodgePage.locators.injuryTab.addressFilteredValue} >> text="${actionData.fullAddress}"`).click();
            // } catch (error) {


            // await lodgePage.isAddressNOTInQLDRadioButton.click(); TODO : This behavior has been removed in ST NOV 2023 @Chermaine to review

            // Note: although this click opens some fields no special wait is needed as Playwright's auto wait on the next locator is sufficient (matches observations in ST).
            await lodgePage.incidentAddressStreetNoTextBox.fill(actionData.streetNumber);
            await lodgePage.incidentAddressStreetTextBox.fill(actionData.streetName);
            await lodgePage.incidentStreetTypeDropdown.selectOption(actionData.streetType);
            await lodgePage.incidentAddressPostCodeTextBox.fill(actionData.postCode);
            await lodgePage.incidentAddressSuburbTextBox.fill(actionData.suburb);
            // }

            await lodgePage.whenEmployerWasAdvisedDatepicker.fill(actionData.whenEmployerWasAdvised);
            await lodgePage.toWhomInjuryWasReportedTextBox.fill(actionData.toWhomInjuryWasReported);
            await lodgePage.nameOfDoctorTextBox.fill(actionData.nameOfDoctor);
            // TODO Why are we refilling this twice?!
            await lodgePage.whenEmployerWasAdvisedDatepicker.fill(actionData.whenEmployerWasAdvised);
            await lodgePage.diagnosisTextBox.fill(actionData.diagnosis);
            await lodgePage.examDatepicker.fill(actionData.examDate);
            await lodgePage.requiresFutherTreatmentCheckBox.click();
            // Note: although this click opens some fields no special wait is needed as Playwright's auto wait on the next locator is sufficient (matches observations in ST).

            await lodgePage.treatmentFromDatepicker.fill(actionData.treatmentFromDate);
            await lodgePage.treatmentToDatepicker.fill(actionData.treatmentToDate);
            await lodgePage.treatmentRequiredTextBox.fill(actionData.treatmentRequired);
            await lodgePage.injuryTabSubmitButton.click();
            // Wait for page refresh (tab change) that happens after click, observations in ST are that this is currently sufficient for stability.
            return await lodgePage.waitForEmploymentTab();
        });
    }

    /* This function handles the employment details capturing during claims lodgement */
    public static async fillEmploymentTab(lodgePage: ClaimLodgementOnline, actionData: FillEmploymentTabDataRules): Promise<ClaimLodgementOnline> {
        return await test.step(`Fill the Employment tab and continue`, async () => {
            console.log(`Fill the Employment tab using Data: \n ${getDataObjectDetailsForLogging(actionData)}`);

            /* Not strictly required as previous action does this, but what if we chain different actions together?
               Good practice to include, as smart waits add very little extra time. */
            await lodgePage.waitForEmploymentTab();
            await lodgePage.tradingNameTextBox.fill(actionData.tradingName);
            await lodgePage.legalNameTextBox.fill(actionData.legalName);
            // try {
            //     await lodgePage.page.locator(lodgePage.locators.employmentTab.isBusinessAddressInQLDRadioButton).click();
            //     await lodgePage.page.locator(lodgePage.locators.employmentTab.employerAddressLookupTextBox).fill(actionData.fullAddress);
            //     // TODO investigate stability issues spotted in debug. Review what we did in wave 1 code to set this field
            //     await lodgePage.page.locator(`${lodgePage.locators.employmentTab.addressAutocomplete} >> text="${actionData.fullAddress}"`).click();
            // } catch (error) {
            // If an error occurs (including a timeout), click 'No' instead

            // await lodgePage.isEmployerAddressNOTInQLDRadioButton.click(); TODO : This behavior has been removed in ST NOV 2023 @Chermaine to review


            // Note: although this click opens some fields no special wait is needed as Playwright's auto wait on the next locator is sufficient (matches observations in ST).
            await lodgePage.employerStreetNoTextBox.fill(actionData.streetNumber);
            await lodgePage.employerStreetTextBox.fill(actionData.streetName);
            await lodgePage.employerStreetTypeDropdown.selectOption(actionData.streetType);
            await lodgePage.employerSuburbTextBox.fill(actionData.suburb);
            await lodgePage.employerPostCodeTextBox.fill(actionData.postCode);
            // }

            await lodgePage.workerPhoneTextBox.fill(actionData.workPhoneNumber);
            await lodgePage.employerEmailTextBox.fill(actionData.email);
            await lodgePage.workersOccupationTextBox.fill(actionData.workersOccupation);
            // TODO what is this field really? relationship to worker? Can it have a clearer name?
            await lodgePage.whoWorkerWasAtTimeOfInjuryDropdown.selectOption(actionData.whoWasWorker);
            await lodgePage.didInjuryHappenDropdown.selectOption(actionData.didInjuryHappen);
            await lodgePage.employerSatisfiedRadioButton.click();
            await lodgePage.excessRadioButton.click();
            await lodgePage.employerContinuedPaymentRadioButton.click();
            await lodgePage.employmentTabSubmitButton.click();
            // Wait for page refresh (tab change) that happens after click, observations in ST are that this is currently sufficient for stability.
            return await lodgePage.waitForSummaryTab();
        });
    }

    /* This function handles the summary tab of claims lodgement and assumes a successful submit. */
    public static async fillSummaryTabAndSubmit(lodgePage: ClaimLodgementOnline): Promise<ClaimLodgementComplete> {
        return await test.step(`Summary Tab - Agree and Submit`, async () => {
            /* Not strictly required as previous action does this, but what if we chain different actions together?
               Good practice to include, as smart waits add very little extra time. */
            await lodgePage.waitForSummaryTab();
            await lodgePage.employerAgreesCheckBox.click();
            await lodgePage.summaryTabSubmitButton.click();
            // Successful Lodgement is assumed - navigates to Claim Lodgement Complete Page
            return await new ClaimLodgementComplete(lodgePage.page).initialisePage();
        });
    }
}
import { expect } from "@playwright/test";
import { LodgeNewClaimsAllDataRules } from "../../actions/ols/actionsDataRules/claimLodgementActions.data.rules";
import AdditionalReportableInjuriesPaymentsActions
    from "../../actions/ols/additionalReportableInjuriesPayments.actions";
import ClaimLodgementActions from "../../actions/ols/claimLodgementActions";
import IncidentNotificationsActions from "../../actions/ols/incidentNotification.actions";
import { generateAddress } from "../../fixtures/address.data.generator";
import { test } from "../../fixtures/basePage";
import { generateDateTimeOrDate } from "../../fixtures/date.data.generator";
import { generateNumber, getRandomBSBNumber, randomText } from "../../fixtures/generic.data.generator";
import { checkAllTextsExistOnPage } from "../../fixtures/page.validations";
import { generatePersonalData } from "../../fixtures/personal.data.generator";
import OnlineServicesPublicIndexPage from "../../pageObjects/pages/ols/onlineServicesPublicIndex.page";

// This will handle the claim lodgement from external pages such as OLS claim lodgement
test.describe('Lodge and register a claim - @olsClaims', () => {

    // Note: We must set this page in the beforeEach test, so it can be used as the starting point for each test in this suite.
    let startingPage: OnlineServicesPublicIndexPage;

    test.beforeEach(async ({ onlineServicesPublicIndexPage }) => {
        // Load the index page
        startingPage = await onlineServicesPublicIndexPage.goto();
    });

    test.afterEach(async ({ page }) => {
        // Can not know for sure what page a test will end on in case of failures so just use a general reference.
        await page.close();
    });

    /*This is the claim lodgement form in OLS claim lodgement*/
    test('Lodge claim in Public Page Claim Lodgement', async () => {
        // TODO should this validation be part of index page test suite?
        const textArray = ["Queensland's safety and workers' compensation services",
            'Contact us'];
        await checkAllTextsExistOnPage(startingPage.page, textArray, 'OLS Index Page');

        // Setup the test data
        const personalData = generatePersonalData();
        const address = generateAddress();
        const lodgeNewClaimsData: LodgeNewClaimsAllDataRules = {
            fillWorkerDetailsTab: {
                claimInitiatorCode: 'Employer only',
                reasonForClaim: 'Medical expenses only',
                title: 'Miss',
                firstName: randomText(1, 1),
                surname: randomText(1, 1),
                gender: 'Male',
                mobileNumber: '04' + personalData.phoneNum,
                phoneNumber: personalData.phoneNum,
                streetNumber: address.streetNo,
                streetName: address.streetName,
                streetType: address.streetType,
                suburb: address.suburb,
                postCode: address.postCode,
                bsb: getRandomBSBNumber(),
                accountName: randomText(1, 1) + ' ' + randomText(1, 1),
                accountNumber: generateNumber(100000000, 999999999),
                email: personalData.firstName + '@mailinator.com',
                dateOfBirth: personalData.dateOfBirth,
            },
            fillInjuryDetailsTab: {
                incidentDate: generateDateTimeOrDate(10, 'days', 'past', 'datetime'),
                natureOfInjury: randomText(3, 7),
                partOfInjuredBody: randomText(2, 5),
                howInjuryHappened: randomText(5, 10),
                placeOfInjury: 'Construction site',
                fullAddress: address.addressLine1 + ' ' + address.suburb + ' ' + address.state + ' ' + address.postCode,
                streetNumber: address.streetNo,
                streetName: address.streetName,
                streetType: address.streetType,
                postCode: address.postCode,
                suburb: address.suburb,
                whenEmployerWasAdvised: generateDateTimeOrDate(10, 'days', 'past', 'date'),
                toWhomInjuryWasReported: randomText(1, 1) + ' ' + randomText(1, 1),
                nameOfDoctor: "Dr." + ' ' + randomText(1, 1) + ' ' + randomText(1, 1),
                diagnosis: randomText(2, 7),
                examDate: generateDateTimeOrDate(7, 'days', 'past'),
                treatmentFromDate: generateDateTimeOrDate(6, 'days', 'past', 'date'),
                treatmentToDate: generateDateTimeOrDate(4, 'days', 'past', 'date'),
                treatmentRequired: randomText(5, 10),
            },
            fillEmploymentTab: {
                tradingName: randomText(3, 5),
                legalName: randomText(3, 5),
                streetNumber: address.streetNo,
                streetName: address.streetName,
                streetType: address.streetType,
                suburb: address.suburb,
                postCode: address.postCode,
                workPhoneNumber: personalData.phoneNum,
                workersOccupation: randomText(1, 5),
                whoWasWorker: "Contractor",
                didInjuryHappen: "11. At work - working from home",
                fullAddress: address.addressLine1 + ' ' + address.suburb + ' ' + address.state + ' ' + address.postCode,
                email: personalData.firstName + '@mailinator.com',
            },
        };

        // Do the test steps
        const claimLodgementPage = await startingPage.navigateToClaimLodgementPage();

        // VERIFY: app is on the claim lodgement page with header 'Make a claim'
        await expect(claimLodgementPage.makeAClaimHeaderLabelText).toBeVisible();

        // TODO Needs breaking back up so that test can validate between chunks?
        await ClaimLodgementActions.lodgeNewClaims(claimLodgementPage, lodgeNewClaimsData);

        // TODO Verify some results of our test actions to make this a meaningful test.
    });

    /*This is a claim lodgement redirect via Additional Reportable Injury*/
    test('Lodge claim via Additional Reportable Injury Payments', async () => {
        const injuriesPaymentsPage = await startingPage.navigateToAdditionalReportableInjuriesPaymentsPage();
        const reportInjuryPage = await AdditionalReportableInjuriesPaymentsActions.additionalReportableInjuriesToClaimLodgementRedirect(injuriesPaymentsPage);

        // TODO Verify some results of our test actions to make this a meaningful test.
        expect(reportInjuryPage.page.url()).toContain('reasonForClaim=R');
        expect(await reportInjuryPage.reportAnInjuryHeaderLabelText.isVisible()).toBe(true);
    });

    /*This is a claim lodgement redirect via Incident Notification*/
    test('Lodge claim via Incident Notification', async () => {
        const incidentNotificationPage = await startingPage.navigateToIncidentNotificationPage();
        const makeClaimPage = await IncidentNotificationsActions.incidentNotificationClaimLodgementRedirect(incidentNotificationPage);

        // TODO Verify some results of our test actions to make this a meaningful test.
        expect(await makeClaimPage.makeAClaimHeaderLabelText.isVisible()).toBe(true);
    });
});

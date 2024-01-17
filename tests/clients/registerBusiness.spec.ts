// import { expect } from "@playwright/test";
// import {
//     RegisterNewBusinessHWWAllDataRules
// } from "../../actions/ols/actionsDataRules/registerBusinessHouseholdWorker.actions.data.rules";
// import {
//     RegisterBusinessOrdinaryGovAllDataRules
// } from "../../actions/ols/actionsDataRules/registerBusinessOrdinaryGov.actions.data.rules";
// import {
//     RegisterBusinessWpiiAllDataRules
// } from "../../actions/ols/actionsDataRules/registerBusinessWpii.actions.data.rules";
// import NewBusinessHouseholdWorkerActions from "../../actions/ols/registerBusinessHouseholdWorker.actions";
// import NewBusinessOrdinaryGovActions from "../../actions/ols/registerBusinessOrdinaryGov.actions";
// import NewBusinessWPIIActions from "../../actions/ols/registerBusinessWpii.actions";
// import { generateAddress } from "../../fixtures/address.data.generator";
// import { test } from "../../fixtures/basePage";
// import { generateDateTimeOrDate } from "../../fixtures/date.data.generator";
// import {
//     generateMoneyAmount,
//     generateNumber,
//     getRandomABNNumber,
//     getRandomBSBNumber,
//     randomText
// } from "../../fixtures/generic.data.generator";
// import { checkAnyTextExistsOnAPage } from "../../fixtures/page.validations";
// import { generatePersonalData } from "../../fixtures/personal.data.generator";
// import OnlineServicesPublicIndexPage from "../../pageObjects/pages/ols/onlineServicesPublicIndex.page";


// test.describe('register new from online services without logging in - @olsBusiness', () => {

//     // Note: We must set this page in the beforeEach test, so it can be used as the starting point for each test in this suite.
//     let startingPage: OnlineServicesPublicIndexPage;

//     test.beforeEach(async ({ onlineServicesPublicIndexPage }) => {
//         // Load the index page
//         startingPage = await onlineServicesPublicIndexPage.goto();
//         // Note: each sub test starts on a different link from ols index
//         // TODO Should these really be one test suite or three?
//     });

//     test.afterEach(async ({ page }) => {
//         // Can not know for sure what page a test will end on in case of failures so just use a general reference.
//         await page.close();
//     });

//     test('register new business online of type Ordinary / Government', async () => {
//         // TODO FROM original test - really part of test or was this about stabilility? If we keep it should it be a standalone quick test on Index Suite?
//         //Check whether any of the texts below exist on the page
//         const textToCheck = [
//             'Online services',
//             "Queensland's safety and workers' compensation services",
//             'Contact us',
//         ];
//         await checkAnyTextExistsOnAPage(startingPage.page, textToCheck);

//         // Setup the test data
//         const personalData = generatePersonalData();
//         const address = generateAddress();
//         const registerBusinessOrdinaryGovActionData: RegisterBusinessOrdinaryGovAllDataRules = {
//             newBusinessWagesEstimate: {
//                 employmentStartDate: generateDateTimeOrDate(30, 'days', 'past', 'date'),
//                 totalPaygGross: generateMoneyAmount(100000, 999999),
//                 noOfQldWorkers: '1-5',
//                 noOfUnpaidInterns: '0',
//                 totalEstimateAmount: generateMoneyAmount(1000, 9999),
//             },
//             newBusinessActivity: {
//                 businessDescription: randomText(5, 10),
//                 businessUndertakingButton: 'No',
//                 wicSearchText: 'Sewerage & Reticulation Works',
//             },
//             newBusinessDetails: {
//                 typeOfEntity: 'Company',
//                 abn: getRandomABNNumber(),
//             },
//             newBusinessContactDetails: {
//                 title: 'Miss',
//                 fullName: personalData.firstName + ' ' + personalData.lastName,
//                 position: randomText(1, 5),
//                 phoneNumber: personalData.phoneNum,
//                 email: personalData.firstName + '@workcoverqld.com.au',
//                 addressLine1: address.addressLine1,
//                 suburb: address.suburb,
//                 postCode: address.postCode,
//                 fullAddress: address.addressLine1 + ' ' + address.suburb + ' ' + address.state + ' ' + address.postCode,
//             },
//         };

//         // Navigate to the New Business (Ordinary/Gov) page from the index page
//         const registerPage = await startingPage.navigateToRegisterNewBusinessOrdinaryPage();

//         // TODO split up parent action so validations can be done along the way at test level
//         // Do the next test steps - register new business
//         const confirmationPage = await NewBusinessOrdinaryGovActions.registerNewBusinessGovernment(registerPage, registerBusinessOrdinaryGovActionData);

//         // TODO Verify some results of our test actions to make this a meaningful test.
//         await test.step('TODO VERIFY Something Meaningful - 6 digit amount on confirmation page', async () => {
//             const spanText = await confirmationPage.page.$eval(confirmationPage.locatorTextHelper.amountLabel, (el: HTMLElement) => el.innerText, { timeout: 2000 });
//             expect(spanText, `Amount expected to end in 6 digits but found: ${spanText}`).toMatch(/^\d{6}$/);
//         });
//     });

//     test('register new business online of type WPII', async () => {
//         // TODO FROM original test - really part of test or was this about stabilility? If we keep it should it be a standalone quick test on Index Suite?
//         //Check whether any of the texts below exist on the page
//         const textToCheck = [
//             'Online services',
//             "Queensland's safety and workers' compensation services",
//             'Contact us',
//         ];
//         await checkAnyTextExistsOnAPage(startingPage.page, textToCheck);

//         // Setup the test data
//         const personalData = generatePersonalData();
//         const address = generateAddress();
//         const doRegisterPolicyData: RegisterBusinessWpiiAllDataRules = {
//             registerWpiiInsured: {
//                 insuredPerson: "Insurance broker",
//                 insuredFullName: personalData.firstName + ' ' + personalData.lastName,
//                 businessDescription: randomText(1, 2),
//                 declaredEarnings: generateMoneyAmount(100000, 999999),
//                 abn: getRandomABNNumber(),
//             },
//             registerWpiiContactInformation: {
//                 title: 'Miss',
//                 postCode: address.postCode,
//                 phoneNumber: personalData.phoneNum,
//                 accountType: 'Savings',
//                 accountName: randomText(1, 2),
//                 accountNumber: generateNumber(100000000, 99999999),
//                 addressLine1: address.addressLine1,
//                 dateOfBirth: generateDateTimeOrDate(14, "years", "past", 'date'),
//                 email: personalData.firstName + '@test.com',
//                 abn: getRandomABNNumber(),
//                 bsbNumber: getRandomBSBNumber(),
//             },
//         };

//         // Navigate to the New Business (Ordinary/Gov) page from the index page
//         const registerPage = await startingPage.navigateToRegisterNewBusinessWpiiPage();
//         // Do the next test steps - register new business
//         const confirmationPage = await NewBusinessWPIIActions.registerNewBusinessWpii(registerPage, doRegisterPolicyData);

//         // TODO Verify some results of our test actions to make this a meaningful test.
//     });

//     test('register new business online of type Household Worker (HHW)', async () => {
//         // TODO FROM original test - really part of test or was this about stabilility? If we keep it should it be a standalone quick test on Index Suite?
//         //Check whether any of the texts below exist on the page
//         const textToCheck = [
//             'Online services',
//             "Queensland's safety and workers' compensation services",
//             'Contact us',
//         ];
//         await checkAnyTextExistsOnAPage(startingPage.page, textToCheck);

//         // Setup the test data
//         const personalData = generatePersonalData();
//         const address = generateAddress();
//         const registerNewBusinessHWWData: RegisterNewBusinessHWWAllDataRules = {
//             registerHhwTermsAndConditions: {
//                 surveyAnswer: 'Social media',
//             },
//             registerHhwPolicyDetailsTab: {
//                 title: 'Dr',
//                 fullName: personalData.firstName + ' ' + personalData.lastName,
//                 addressLine1: address.addressLine1,
//                 postCode: address.postCode,
//                 phoneNumber: personalData.phoneNum,
//                 email: personalData.firstName + "@workcoverqld.com.au",
//             },
//         };

//         // Navigate to the New Business (Household Worker) page from the index page
//         const registerPage = await startingPage.navigateToRegisterNewBusinessHouseholdWorkerPage();

//         // Do the next test steps - register new business.
//         const confirmationPage = await NewBusinessHouseholdWorkerActions.registerNewBusinessHouseholdWorker(registerPage, registerNewBusinessHWWData);

//         // TODO Verify some results of our test actions to make this a meaningful test.
//     });

// });
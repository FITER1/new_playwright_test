// import OLSLoginActions from "../../actions/ols/logins.actions";
// import { test } from "../../fixtures/basePage";
// import { getCredentialsAccountLocking } from "../../fixtures/login";
// import { checkAllTextsExistOnPage } from "../../fixtures/page.validations";
// import OnlineServicesLogin from "../../pageObjects/pages/ols/public/onlineServicesLogin.page";

// test.describe('OLS Login Test Suite', () => {

//     // Note: We must set this page in the beforeEach test, so it can be used as the starting point for each test in this suite.
//     let startingPage: OnlineServicesLogin;

//     test.beforeEach(async ({ onlineServicesPublicIndexPage }) => {
//         await onlineServicesPublicIndexPage.goto();
//         startingPage = await onlineServicesPublicIndexPage.navigateToLoginPage();
//     });

//     test.afterEach(async ({ page }) => {
//         // Can not know for sure what page a test will end on in case of failures so just use a general reference.
//         await page.close();
//     });

//     test('Account locking for multiple invalid attempts - @lock', async () => {
//         // TODO We should check these env variables exist before starting (and therefore failing) the test
//         const { username, password } = getCredentialsAccountLocking();

//         // TODO Ideally we do not pass around the actual credentials, only the pointers to them (reduce security vulnerability)
//         const currentPage = await OLSLoginActions.lockAccountByLoginAttempts(startingPage, username, password);

//         // Verify expected (failed login) message appears
//         const expectedTexts = ['Your account has been locked for 15 minutes due to too many failed password attempts.'];
//         await checkAllTextsExistOnPage(currentPage.page, expectedTexts, 'OLS Login Page - Account Locked');
//     });

// });

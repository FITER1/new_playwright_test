// As a Panel Solicitor, I want log in to Panel One
// and look after the damages claim, submit an invoice and so on
import { test } from "../../fixtures/basePage";
import { getMifosCredentials } from "../../fixtures/login";
import MifosLoginAction from "../../actions/generic/logins.actions";

test.describe('Create new client - @newClient', () => {

    test.beforeEach(async ({ mifosHomePage }) => {
        // Load the index page
        await mifosHomePage.goto();
        //Do the login
        const { username, password } = getMifosCredentials();
        await MifosLoginAction.logInMifos(mifosHomePage, username, password);
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Create new individual client', async ({ page }) => {
        await page.locator('#swatch-menu').getByText('Clients').click();
        await page.getByRole('link', { name: ' Create Client' }).click();
        await page.locator('a').filter({ hasText: 'Head Office' }).click();
        await page.locator('li').filter({ hasText: 'Head Office' }).click();
        await page.locator('a').filter({ hasText: '--Select Staff--' }).click();
        await page.locator('#staffId_chosen').getByText('Drury, Peter').click();
        await page.locator('#legalFormId').selectOption('number:1');
        await page.getByLabel('First name*').fill('Robert');
        await page.getByLabel('Last name*').fill('Jakech');
        await page.getByLabel('Mobile number').click();
        await page.getByLabel('Mobile number').fill('015629900');
        await page.locator('#dateofbirth').click();
        await page.getByRole('button', { name: '1982' }).click();
        await page.getByRole('button', { name: 'February' }).click();
        await page.getByRole('button', { name: '02' }).first().click();
        await page.locator('#clienttypeId').selectOption('number:30');
        await page.getByLabel('External ID').fill('10910991001');
        await page.locator('#activeCheckbox').check();
        await page.locator('#activationDate').click();
        await page.getByRole('cell', { name: 'Today: Jan 4,' }).locator('a').click();
        await page.locator('#submittedon').click();
        await page.getByRole('cell', { name: 'Today: Jan 4,' }).locator('a').click();
        await page.getByRole('button', { name: 'Submit' }).click();

    });
});

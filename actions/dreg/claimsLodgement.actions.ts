// This page handles the lodgement of claims for workers in Digital Registration
// and the redirect to OLS claim lodgement page for Employers and Joint initiators

import { test } from "../../fixtures/basePage";
import DigitalRegistrationWhoAreYou from "../../pageObjects/pages/dreg/digitalRegistration.whoAreYou.page";

export default class DigitalRegistrationActions {

    public static async workerInitiatedClaim(regPage: DigitalRegistrationWhoAreYou): Promise<DigitalRegistrationWhoAreYou> {
        return await test.step(`Start Worker Initiated Claim`, async () => {
            await regPage.workerRadioButton.click();
            await regPage.nextButton.click();
            // TODO Add the return page ('before you start') in a new page model and initialise it.
            return regPage;
        });
    }
}
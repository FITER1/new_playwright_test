import { Locator, Page } from "@playwright/test";
import { mifosEnvironmentSettings } from "../../../environmentSettings/fineract.ui.environmentSettings";
import { test } from "../../../fixtures/basePage";
import { getAndCheckUri } from "../../../fixtures/env.validations";
import { addReportAnnotation } from "../../../fixtures/report.helper";

// This represents the online index page the Online Services apps can be accessed via.
export default class MifosHomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    bodyTexts = {
        loginButtonText:'Sign In'
    };
    get usernameTextBox(): Locator {
        return this.page.locator('input[placeholder="username"]');
    }

    get passwordTextBox(): Locator {
        return this.page.locator('input[placeholder="password"]');
    }

    get loginButton(): Locator {
        return this.page.getByRole('button', { name: this.bodyTexts.loginButtonText });
    } 
    
    public async goto(): Promise<MifosHomePage> {
        const mifosBaseUrl = await getAndCheckUri(mifosEnvironmentSettings.URLS.mifosURL);
        addReportAnnotation('Application URI', `This test will start at application uri: ${mifosBaseUrl}`);
        await this.page.goto(mifosBaseUrl);
        return this;
    }

    public async initialisePage(): Promise<MifosHomePage> {
        return await test.step('Wait for the Mifos Login Page to load', async (): Promise<MifosHomePage> => {
            await this.page.waitForLoadState();
            return this;
        });
    }

}
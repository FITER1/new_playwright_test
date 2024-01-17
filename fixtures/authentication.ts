import { Locator, Page, expect } from '@playwright/test';
import { cpjEnvironmentSettings } from "../environmentSettings/cpj.environmentSettings";
import { cuiEnvironmentSettings } from "../environmentSettings/cui.environmentSettings";
import { dregEnvironmentSettings } from "../environmentSettings/dreg.environmentSettings";
import { mcsEnvironmentSettings } from "../environmentSettings/mcs.environmentSettings";
import { test } from "./basePage";
import { getAndCheckEnvVariable } from "./env.validations";

export async function clickOnRecaptchaCheckbox(page: Page, somethingBelowRobotBox: Locator) {
    // TODO Move to an env setting so pipelines can config appropriate waits
    const RECAPTCHA_RESPONSE_TIMEOUT = 20000;

    await test.step(`Perform 'I am not a Robot' checkmark`, async () => {
        // To support chrome, first scroll to something below (and outside) the iframe. (Firefox and webkit work fine without this).
        await somethingBelowRobotBox.scrollIntoViewIfNeeded({ timeout: RECAPTCHA_RESPONSE_TIMEOUT }); // No timeout will leave this running indefinitely.

        // Tick the robot box - Note: we cannot use 'check' here as the element does not behave like a true checkbox.
        const recaptchaCheckboxLocator = page.frameLocator('iframe[title="reCAPTCHA"]')
            .getByRole('checkbox', { name: 'I\'m not a robot' });
        await recaptchaCheckboxLocator.click();

        // We must wait for the visual status to change, Playrwight's auto-waiting does not apply here.
        await expect(recaptchaCheckboxLocator, "Recaptcha should be marked successful.")
            .toBeChecked({ timeout: RECAPTCHA_RESPONSE_TIMEOUT });

        // TODO confirm if this is necessary / applicable with revamped implementation
        // Wait for the new page to reload
        await page.waitForLoadState();
    });
}

// TODO Extract token values to dotenv for safety and pipeline readiness.
export async function digRegBearerToken(page: Page) {
    const token = await getAndCheckEnvVariable(dregEnvironmentSettings.OTHER.bypassToken);
    await page.setExtraHTTPHeaders({
        'Authorization': token,
    });
}

export async function addCpjBearerToken(page: Page) {
    /** https://playwright.dev/docs/api/class-page#page-set-extra-http-headers */
        // TODO IS THIS ENOUGH OR SHOULD IT BE page.browser.setExtraHTTPHeaders which would then apply to all pages opened in the context (ie single test execution)
        // https://playwright.dev/docs/api/class-browsercontext#browser-context-set-extra-http-headers
    const token = await getAndCheckEnvVariable(cpjEnvironmentSettings.OTHER.bypassToken);
    await page.context().setExtraHTTPHeaders({
        'X-WCQ-AUTOTEST': token,
    });
}

export async function addMcsBearerToken(page: Page) {
    const token = await getAndCheckEnvVariable(mcsEnvironmentSettings.OTHER.bypassToken);
    await page.setExtraHTTPHeaders({
        'X-WCQ-AUTOTEST': token,
    });
}

export async function addCuiBearerToken(page: Page) {
    const token = await getAndCheckEnvVariable(cuiEnvironmentSettings.OTHER.bypassToken);
    await page.setExtraHTTPHeaders({
        'X-WCQ-AUTOTEST': token,
    });
}

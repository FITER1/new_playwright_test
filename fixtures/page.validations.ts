import { expect, Page } from '@playwright/test';
import { test } from "./basePage";

// TODO Cleanup like second function below - reporting, consistency, naming - atLeastOne
export async function checkAnyTextExistsOnAPage(page: Page, textArray: string[]): Promise<string[]> {
    const foundTexts: string[] = [];

    for (const text of textArray) {
        const exists = await page.$(`text=${text}`);
        if (exists) {
            foundTexts.push(text);
            console.log(`Text found: ${text}`);
        }
    }

    expect(foundTexts.length).toBeGreaterThan(0);

    return foundTexts;
}

// TODO Rename to Verify
// TODO make sure callers give a page name for more meaning, or if we use iPage may be able to use object name.
export async function checkAllTextsExistOnPage(page: Page, expectedTexts: string[], pageName = '') {

    // Provide Report Body Logging and wrap with meaningful messages.
    await test.step(`VERIFY: the ${pageName} page shows the expected text(s):`, async () => {
        // TODO LOG THE EXPECTED TEXTS
        let foundAllTexts = true;
        for (const text of expectedTexts) {

            await test.step(`VERIFY: expected text: ${text}`, async () => {
                // TODO is this enough to ensure visibility???
                const foundTheText = await page.$(`text=${text}`);

                // Log a useful failure in the main report per text entry,
                // And do not stop the test until all checks are done (expect.soft allows this)
                expect.soft(foundTheText, `Found Expected Text: ${text}`).toBeTruthy();

                // Note any failures so that we can fail the test overall if any are missing
                if (!foundTheText) {
                    foundAllTexts = false;
                }
            });
        }
        expect(foundAllTexts, 'Found ALL expected texts').toBeTruthy();
    });
}

export function verifyPageUrlContains(expectedText: string, page: Page, pageName: string = '', allowTestContinue = false) {
    expect.configure({ soft: allowTestContinue, message: `${pageName} Url contains expected text:` })(page.url()).toContain(expectedText);
}
import { expect, Page } from '@playwright/test';

export async function assertAndLogTab(
    page: Page,
    containerSelector: string,
    tabText: string,
    descriptionText: string
): Promise<void> {
    // Build the full selector dynamically
    const fullSelector = `${containerSelector} div a span:has-text("${tabText}")`;

    // Find the tab element by the given tabText
    const tabElement = await page.$(fullSelector);

    // If the tab element is not found, throw an error
    if (!tabElement) {
        throw new Error(`Tab with text ${tabText} not found in container ${containerSelector}`);
    }

    // Assert that the tab contains the description text
    const hasDescriptionText = await page.$(`text=${descriptionText}`);
    expect(hasDescriptionText).toBeTruthy();

    // Log that you're executing tests on this tab
    console.log(`Executing tests on - ${tabText} tab`);
    console.log('---------------------------------');
}
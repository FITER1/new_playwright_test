import { Page } from "@playwright/test";

export async function errorMessageDisplays(page: Page, selector: string) {
    const element = await page.$(selector);
    let textContent: string | null = null;

    if (element) {
        textContent = await element.textContent();
    }

    if (textContent !== null && textContent !== '') {
        const cleanTextContent = textContent.replace(/\s+/g, ' ').trim();
        throw new Error(`'${cleanTextContent}'`);
    }
}
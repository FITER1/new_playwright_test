import { Page } from '@playwright/test';

const tableLocators = {
    tableElement: '.resultsTable',
    rowElement: 'tbody tr',
    cellElement: 'td',
};

export async function verifyTableContent(page: Page, searchTerms: string[]): Promise<boolean> {
    const { tableElement, rowElement, cellElement } = tableLocators;

    return await page.evaluate(({ searchTerms, tableElement, rowElement, cellElement }) => {
        const table = document.querySelector(tableElement);
        const rows = table?.querySelectorAll(rowElement);

        if (rows) {
            return Array.from(rows).some(row => {
                const cells = row.querySelectorAll(cellElement);
                return Array.from(cells).some(cell => {
                    return searchTerms.some(term => cell.textContent?.trim().includes(term));
                });
            });
        }
        return false;
    }, { searchTerms, tableElement, rowElement, cellElement });
}

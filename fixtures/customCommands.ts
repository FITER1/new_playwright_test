import { Page, Locator, Download } from '@playwright/test';

// TODO Refactor these two tab functions for reusability if keeping - ie if this proves to be the fix for flakey hover then tab.
export async function hoverThenClickAndOpenNewTab(startingPage: Page, locatorToHover: string, locatorToClick: string, switchToNewTab): Promise<Page> {

    const [newlyOpenedPage] = await Promise.all([
        // When handling tabs we need to first set up a listener before clicking something opens the new tab
        startingPage.context().waitForEvent('page'),
        await startingPage.locator(locatorToHover).hover(),
        // Then we do the click, and have the listener return the captured result (enabled by line above)
        await startingPage.locator(locatorToClick).click(),
    ]);
    // Now wait for new tab to load after clicking.
    await newlyOpenedPage.waitForLoadState();

    // Switch focus to the new tab if flagged to
    if (switchToNewTab) {
        await newlyOpenedPage.bringToFront();
        // TODO Consider adding flag to support this or a function to close page by something like its title -
        // await startingPage.close();
        return newlyOpenedPage;
    } else {
        // TODO review if this option is needed - we likely always want to switch to the new tab.
        return startingPage;
    }
}

// A mixin or other style should be considered as fixing actions to a single page when they hop several is likely to lead to errors and difficult triage.
// Note: This function returns a reference to the newly opened page so subsequent actions can be performed safely.
export async function clickAndOpenNewTab(startingPage: Page, locatorToClick: Locator, switchToNewTab): Promise<Page> {
    const [newlyOpenedPage] = await Promise.all([
        // When handling tabs we need to first set up a listener before clicking something opens the new tab
        startingPage.context().waitForEvent('page'),
        // Then we do the click, and have the listener return the captured result (enabled by line above)
        await locatorToClick.click(),
    ]);
    // Now wait for new tab to load after clicking.
    await newlyOpenedPage.waitForLoadState();

    // Switch focus to the new tab if flagged to
    if (switchToNewTab) {
        await newlyOpenedPage.bringToFront();
        // TODO Consider adding flag to support this or a function to close page by something like its title -
        // await startingPage.close();
        return newlyOpenedPage;
    } else {
        // TODO review if this option is needed - we likely always want to switch to the new tab.
        return startingPage;
    }
}

// Note: for 'locatorToClick' give the element that triggers the download eg 'invoice download link'.
export async function doADownload(currentPage: Page, locatorToClick: Locator): Promise<Download>{
    // Note: Special download listening code required here.
    const downloadPromise = currentPage.waitForEvent('download'); //setup the download listener
    await locatorToClick.click(); // start download
    return await downloadPromise; // catch the download (listener waiting) and send the result back to the test
}

// Note: for 'locatorToClick' give the element that triggers the upload eg 'file upload button'.
export async function doSingleFileUpload(currentPage: Page, locatorToClick: Locator, filePath: string): Promise<Page>{
    // Note: Special upload listening code required here.
    const fileChooserPromise = currentPage.waitForEvent('filechooser'); //setup the upload listener
    await locatorToClick.click(); // start upload
    const fileChooser = await fileChooserPromise; // catch the upload (listener waiting) so we can do the next step
    await fileChooser.setFiles(filePath); // add filePath to the upload process
    return currentPage;
}


export async function sortAndVerifyTableByDueDate(page: Page) {
    // Using the class .sortable combined with the text 'Due Date' to locate the header
    const dueDateHeaderSelector = 'th.sortable:has-text("Due Date")';

    // Click on the 'Due Date' header to sort the table. Click it twice (the way cpj is implemented)
    await page.click(dueDateHeaderSelector);
    await page.click(dueDateHeaderSelector);

    // Retrieve all the dates from the 'Due Date' column
    const dates = await page.$$eval('table.resultsTable tr td:nth-child(1)', elements =>
        elements.map(element => new Date(element.textContent?.trim() ?? '').getTime())
    );

    console.log("data in table"+dates);

    // Check if dates are in descending order
    for (let i = 0; i < dates.length - 1; i++) {
        if (dates[i] < dates[i + 1]) {
            throw new Error('Table is not sorted in descending order by Due Date');
        }
    }

    // If no error was thrown, the table is sorted correctly
    console.log('Table sorted correctly by Due Date in descending order');
}



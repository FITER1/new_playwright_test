import { test, Download, TestInfo } from "@playwright/test";

// Note: currently Playwright html reporter does not support the use of line spacing
// For example, '\n' and '<br>' will be interpreted as literal text and displayed in a continuous line.
export function addReportAnnotation(label: string, description: string) {
    test.info().annotations.push(({
        type: label,
        description: description,
    }));
}

export function getDataObjectDetailsForLogging(dataObject: Object): string {
    let prettyString = "";
    for (const [key, value] of Object.entries(dataObject)) {
        prettyString += `\t${key}: ${value}\n`;
    }
    return prettyString;
}

/* Note: this takes
    1. the output that comes from download like this pattern:
            const downloadPromise = this.page.waitForEvent('download');
            const download = await downloadPromise;  <---- THIS output
   2. testInfo that comes from the test using this
 */
export async function attachDownloadToReport(downloadDetails: Download, testInfo: TestInfo) {
    await test.step('Attaching downloaded file to this report', async () => {
        const tempPath = await downloadDetails.path();
        // NOTE: Playwright does not seem to support downloading as PDF, and does not rename the actual file underneath the report link
        await testInfo.attach(downloadDetails.suggestedFilename(), { path: tempPath, contentType: 'application/pdf' });
    });
}

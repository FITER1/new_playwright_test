import { Download, expect } from "@playwright/test";
import * as Fs from "fs/promises";
import * as path from "path";
import { test } from "./basePage";

export async function verifyFileSizeIsGreaterThan(downloadDetails: Download, sizeInBytes: number) {
    await test.step(`VERIFY: downloaded file is greater than ${sizeInBytes} bytes`, async () => {
        const tempPath = await downloadDetails.path();
        const stats = await Fs.stat(tempPath);
        console.log(`Downloaded file is of size: ${stats.size} bytes`);
        expect(stats.size, `File size should be greater or equal to: ${sizeInBytes}, but got: ${stats.size}`)
            .toBeGreaterThanOrEqual(sizeInBytes);
    });
}

// TODO Not strictly a validation but used in handling files - consider separate fixture or renaming this one?
export function getFileNameFromPath(filepath: string): string {
    const parsedPath = path.parse(filepath);
    return parsedPath.name + parsedPath.ext;
}
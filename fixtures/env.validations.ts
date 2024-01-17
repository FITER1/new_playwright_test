import { test } from "./basePage";

export async function getAndCheckUri(envPointer): Promise<string> {
    return test.step(`Checking for valid URL in environment variable: ${envPointer}`, () => {
        console.log(`Checking for valid URL in environment variable: ${envPointer}`);
        // Note: no async needed inside here, but test.step requires an async function as it returns a promise.
        const urlText = eval(`process.env.${envPointer}`);  // <--- get the text from process.env
        console.log(`Found URL: ${urlText}`);

        if (urlText === undefined || urlText === 0) {
            throw Error(`Missing environment URL for: ${envPointer}`);
        }

        if (!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(String(urlText))) {
            throw Error(`Invalid environment URL found for: ${envPointer} \t found value: ${urlText}`);
        }
        return urlText;
    });
}

export async function getAndCheckEnvVariable(envPointer): Promise<string> {
    return test.step(`Checking for available environment variable: ${envPointer}`, () => {
        // Note: no async needed inside here, but test.step requires an async function as it returns a promise.
        const envValue = eval(`process.env.${envPointer}`);  // <--- get the text from envPointer eg process.env.CPJBYPASS_TOKEN

        if (envValue === undefined || envValue === 0) {
            throw Error(`Missing environment variable for: ${envPointer}`);
        }
        return envValue;
    });
}
 
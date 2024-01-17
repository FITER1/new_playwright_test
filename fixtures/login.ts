import { config } from "dotenv";

// Load .env filed
config();

// This login is for fineract
export function getMifosCredentials() {
    const username = process.env.username;
    const password = process.env.password;

    if (!username || !password) {
        throw new Error('Username and password must be provided in the .env file');
    }
    return { username, password };
}



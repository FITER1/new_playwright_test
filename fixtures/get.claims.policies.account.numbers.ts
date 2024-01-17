import { config } from "dotenv";

// Load .env filed
config();

// This will retrieve the Statutory claim number from the .env file
export function getStatutoryClaimNumber() {
    const statutoryClaimNumber = process.env.statutoryClaimNumber;

    if (!statutoryClaimNumber) {
        throw new Error('Statutory claim number must be provided in the .env file');
    }
    return statutoryClaimNumber;
}

// This will retrieve the Damages claim number from the .env file
export function getDamagesClaimNumber() {
    const damagesClaimNumber = process.env.damagesClaimNumber;

    if (!damagesClaimNumber) {
        throw new Error('Damages claim number must be provided in the .env file');
    }
    return damagesClaimNumber;
}

// This will retrieve the Policy number from the .env file
export function getPolicyNumber() {
    const policyNumber = process.env.policyNumber;

    if (!policyNumber) {
        throw new Error('Policy number must be provided in the .env file');
    }
    return policyNumber;
}

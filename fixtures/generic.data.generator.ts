import { faker } from '@faker-js/faker';
import { config } from 'dotenv';

config();

export function randomText(min: number, max: number): string {
    return faker.word.words({ count: { min: min, max: max } });
}

export function generateNumber(min: number, max: number): string {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString();
}
export function generateMoneyAmount(min: number, max: number): string {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(num);
}

// An array of bsbNumbers
const abnNumbers = [
    "89665433876",
    "53480942105",
    "70979869420",
    "95160321299",
    "73227669018",
    "24664888055",
    "98611557549",
    "93875186014",
    "46142417676",
];
const bsbNumbers = [
    "062-000",
    "012-003",
    "082-001",
    "032-000",
    "182-222",
    "484-799",
];
const statClaimNumbers = [
//S23BV043962
"S23GD057598",
];

// Function to return a random ABN  from the array
export function getRandomABNNumber(): string {
    const randomIndex = Math.floor(Math.random() * abnNumbers.length);
    return abnNumbers[randomIndex];
}
// Function to select a statutory claim number
export function getStatClaimNumber(): string {
    const randomIndex = Math.floor(Math.random() * statClaimNumbers.length);
    return statClaimNumbers[randomIndex];
}

// Function to return a random BSB  from the array
export function getRandomBSBNumber(): string {
    const randomIndex = Math.floor(Math.random() * bsbNumbers.length);
    return bsbNumbers[randomIndex];
}

export function getProviderConnectDetailsFromEnv() {
    const providerConnectAccount = process.env.providerAccountNumber;
    const providerAbn = process.env.providerAbn;
    const providerRemittanceRef = process.env.providerRemittanceRef;
    if (!providerConnectAccount || !providerAbn || !providerRemittanceRef) {
        throw new Error('no data in the .env file');
    }


    return { providerConnectAccount, providerAbn, providerRemittanceRef };
}
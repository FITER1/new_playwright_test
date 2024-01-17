interface AddressData {
    addressLine1: string; // Street No, Name, and shortened type eg 1 Albert St
    streetNo: string;
    streetName: string; // STREET NAME ONLY  eg Albert
    streetType: "STREET" | "ROAD"; // Note: add options here as they are added to the qldAddresses list
    suburb: string;
    state: 'Queensland'
    postCode: string;
    country: string;
}

// An array of some address data for Queensland
const qldAddresses: AddressData[] = [
    {
        addressLine1: '116 Queen ST',
        streetNo: "116",
        streetName: "Queen",
        streetType: "STREET",
        suburb: "Brisbane City",
        state: "Queensland",
        postCode: "4000",
        country: "Australia",
    },
    {
        addressLine1: "18 Racecourse RD",
        streetNo: "18",
        streetName: "Racecourse",
        streetType: "ROAD",
        suburb: "Hamilton",
        state: "Queensland",
        postCode: "4007",
        country: "Australia",
    },
    {
        addressLine1: "280 Adelaide ST",
        streetNo: "280",
        streetName: "Adelaide",
        streetType: "STREET",
        suburb: "Brisbane City",
        state: "Queensland",
        postCode: "4000",
        country: "Australia",
    },
    {
        addressLine1: "941B Sandgate RD",
        streetNo: "941B",
        streetName: "Sandgate",
        streetType: "ROAD",
        suburb: "Nundah",
        state: "Queensland",
        postCode: "4012",
        country: "Australia",
    },
    {
        addressLine1: "31 Hope ST",
        streetNo: "31",
        streetName: "Hope",
        streetType: "STREET",
        suburb: "Spring Hill",
        state: "Queensland",
        postCode: "4000",
        country: "Australia",
    },
];

// Special Address for CPJ Claims Tests - TODO Confirm purpose with @Chermaine - helps avoid address search popup?
export const specialCpjClaimAddress: AddressData = {
    addressLine1: "38 Headfort ST",
    streetNo: "38",
    streetName: "Headfort",
    streetType: "STREET",
    suburb: "Greenslopes",
    state: "Queensland",
    postCode: "4120",
    country: "Australia",
};

export function generateAddress(): AddressData {
// Pick a random address from the array
    return qldAddresses[Math.floor(Math.random() * qldAddresses.length)];
}
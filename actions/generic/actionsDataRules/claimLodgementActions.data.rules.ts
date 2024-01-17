export interface FillWorkerTabDataRules {
    readonly claimInitiatorCode: 'Employer only' | 'Joint (Employer and Worker)' | 'Worker only'; // Add dropdown options when they are needed by tests.
    readonly reasonForClaim: 'Medical expenses only' | 'Time off work and medical expenses' | 'Other' | 'Report purpose only (Reportable injuries)'; // Add dropdown options when they are needed by tests.
    readonly title: 'Dr' | 'Miss' | 'Mr'; // Add dropdown options when they are needed by tests.
    readonly firstName: string; // randomText(1, 1);
    readonly surname: string; // randomText(1, 1);
    readonly dateOfBirth: string; // personalData.dateOfBirth;
    readonly gender: 'Female' | 'Male' | 'Unspecified'; // Add dropdown options when they are needed by tests.
    readonly mobileNumber: string; // '04' + personalData.phoneNum;
    readonly phoneNumber: string; // personalData.phoneNum;
    readonly email: string; // personalData.firstName + '@mailinator.com';
    readonly streetNumber: string; // address.streetNo;
    readonly streetName: string; // address.street;
    readonly streetType: "STREET" | "ROAD"; // Note: add options here as they are used by tests, sync with fixtures > interface AddressData.
    readonly suburb: string; // address.suburb;
    readonly postCode: string; // address.postCode;
    readonly bsb: string; // getRandomBSBNumber();
    readonly accountName: string; // randomText(1, 1) + ' ' + randomText(1, 1);
    readonly accountNumber: string; // generateNumber(100000000, 999999999);
}

export interface FillInjuryTabDataRules {
    readonly incidentDate: string; // generateDateTimeOrDate(10, 'days', 'past', 'datetime');
    readonly natureOfInjury: string; // randomText(3, 7);
    readonly partOfInjuredBody: string; // randomText(2, 5);
    readonly howInjuryHappened: string; // randomText(5, 10);
    readonly placeOfInjury: 'Construction site' | 'Normal Workplace' | 'Other private workplace'; // Add dropdown options when they are needed by tests.
    readonly fullAddress: string; // address.streetNo + ' ' + address.street + ' ' +  address.suburb + ' ' + address.state + ' ' + address.postCode;
    readonly streetNumber: string; // address.streetNo;
    readonly streetName: string; // address.street;
    readonly streetType: "STREET" | "ROAD"; // Note: add options here as they are used by tests, sync with fixtures > interface AddressData.
    readonly postCode: string; // address.postCode;
    readonly suburb: string; // address.suburb;
    readonly toWhomInjuryWasReported: string; // randomText(1, 1) + ' ' + randomText(1, 1);
    readonly nameOfDoctor: string; // "Dr." + ' ' + randomText(1, 1) + ' ' + randomText(1, 1);
    readonly whenEmployerWasAdvised: string; // generateDateTimeOrDate(9, 'days', 'past', 'date');
    readonly diagnosis: string; // randomText(2, 7);
    readonly examDate: string; // generateDateTimeOrDate(7, 'days', 'past');
    readonly treatmentFromDate: string; // generateDateTimeOrDate(6, 'days', 'past', 'date');
    readonly treatmentToDate: string; // generateDateTimeOrDate(4, 'days', 'past', 'date');
    readonly treatmentRequired: string; // randomText(5, 10);
}

export interface FillEmploymentTabDataRules {
    readonly tradingName: string; // randomText(3, 5);
    readonly legalName: string; // randomText(3, 5);
    readonly fullAddress: string; // address.streetNo + ' ' + address.street + ' ' +  address.suburb + ' ' + address.state + ' ' + address.postCode;
    readonly streetNumber: string; // address.streetNo;
    readonly streetName: string; // address.street;
    readonly streetType: "STREET" | "ROAD"; // Note: add options here as they are used by tests, sync with fixtures > interface AddressData.
    readonly suburb: string; // address.suburb;
    readonly postCode: string; // address.postCode;
    readonly workPhoneNumber: string; // personalData.phoneNum;
    readonly email: string; // personalData.firstName + '@mailinator.com';
    readonly workersOccupation: string; // randomText(1, 5);
    readonly whoWasWorker: 'Community Services' | 'Contractor' | 'Director' | 'Student'; // Add dropdown options when they are needed by tests.
    readonly didInjuryHappen: '1. Working at your normal workplace' | '11. At work - working from home' | '2. In a road traffic accident while working'; // Add dropdown options when they are needed by tests.
}

// Use this one when calling registerForProviderConnect.actions > `registerForProviderConnect` as it groups up the child (sub) actions data needed.
export interface LodgeNewClaimsAllDataRules {
    readonly fillWorkerDetailsTab: FillWorkerTabDataRules;
    readonly fillInjuryDetailsTab: FillInjuryTabDataRules;
    readonly fillEmploymentTab: FillEmploymentTabDataRules;
}

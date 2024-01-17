export interface NewBusinessWagesEstimateDataRules {
    readonly employmentStartDate: string; // generateDateTimeOrDate(30, 'days', 'past', 'date');
    readonly totalPaygGross: string; // generateMoneyAmount(100000, 999999);
    readonly noOfQldWorkers: '0' | '1-5' | '6-20' | '21-50' | '50 plus'; // All the options are covered for the 'noOfQldWorkers' currently.
    readonly noOfUnpaidInterns: '0' | '1' | '2-5' | '5 plus' // All the options are covered for the 'noOfUnpaidInterns' currently.
    readonly totalEstimateAmount: string; // generateMoneyAmount(1000, 9999);
}

export interface NewBusinessActivityDataRules {
    readonly businessDescription: string; //  randomText(5, 10);
    readonly businessUndertakingButton: string; //  'No';
    readonly wicSearchText: string; //'Sewerage & Reticulation Works';
}

export interface NewBusinessDetailsDataRules {
    readonly typeOfEntity: 'Body corporate' | 'Company'; // Add dropdown options when they are needed by tests.
    readonly abn: string;
}

export interface NewBusinessContactDetailsDataRules {
    readonly title: "Miss" | "Mr"; // Add dropdown options when they are needed by tests.
    readonly fullName: string; // personalData.firstName + ' ' + personalData.lastName;
    readonly position: string; // randomText(1, 5);
    readonly phoneNumber: string; // personalData.phoneNum;
    readonly fullAddress: string; // address.postCode;
    readonly email: string; // address.postCode;
    readonly addressLine1: string; // eg "38 Headfort ST"
    readonly suburb: string; // address.suburb;
    readonly postCode: string; // address.postCode;
}

// Use this one when calling registerNewBusinessOridinaryGovernment.actions > `registerNewBusinessGovernment` as it groups up the child (sub) actions data needed.
export interface RegisterBusinessOrdinaryGovAllDataRules {
    readonly newBusinessWagesEstimate: NewBusinessWagesEstimateDataRules;
    readonly newBusinessActivity: NewBusinessActivityDataRules;
    readonly newBusinessDetails: NewBusinessDetailsDataRules;
    readonly newBusinessContactDetails: NewBusinessContactDetailsDataRules;
}

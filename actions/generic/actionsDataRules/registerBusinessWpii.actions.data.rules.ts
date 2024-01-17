export interface WpiiInsuredPersonDataRules {
    readonly insuredPerson: 'Accountant / solicitor' | 'Insurance broker' | 'Word of mouth / friend'; // Add dropdown options when they are needed by tests.
    readonly insuredFullName: string; // // personalData.firstName + ' ' + personalData.lastName;
    readonly businessDescription: string; // // randomText(1, 2);
    readonly declaredEarnings: string; // // generateMoneyAmount(100000, 999999);
    readonly abn: string; // // getRandomABNNumber();
}

export interface WpiiContactInformationDataRules {
    readonly title: 'Dr' | 'Miss' | 'Mr'; // Add dropdown options when they are needed by tests.
    readonly postCode: string; // address.postCode;
    readonly phoneNumber: string; // personalData.phoneNum;
    readonly accountType: 'Savings' | 'Cheque'; // Add dropdown options when they are needed by tests.
    readonly accountName: string; // randomText(1, 2);
    readonly accountNumber: string; // generateNumber(100000000, 99999999);
    readonly addressLine1: string; // eg ''38 Headfort ST''
    readonly dateOfBirth: string; // generateDateTimeOrDate(14, 'years', 'past', 'date');
    readonly email: string; // personalData.firstName + '@test.com',
    readonly abn: string; // getRandomABNNumber(),
    readonly bsbNumber: string; //getRandomBSBNumber()
}

// Use this one when calling registerBusinessWPII.actions > NewBusinessWPIIActions as it groups up the child (sub) actions data needed.
export interface RegisterBusinessWpiiAllDataRules {
    readonly registerWpiiInsured: WpiiInsuredPersonDataRules;
    readonly registerWpiiContactInformation: WpiiContactInformationDataRules;
}
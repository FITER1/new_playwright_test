export interface RegisterNewProviderDataRules {
    readonly abn: string;  //getRandomABNNumber(),
    readonly entityName: string;  //randomText(8, 15),
    readonly typeOfProvider: string;  //randomText(8, 15),
    readonly accountType: 'Savings' | 'Cheque'; // All options for 'accountType' are currently listed here.
    readonly bsbNumber: string;  // getRandomBSBNumber(),
    readonly accountName: string;  // randomText(8, 15),
    readonly accountNumber: string;  // generateNumber(111111111, 999999999),
    readonly practiceManagementSoftware: string;  //randomText(2, 5)
    readonly addressLine1: string; // eg '38 Headfort ST'
    readonly suburb: string;  //address.suburb,
    readonly postCode: string; // //address.postCode,
    readonly mailingAddressLine1: string; // eg '38 Headfort ST'
    readonly mailingSuburb: string; //address.suburb,
    readonly mailingPostCode: string; //address.postCode,
    readonly firstName: string; //personalData.firstName,
    readonly lastName: string; // personalData.lastName,
    readonly phoneNumber: string; //personalData.phoneNum,
    readonly username: string; //personalData.firstName + '-' + personalData.lastName + '-' + randomText(1, 1),
    readonly email: string; //personalData.firstName + '@workcoverqld.com.au',
}

export interface RegisterHouseholdWorkerTermsAndConditionsDataRules {
    readonly surveyAnswer: 'Accountant / solicitor' | 'Social media'; // Add dropdown options when they are needed by tests.
}

export interface RegisterHouseholdWorkerPolicyDetailsDataRules {
    readonly title: 'Dr' | 'Miss' | 'Mr'; // Add dropdown options when they are needed by tests.
    readonly fullName: string; // personalData.firstName + ' ' + personalData.lastName;
    readonly addressLine1: string; // eg "38 Headfort ST"
    readonly postCode: string; // address.postCode;
    readonly phoneNumber: string; // personalData.phoneNum;
    readonly email: string; //personalData.firstName + "@workcoverqld.com.au",

}

// Use this one when calling registerForProviderConnect.actions > `registerForProviderConnect` as it groups up the child (sub) actions data needed.
export interface RegisterNewBusinessHWWAllDataRules {
    readonly registerHhwTermsAndConditions: RegisterHouseholdWorkerTermsAndConditionsDataRules;
    readonly registerHhwPolicyDetailsTab: RegisterHouseholdWorkerPolicyDetailsDataRules;
}

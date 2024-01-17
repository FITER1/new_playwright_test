export interface ProviderConnectValidationTabDataRules {
    readonly providerAbn: string; //; //getProviderConnectDetailsFromEnv(),
    readonly providerRemittanceRef: string; //; //getProviderConnectDetailsFromEnv()(8, 15),
    readonly providerConnectAccount: string; //getProviderConnectDetailsFromEnv,
}

export interface ProviderConnectDetailsDataRules {
    readonly firstName: string; //personalData.firstName,
    readonly lastName: string; // personalData.lastName,
    readonly faxNumber: string; //personalData.phoneNum,
    readonly phoneNumber: string; //personalData.phoneNum,
    readonly mobileNumber: string; //personalData.phoneNum,
    readonly username: string; //personalData.firstName + '-' + personalData.lastName + '-' + randomText(1, 1),
    readonly email: string; //personalData.firstName + '@workcoverqld.com.au',
}

export interface ProviderConnectNotificationDataRules {
    readonly remittanceNotificationOptionDropDown: 'Do not send me any notification' | 'Send a copy of my new remittances to my email address' | 'Fax me a copy of new remittances to my fax number'; // All options for 'remittanceNotificationOptionDropDown' are currently covered.
}

export interface ProviderConnectSecurityTabDataRules {
    readonly password: string;
    readonly confirmPassword: string;
}

// Use this one when calling registerForProviderConnect.actions > `registerForProviderConnect` as it groups up the child (sub) actions data needed.
export interface RegisterForProviderConnectAllDataRules {
    readonly validationTabData: ProviderConnectValidationTabDataRules;
    readonly providerDetailsData: ProviderConnectDetailsDataRules;
    readonly notificationData: ProviderConnectNotificationDataRules;
    readonly securityTabData: ProviderConnectSecurityTabDataRules;
}

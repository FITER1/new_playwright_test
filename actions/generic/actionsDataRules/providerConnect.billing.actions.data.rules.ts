export interface ProviderConnectCreateInvoiceDataRules {
    readonly invoiceNumber: string; // randomText(1, 1) + '-' + generateNumber(100, 999);
    readonly invoiceDate: string; // generateDateTimeOrDate(1, "days", "past", 'date');
    readonly claimantName: string; // locators.createInvoice.onlineServices.injuredWorkerName;
    readonly serviceDate: string; // generateDateTimeOrDate(1, "days", "past", 'date');
    readonly providerName: string; // locators.createInvoice.onlineServices.practitionerName;
    readonly itemNumber: string; // "300210";
    readonly comments: string; // randomText(5, 7);
    readonly units: string; // '1';
    readonly gst: string; // '3.10';
    readonly amount: string; // '34.10';
}


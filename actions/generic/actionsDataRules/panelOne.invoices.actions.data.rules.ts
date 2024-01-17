export interface PanelOneCreateInvoiceDataRules {
    readonly invoiceNumber: string; // example:  randomText(1, 1) + '-' + generateNumber(100, 999);
    readonly invoiceDate: string; // example:  generateDateTimeOrDate(1, "days", "past", 'date');
    readonly claimSearchText: string; // example:  "Billy";
    readonly itemNumber: string; // example:  "*1041";
    readonly serviceDate: string; // example:  generateDateTimeOrDate(1, "days", "past", 'date');
    readonly units: string; // example: '1';
    readonly gst: string; // example: '9.90';
    readonly amount: string; // example:  '100';
    readonly comments: string;// example:  randomText(5, 9);
}

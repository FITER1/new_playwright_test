import {
    PanelOneCreateInvoiceDataRules
} from "../../../actions/ols/actionsDataRules/panelOne.invoices.actions.data.rules";
import { generateDateTimeOrDate } from "../../../fixtures/date.data.generator";
import { generateNumber, randomText } from "../../../fixtures/generic.data.generator";

export default class PanelOneTestData {

    // Used for the 'create invoice' action
    static readonly defaultCreateInvoiceActionData: PanelOneCreateInvoiceDataRules = {
        invoiceNumber: randomText(1, 1) + '-' + generateNumber(100, 999),
        invoiceDate: generateDateTimeOrDate(1, "days", "past", 'date'),
        claimSearchText: "Billy",
        itemNumber: "*1041",
        serviceDate: generateDateTimeOrDate(1, "days", "past", 'date'),
        units: '1',
        gst: '9.90',
        amount: '100',
        comments: randomText(5, 9),
    };

    // Applies to initial panel one page
    static readonly panelOneStartPageTextArray = ['My work'];

    // Applies to panel one page after successful create invoice action
    static readonly panelOneTextArraySuccess = [
        'Save successful',
        'Invoice confirmation',
        'Your reference number is ',
    ];

}

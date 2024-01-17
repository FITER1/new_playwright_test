import { test as base } from '@playwright/test';
import MifosHomePage from '../pageObjects/pages/ols/mifosHomePage';

export const test = base.extend<{

    /**
     * Only the pages with direct URI access are included here, This reduces confusion for what a test can reliably call on to start.
     * TODO We should consider if we want to wrap the start of all OLS | CPJ | DigiReg tests with a BaseTest approach, or a BasePage approach
     * Downsides of both need to be carefully considered-
     * Base Page means we have to be very careful about conflicts with beforeEach as page references for tabs etc gets messed up.
     * Base Page would also mean duplicating the code or function reference for the first repeatable steps for each page,
     * BaseTest allows us to write it exactly once and is more clear in the lifecycle as to when it is applied.
     */


    // --------------------- OLS RELATED PAGES ---------------------//
    // Online Services General (not app specific) Pages
    mifosHomePage: MifosHomePage;

}>({

    // --------------------- OLS RELATED PAGES ---------------------//
    mifosHomePage: async ({ page }, use) => {
        await use(new MifosHomePage(page));
    },

});

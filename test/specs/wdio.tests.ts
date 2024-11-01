import {HomePage} from "../pageobjects/home.page.ts";
import {DocsSponsorPage} from "../pageobjects/docsSponsorPage.ts";
import {DocsApiPage} from "../pageobjects/docs.api.page.ts";
import {open} from "../pageobjects/base.page.ts";

describe('WebdriverIO web tests', () => {
    it('should open main pages', async () => {
        const homePage = await open(HomePage);
        expect(await homePage.isPageLoaded()).toBe(true);
        const docsApiPage = await open(DocsApiPage);
        expect(await docsApiPage.isPageLoaded()).toBe(true);
        const docsSponsorPage = await open(DocsSponsorPage);
        expect(await docsSponsorPage.isPageLoaded()).toBe(true);
    })
})
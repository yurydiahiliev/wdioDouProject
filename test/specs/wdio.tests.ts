import {HomePage} from "../pageobjects/home.page.ts";
import {DocsSponsorPage} from "../pageobjects/docsSponsorPage.ts";
import {DocsApiPage} from "../pageobjects/docs.api.page.ts";
import {open} from "../pageobjects/base.page.ts";
import {assert} from "chai";

describe('WebdriverIO web tests', () => {
    it('should open main pages', async () => {
        const homePage = await open(HomePage);
        assert.strictEqual(await homePage.isPageLoaded(), true);
        const docsApiPage = await open(DocsApiPage);
        assert.strictEqual(await docsApiPage.isPageLoaded(), true);
        const docsSponsorPage = await open(DocsSponsorPage);
        assert.strictEqual(await docsSponsorPage.isPageLoaded(), true);
    })
})
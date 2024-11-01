import {browser} from "@wdio/globals";

export abstract class BasePage {

    abstract pageLoadSelector: string;

    private static baseUrl: string = 'https://webdriver.io';

    static async open<T extends BasePage>(pageClass: new () => T): Promise<T> {
        const path = Reflect.getMetadata('path', pageClass);

        if (!path) {
            throw new Error(`No @Path annotation found on ${pageClass.name}`);
        }

        // Navigate to the URL and create the page instance
        await browser.url(`${this.baseUrl}${path}`);
        const pageInstance = new pageClass(); // Instantiate the page class

        return pageInstance;
    }

    async isPageLoaded(): Promise<boolean> {
        return await $(this.pageLoadSelector).isDisplayed();
    }
}

export async function open<T extends BasePage>(pageClass: new () => T): Promise<T> {
    return BasePage.open(pageClass);
}
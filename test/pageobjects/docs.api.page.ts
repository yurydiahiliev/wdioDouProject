import {BasePage} from "./base.page.ts";
import {Path} from "../utils/path.decorator.ts";

@Path('/docs/api')
export class DocsApiPage extends BasePage {
    pageLoadSelector: string = '//h1[text()="Introduction"]';

}
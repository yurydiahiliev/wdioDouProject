import {BasePage} from "./base.page.ts";
import {Path} from "../utils/path.decorator.ts";

@Path('/docs/sponsor')
export class DocsSponsorPage extends BasePage {
    pageLoadSelector: string = '//h2[@id=\'how-to-sponsor\']';
}
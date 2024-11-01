import {BasePage} from "./base.page.ts";
import {Path} from "../utils/path.decorator.ts";

@Path("/")
export class HomePage extends BasePage {
    pageLoadSelector: string = '.hero__subtitle';
}
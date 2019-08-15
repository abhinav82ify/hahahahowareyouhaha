import { by, element } from 'protractor';

export class HeaderPo {
    
    get logo() {
        return element(by.id('logo'));
    }

    get navbox() {
        return element(by.id('navbox'));
    }

    get logout() {
        return element(by.id('logout'));
    }
}
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url = '/') {
    return browser.get(url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}

import { browser, by, element } from 'protractor';

export class AppPage {
  async clickOnNewRefButton() {
    await element(by.css('button.primary')).click();
  }
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('header span')).getText() as Promise<string>;
  }
}

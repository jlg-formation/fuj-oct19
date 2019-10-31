import { browser, by, element } from 'protractor';

export class SuccessPage {
  async clickOnHomeButton() {
    await element(by.css('button')).click();
  }

}

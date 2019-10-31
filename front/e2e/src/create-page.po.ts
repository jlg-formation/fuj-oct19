import { browser, by, element } from 'protractor';

export class CreatePage {


  async fillForm(form: { label: string; category: string; quantity: string; price: string; }) {
    const labelInput = element(by.css('input[formcontrolname=label]'));
    await labelInput.clear();
    await labelInput.sendKeys(form.label);
  }

  async clickOnAddButton() {
    await element(by.css('button.primary')).click();
  }
}

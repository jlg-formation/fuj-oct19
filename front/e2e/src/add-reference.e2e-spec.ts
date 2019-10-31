import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { create } from 'domain';
import { CreatePage } from './create-page.po';
import { SuccessPage } from './success-page.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let createPage: CreatePage;
  let successPage: SuccessPage;

  beforeEach(() => {
    page = new AppPage();
    createPage = new CreatePage();
    successPage = new SuccessPage();
  });

  it('should add a reference in mongodb', async () => {
    await page.navigateTo();
    await page.clickOnNewRefButton();

    await createPage.fillForm({
      label: 'Pelle ' + Math.random(),
      category: 'Mes outils',
      quantity: '12',
      price: '3.40'
    });

    await createPage.clickOnAddButton();

    await successPage.clickOnHomeButton();

    expect(page.getTitleText()).toEqual('LavalStore');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

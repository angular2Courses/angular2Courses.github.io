import { IskatelPage } from './app.po';

describe('iskatel App', function() {
  let page: IskatelPage;

  beforeEach(() => {
    page = new IskatelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

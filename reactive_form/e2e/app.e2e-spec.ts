import { Lesson4FormPage } from './app.po';

describe('lesson4-form App', function() {
  let page: Lesson4FormPage;

  beforeEach(() => {
    page = new Lesson4FormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

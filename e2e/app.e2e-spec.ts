import { AppPage } from './app.po';

describe('quix App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to page', () => {
    page.navigateTo();
  });
});

import { AppPage } from './app.po';

describe('team-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Welcome to the Gallery Home Page');
  });
});

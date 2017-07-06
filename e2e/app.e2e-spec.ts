import { MitchellProjectAppPage } from './app.po';

describe('mitchell-project-app App', () => {
  let page: MitchellProjectAppPage;

  beforeEach(() => {
    page = new MitchellProjectAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

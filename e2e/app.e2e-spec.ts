import { DropdownTTPage } from './app.po';

describe('dropdown-tt App', function() {
  let page: DropdownTTPage;

  beforeEach(() => {
    page = new DropdownTTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

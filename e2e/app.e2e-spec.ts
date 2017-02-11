import { CardSmilesPage } from './app.po';

describe('card-smiles App', function() {
  let page: CardSmilesPage;

  beforeEach(() => {
    page = new CardSmilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

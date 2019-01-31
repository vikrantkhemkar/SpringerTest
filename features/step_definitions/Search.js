const config = require('../helpers/config');
const pageObjects = require('../helpers/pageObjects');

When(/^I launch Springer home page$/, async function(){
   await this.browser.get(config.baseUrl);
});
When(/^I search with "(.*)" in search text box$/, async function(searchTerm){
    await pageObjects.searchOperation(searchTerm);
});

Then(/^I can see the search result$/, async function(){
    const result = await pageObjects.verifySearchResult();
    console.log(result);
});
When(/^I open the first record from result$/, async function(){
    await pageObjects.openArticle();
});
Then(/^I see the details of that article$/, async function(){
    const details= await pageObjects.verifyArticleDetails();
});
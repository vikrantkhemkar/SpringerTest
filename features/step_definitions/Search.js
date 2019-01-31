const { Given, Then, When} = require('cucumber');
const config = require('../helpers/config');
const pageObjects = require('../support/pageObject');
const should = require('chai').should();

When(/^I launch Springer home page$/, async function(){
   await this.browser.get(config.baseUrl);
});
When(/^I search with "(.*)" in search text box$/, async function(searchTerm){
    await pageObjects.searchOperation(this.browser,searchTerm);
});

Then(/^I can see the search result$/, async function(){
    const result = await pageObjects.verifySearchResult(this.browser);
    result.should.be.a('object');    
});
When(/^I open the first record from result$/, async function(){
    await pageObjects.openArticle(this.browser);
});
Then(/^I see the details of that article$/, async function(){
    const details= await pageObjects.verifyArticleDetails(this.browser);
    details.should.be.a('string');
    details.should.contain('Asset Management');
    details.should.contain('Portfolio Construction, Performance and Returns');    
});
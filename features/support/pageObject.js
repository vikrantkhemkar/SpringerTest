const webdriver = require('selenium-webdriver');

module.exports = {
async searchOperation(browser,searchTerm)
{
    const search= await browser.findElement(webdriver.By.name("query"))
    await search.sendKeys(searchTerm) 
    await search.sendKeys(webdriver.Key.ENTER);  
    await new Promise(resolve => setTimeout(resolve, 3000)); 
},
async verifySearchResult(browser){
    return await browser.findElement(webdriver.By.id("results-list"));    
},
async openArticle(browser){
   const articles = await browser.findElements(webdriver.By.className("title" ))
   await articles[1].click();
},
async verifyArticleDetails(browser){    
return await browser.findElement(webdriver.By.css('[data-test=book-title')).getText();    
},
};    
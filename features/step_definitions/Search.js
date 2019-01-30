const { Then, When, Given } = require('cucumber');
const browser = require('../support/SeleniumSetup');
const assert = require('assert');
const config = require('../helpers/config');

When(/^I launch Springer home page$/, async function(){
   await this.browser.get(config.baseUrl);
});
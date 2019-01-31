# SpringerTest
This is task-4 of a Springer assignment. To run the feature test you need to do following setup-

    Node v8.10.0 and NPM 5.6.
        nvm install 8.10.0
        nvm alias default 8.10.0
        npm install -g npm@5.6

Verify node and npm installed correctly by running following command
        
        node -v
        
        nvm -v
 
Install latest chrome driver from https://chromedriver.storage.googleapis.com/index.html

Install cucumber and selenium webdriver globally

npm install cucumber

npm install selenium-webdriver

Go SpringerTest folder from command prompt and run

npm install

above command will install all the project dependancies on your machine. If you see any error then please check network and proxy settings.

To run all the test
npm run cucumber

To run the tests which are not marked as @ignore
npm run cucumber -- "--tags=not @ignore"

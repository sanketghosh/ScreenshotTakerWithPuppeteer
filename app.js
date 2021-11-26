const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch();
    const webpage = await browser.newPage();
    await webpage.goto('https://twitter.com/<username>'); //use the url you want


    webpage.setViewport({ width: 1000, height: 1800, deviceScaleFactor: 1 })

    await webpage.screenshot({ path: './images/screenshot.png' }) //use the path you want
    await browser.close();

})();


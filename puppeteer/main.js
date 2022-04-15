const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://opoznai.bg/all/sort:popular_ever');
    //await page.waitForRequest()
    await page

    await browser.close();
})();
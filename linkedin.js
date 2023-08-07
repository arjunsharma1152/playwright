const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F");

  await page.click("#main-content > div > form > p > button");

  await page.waitForTimeout(1000);

  await page.type("#main-content > div > div > form > div.flex.flex-col > div:nth-child(1) > div > div > input", ' <USERNAME> '); // To enter username
  await page.type('#main-content > div > div > form > div.flex.flex-col > div:nth-child(2) > div > div > input', ' <PASSWORD> '); // To enter password

  await page.waitForTimeout(1000);

  await page.click('#main-content > div > div > form > div.flex.justify-between.sign-in-form__footer--full-width > button');

  await page.waitForNavigation();

  await page.waitForTimeout(2000);

  await page.click("div.share-box-feed-entry__closed-share-box.artdeco-card > div.share-box-feed-entry__top-bar > button");

  await page.waitForTimeout(3000);

  await page.$eval("div.ql-editor.ql-blank > p", (paragraph) => {
    paragraph.textContent = 'New inner text for the paragraph.'; //REPLACE IT WITH THE TEXT YOU WANT TO POST
  });

  await page.waitForTimeout(2000);

  await page.click("div.share-creation-state.share-creation-state__share-box-v2.share-creation-state__share-box-v2--redesigned-detours > div.share-creation-state__bottom > div.share-creation-state__footer.justify-flex-end > div > div.share-box_actions > button");

  await browser.close();

})();
const puppeteer = require('puppeteer');

(async () => {
  const browsers = await puppeteer.launch({
    headless: false,
  });

  const page = await browsers.newPage();

  await page.goto('http://technoforte.co.in/');

  page.setViewport({ width: 1662, height: 1080 });

  const pageLink = '.elementor-item';

  await page.waitForSelector(pageLink);

  await page.click(pageLink);
})();

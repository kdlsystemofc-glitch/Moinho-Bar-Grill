const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureFinalProductionScreenshots() {
  const reportsDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const htmlPath = 'file:///' + path.join(__dirname, '..', 'index.html').replace(/\\/g, '/');

  console.log('Loading page for Phase 07 Final Production Capture:', htmlPath);

  // 1. Desktop Hero Screenshot (1440x900 viewport)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(htmlPath, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);

  const desktopHeroPath = path.join(reportsDir, 'final-hero-desktop.png');
  await desktopPage.screenshot({ path: desktopHeroPath, fullPage: false });
  console.log('Saved final desktop hero screenshot:', desktopHeroPath);

  // 2. Desktop Full Page Screenshot (1440x900 full page)
  const desktopFullPath = path.join(reportsDir, 'final-full-desktop.png');
  await desktopPage.screenshot({ path: desktopFullPath, fullPage: true });
  console.log('Saved final desktop full-page screenshot:', desktopFullPath);

  // 3. Mobile Hero Screenshot (390x844 viewport)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(htmlPath, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  const mobileHeroPath = path.join(reportsDir, 'final-hero-mobile.png');
  await mobilePage.screenshot({ path: mobileHeroPath, fullPage: false });
  console.log('Saved final mobile hero screenshot:', mobileHeroPath);

  // 4. Mobile Full Page Screenshot (390x844 full page)
  const mobileFullPath = path.join(reportsDir, 'final-full-mobile.png');
  await mobilePage.screenshot({ path: mobileFullPath, fullPage: true });
  console.log('Saved final mobile full-page screenshot:', mobileFullPath);

  await browser.close();
  console.log('Phase 07 Final Production screenshots captured successfully!');
}

captureFinalProductionScreenshots().catch(err => {
  console.error('Error capturing final production screenshots:', err);
  process.exit(1);
});

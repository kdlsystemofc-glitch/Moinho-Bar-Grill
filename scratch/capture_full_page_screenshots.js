const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureFullPageScreenshots() {
  const reportsDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const htmlPath = 'file:///' + path.join(__dirname, '..', 'index.html').replace(/\\/g, '/');

  console.log('Loading full landing page for Phase 04 Visual QA:', htmlPath);

  // 1. Desktop Viewport Screenshot (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(htmlPath, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);

  const desktopViewPath = path.join(reportsDir, 'full-desktop-view.png');
  await desktopPage.screenshot({ path: desktopViewPath, fullPage: false });
  console.log('Saved desktop viewport screenshot:', desktopViewPath);

  const desktopFullPath = path.join(reportsDir, 'full-desktop.png');
  await desktopPage.screenshot({ path: desktopFullPath, fullPage: true });
  console.log('Saved desktop full-page screenshot:', desktopFullPath);

  // 2. Mobile Viewport Screenshot (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(htmlPath, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  const mobileViewPath = path.join(reportsDir, 'full-mobile-view.png');
  await mobilePage.screenshot({ path: mobileViewPath, fullPage: false });
  console.log('Saved mobile viewport screenshot:', mobileViewPath);

  const mobileFullPath = path.join(reportsDir, 'full-mobile.png');
  await mobilePage.screenshot({ path: mobileFullPath, fullPage: true });
  console.log('Saved mobile full-page screenshot:', mobileFullPath);

  await browser.close();
  console.log('Phase 04 Visual QA screenshots captured successfully!');
}

captureFullPageScreenshots().catch(err => {
  console.error('Error capturing full page screenshots:', err);
  process.exit(1);
});

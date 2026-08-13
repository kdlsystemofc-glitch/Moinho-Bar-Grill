const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureScreenshots() {
  const reportsDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const htmlPath = 'file:///' + path.join(__dirname, '..', 'index.html').replace(/\\/g, '/');

  console.log('Loading page for Phase 03R iteration 2 (R2):', htmlPath);

  // 1. Desktop Screenshot (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(htmlPath, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);

  const desktopPath = path.join(reportsDir, 'hero-desktop-r2.png');
  await desktopPage.screenshot({ path: desktopPath, fullPage: false });
  console.log('Saved desktop screenshot R2:', desktopPath);

  // 2. Mobile Screenshot (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(htmlPath, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  const mobilePath = path.join(reportsDir, 'hero-mobile-r2.png');
  await mobilePage.screenshot({ path: mobilePath, fullPage: false });
  console.log('Saved mobile screenshot R2:', mobilePath);

  await browser.close();
  console.log('Phase 03R Iteration 2 screenshots captured successfully!');
}

captureScreenshots().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});

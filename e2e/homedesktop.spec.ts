import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
})

test.describe('Testing for home desktop', () => {
test('testing for background overlay on desktop', async ({ page }) => {
  await page.goto('http://localhost:3000/');

    const mainContainer = page.locator('.main');

    const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue("background-color")
  })

  console.log(checkingBackgroundColour);
  expect(checkingBackgroundColour).toBe("#b3a5c8")

  })
})

test.describe('Testing for home desktop', () => {
    test('testing for background opacity on desktop', async ({ page }) => {
      await page.goto('http://localhost:3000/');
    
        const mainContainer = page.locator('.main');
    
        const checkingOpacity = await mainContainer.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("opacity")
      })
    
      console.log(checkingOpacity);
      expect(checkingOpacity).toBe("0.2")
    
    })
})
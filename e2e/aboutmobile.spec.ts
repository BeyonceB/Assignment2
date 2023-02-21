import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe('The mobile viewport for background overlay on iPhone XR', () => {
test('Testing for padding on iPhone XR', async ({ page }) => {
    await page.goto('http://localhost:3000/about');

    const mainContainer = page.locator('.box');

    const checkingPadding = await mainContainer.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue("padding")
  })

  console.log(checkingPadding);
  expect(checkingPadding).toBe("40px")

  })
})


test.describe('Testing for home desktop', () => {
  test('testing for margin-top on iPhone XR', async ({ page }) => {
    await page.goto('http://localhost:3000/about');
    
        const mainContainer = page.locator('.box');
        
        const checkingMarginTop = await mainContainer.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("margin-top")
      })
    
      console.log(checkingMarginTop);
      expect(checkingMarginTop).toBe("30px")
    
    })
})
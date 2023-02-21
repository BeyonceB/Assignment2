import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe('Testing for home tablet', () => {
test('testing for padding on tablet', async ({ page }) => {
    await page.goto('http://localhost:3000/about'); 
    
      const mainContainer = page.locator('.box');

      const checkingPadding = await mainContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("padding")
    })
  
    console.log(checkingPadding);
    expect(checkingPadding).toBe("35px")
  
    })
})


test.describe('Testing for home desktop', () => {
  test('testing for margin-top on tablet', async ({ page }) => {
    await page.goto('http://localhost:3000/about');
    
        const mainContainer = page.locator('.box');
    
        const checkingMarginTop = await mainContainer.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("margin-top")
      })
    
      console.log(checkingMarginTop);
      expect(checkingMarginTop).toBe("45px")
    
    })
})
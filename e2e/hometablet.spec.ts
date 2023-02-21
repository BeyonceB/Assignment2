import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe('Testing for home tablet', () => {
test('testing for background overlay on tablet', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const mainContainer = page.locator('.main');

  const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue("background-color")
  })

  console.log(checkingBackgroundColour);
  expect(checkingBackgroundColour).toBe("#a5c8bb")

  })
})


test.describe('Testing for home tablet', () => {
  test('testing for background opacity on tablet', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
      const mainContainer = page.locator('.main');
  
      const checkingOpacity = await mainContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("opacity")
    })
  
    console.log(checkingOpacity);
    expect(checkingOpacity).toBe("0.1")
  
  })
})
import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe('The mobile viewport for background overlay on iPhone XR', () => {
test('Testing for background-overlay on iPhone XR', async ({ page }) => {
  await page.goto('http://localhost:3000/');

    const mainContainer = page.locator('.main::before');

    const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue("background-color")
  })

  console.log(checkingBackgroundColour);
  expect(checkingBackgroundColour).toBe("#312e69")

  })
})


test.describe('Testing for home mobile', () => {
  test('testing for background opacity on iPhone XR', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
    const mainContainer = page.locator('.main::before');
  
    const checkingOpacity = await mainContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("opacity")
    })
  
    console.log(checkingOpacity);
    expect(checkingOpacity).toBe("0.1")
  
  })
})
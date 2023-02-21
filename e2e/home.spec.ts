import { test, expect } from '@playwright/test';

let Home = "http://localhost:3000";

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(Home)

        await expect(page).toHaveTitle('Home');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(Home)
        
        const metaDescriptionOne = page.locator('meta[name="Beyonce"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Art Gallery")
    })

    test('The link tag', async ({ page }) => {
        await page.goto(Home)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.ico');
    })
})

test.describe('stylizing home page', () => {
    test('main container area stylizing', async({ page }) => { 
        await page.goto(Home)
    
        const home = page.locator('.main');
    
        const grabbedPosition = await home.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-position")
        })
        console.log(grabbedPosition);
        expect(grabbedPosition).toBe("center");
    })

    test('artists container area stylizing', async({ page }) => { 
        await page.goto(Home)
    
        const home = page.locator('.artists');
    
        const grabbedDisplay = await home.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("flex");
    })

    test('link button container area stylizing', async({ page }) => { 
        await page.goto(Home)
    
        const home = page.locator('.link:hover');
    
        const grabbedBorder = await home.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border-radius")
        })
        console.log(grabbedBorder);
        expect(grabbedBorder).toBe("5px");
    })
})
import { test, expect } from '@playwright/test'

let About = "http://localhost:3000/about";
let Home = "http://localhost:3000";

test.describe('Main area', () => {
    test('main tag', async({ page }) => {
        await page.goto(About)

        await expect(page.locator('main')).toHaveCount(1);
    })

    test('Link', async({ page }) => {
        await page.goto(Home);
        await expect(page).toHaveURL(Home);
    })
})

test.describe('stylizing about page', () => {
    test('home button area stylizing', async({ page }) => { 
        await page.goto(About)
    
        const home = page.locator('.home');
    
        const grabbedPosition = await home.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("position")
        })
        console.log(grabbedPosition);
        expect(grabbedPosition).toBe("fixed");
    })

    test('box container area stylizing', async({ page }) => { 
        await page.goto(About)
    
        const about = page.locator('.box');
    
        const grabbedDirection = await about.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(grabbedDirection);
        expect(grabbedDirection).toBe("column");
    })

    test('row container area stylizing', async({ page }) => { 
        await page.goto(About)
    
        const about = page.locator('.row');
    
        const grabbedGap = await about.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("gap")
        })
        console.log(grabbedGap);
        expect(grabbedGap).toBe("0.5rem");
    })

    test('text container area stylizing', async({ page }) => { 
        await page.goto(About)
    
        const about = page.locator('.text');
    
        const grabbedAlignItems = await about.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("align-items")
        })
        console.log(grabbedAlignItems);
        expect(grabbedAlignItems).toBe("center");
    })
})

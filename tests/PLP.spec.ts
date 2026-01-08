import { test, expect } from '../utils/fixtures/app.ts';

test.describe('PLP tests', () => {

    test.beforeEach(async ({ app }) => {
        await app.plp.navigateTo()
    })

    test('Expand options for product in stock', async ({ app }) => {
        await app.plp.expandOptions()
        await expect(app.plp.addToCart).toBeVisible()
    })

    test('Go to PDP of the selected product', async ({ app, page }) => {
        await app.plp.goToPDP()
        expect(page.url).toContain("https://shopusa.fujifilm-x.com/xf56mmf1-2-r-wr-xf56mmf1-2-r-wr/")
    })
})

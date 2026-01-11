import { test, expect } from '../utils/fixtures/app.ts';

test.describe('PLP tests', () => {

    test.beforeEach(async ({ app }) => {
        await app.plp.navigateTo()
    })

    test('Expand options for product in stock', async ({ app }) => {
        await app.plp.expandOptions(app.plp.quickShopOptionsInStock)
        await expect(app.plp.addToCart).toBeVisible()
    })

    test('Go to PDP of the selected product', async ({ app }) => {
        await app.plp.goToPDP()
        expect(app.page.url()).toContain("https://shopusa.fujifilm-x.com/xf56mmf1-2-r-wr-xf56mmf1-2-r-wr/")
    })

    test('Expand options for a product out of stock', async ({ app }) => {
        await app.plp.goToPage("3")
        await app.plp.expandOptions(app.plp.quickShopOptionsOutOfStock)
        await expect(app.plp.outOfStockLocatorButton).toBeVisible
    })

    test('Go to a next page on pagination', async ({ app }) => {
        await app.plp.goToNextPage()
        expect(app.page.url()).toContain("p=2")
    })

    test('Go to a previous page on pagination, including going to a custom page', async ({ app }) => {
        await app.plp.goToPage("4")
        await app.plp.goToPreviousPage()
        await expect(app.page.url()).toContain("p=3")
    })

    test('Go to the last page on pagination', async ({ app }) => {
        let lastPage = true
        let disabledState 
        while (lastPage){
            await app.plp.goToNextPage()
            disabledState = await app.plp.paginationNextVerification.getAttribute("aria-disabled")
            if(disabledState == "true"){
                lastPage = false
            }
        }
        await app.plp.goToPreviousPage()
        disabledState = await app.plp.paginationNextVerification.getAttribute("aria-disabled")
        expect(disabledState).toBe(null)
    })
})
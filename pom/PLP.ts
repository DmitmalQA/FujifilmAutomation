import BasePage from "./BasePage";
import { Locator } from "@playwright/test";

export default class PLP extends BasePage {

    public url: string = "https://shopusa.fujifilm-x.com/lenses/"

    public quickShopOptionsInStock: Locator = this.page.locator('button[title="Quick Buy Options For XF56mmF1.2 R WR"]')
    public quickShopOptionsOutOfStock: Locator = this.page.locator('button[title="Quick Buy Options For GF45-100mmF4"]')
    public paginationNext: Locator = this.page.locator('.pages-item-next')
    public paginationPrevious: Locator = this.page.locator('.pages-item-previous')
    public addToCart: Locator = this.page.locator('button[title="Add XF56mmF1.2 R WR Lens - FACTORY REFURBISHED to Cart"]')
    public learnMoreButton: Locator = this.page.locator('a.btn-secondary[title="Learn More About XF56mmF1.2 R WR"]')
    public outOfStockLocatorButton: Locator = this.page.locator('.product-container[x-data*="productId: 3545"] a.product-action[href*="store-locator"]')
    public paginationElement: Locator = this.page.locator('.item.-ml-px')
    public paginationNextVerification: Locator = this.page.locator('a[aria-label="Next"]')
    public paginationPreviousVerification: Locator = this.page.locator('a[aria-label="Previous"]')
    public filterMountLens: Locator = this.page.locator('button[aria-label="Lens Mount filter"]')
    private filterOptionMountLens: Locator = this.page.locator('a[href*="?lens_mount"]').first()
    public activeFilterOption: Locator = this.page.locator('a[class*=active-filter]')

    async expandOptions(locator: Locator){
        await locator.click()
    }

    async addProduct(){
        await this.quickShopOptionsInStock.click()
        await this.addToCart.click()
    }

    async goToPDP(){
        await this.learnMoreButton.click()
    }

    async goToPage(pageNumber: string){
        const targetPage = this.paginationElement.getByText(pageNumber)
        await targetPage.click()
    }

    async goToNextPage(){
        await this.paginationNext.click()
    }

    async goToPreviousPage(){
        await this.paginationPrevious.click()
    }

    async openMountLensFilter(){
        await this.filterMountLens.click()
    }

    async applyFirstFilterOption(){
        await this.filterOptionMountLens.click()
    }
}
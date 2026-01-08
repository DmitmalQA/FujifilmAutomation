import BasePage from "./BasePage";
import { Locator } from "@playwright/test";

export default class PLP extends BasePage {

    public url: string = "https://shopusa.fujifilm-x.com/lenses/"

    public quickShopOptionsInStock: Locator = this.page.locator('button[title="Quick Buy Options For XF56mmF1.2 R WR"]')
    public quickShopOptionsOutOfStock: Locator = this.page.locator('button[title="Quick Buy Options For GF45-100mmF4"]')
    public paginationNext: Locator = this.page.locator('.pages-item-next')
    public paginationPrevious: Locator = this.page.locator('.pages-item-previous')
    public addToCart: Locator = this.page.locator('button[title="Add XF56mmF1.2 R WR Lens to Cart"]')
    public learnMoreButton: Locator = this.page.locator('a.btn-secondary[title="Learn More About XF56mmF1.2 R WR"]')

    async expandOptions(){
        await this.quickShopOptionsInStock.click()
    }

    async addProduct(){
        await this.quickShopOptionsInStock.click()
        await this.addToCart.click()
    }

    async goToPDP(){
        await this.learnMoreButton.click()
    }
}
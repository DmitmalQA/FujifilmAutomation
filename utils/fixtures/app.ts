import { test as base, Page } from "@playwright/test"

import PLP from "../../pom/PLP"

type App = {
    page: Page,
    plp: PLP
}

export const test = base.extend<{ app: App }>({
    app: async ({ page }, use) => {
        const app: App = {
            page,
            plp: new PLP(page),
        }
        await use(app)
    }
})

export { expect } from "@playwright/test"
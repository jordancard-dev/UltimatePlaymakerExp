import { defineConfig } from 'cypress'
import { devServer } from '@cypress/vite-dev-server'
import react from '@vitejs/plugin-react'

export default defineConfig({
    component: {
        supportFile: 'cypress/support/component.ts',
        devServer: {
            framework: 'react',
            bundler: 'vite',
            viteConfig: {
                plugins: [react()]
            }
        },
        specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}'
    },
    e2e: {
        baseUrl: 'http://localhost:5173',
        supportFile: false,
        setupNodeEvents() {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}'
    }
})

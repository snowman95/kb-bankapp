// add-on-docs 세팅
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addParameters({
    docs: {
        container: DocsContainer,
        page: null
        // page: DocsPage,
    }
})

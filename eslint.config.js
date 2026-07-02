import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'

export default [
    // Astro recommended rules (flat config)
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        ignores: ['dist/', '.astro/', 'node_modules/'],
    },
]

module.exports = {
    extends: [
        "plugin:astro/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    overrides: [
        {
            files: ["**/*.svelte"],
            parser: "astro-eslint-parser",
            parserOptions: {
                // ecmaVersion: 2015,
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
        // ...
    ],
}

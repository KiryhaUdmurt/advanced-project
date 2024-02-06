module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        // project: './tsconfig.json',
        // tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "semi": [2, "always"],
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/quotes": "off",
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "i18next/no-literal-string": ["error", { markupOnly: true }],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/comma-dangle": "off",
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "i18next/no-literal-string": "warn",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/indent": "off",
        "n/handle-callback-err": "off"
    },
    ignorePatterns: ".eslintrc.js"
}

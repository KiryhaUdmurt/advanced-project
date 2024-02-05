export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
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
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
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
        "@typescript-eslint/no-floating-promises": "warn"
    }
}

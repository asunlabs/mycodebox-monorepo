# Learning EsLint essentials

> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

## Install

> You can install ESLint using npm or yarn:

```sh
npm install eslint --save-dev
```

Run below command to initialize Eslint.

```sh
npm init @eslint/config
```

> npm init @eslint/config assumes you have a package.json file already. If you don't, make sure to run npm init or yarn init beforehand.

## Confiuration

> After running npm init @eslint/config, you'll have a .eslintrc.{js,yml,json} file in your directory. In it, you'll see some rules configured like this:

```js
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

> Your .eslintrc.{js,yml,json} configuration file will also include the line:

```js
{
    "extends": "eslint:recommended"
}
```

> Because of this line, all of the rules marked "✓" on the rules page will be turned on. Alternatively, you can use configurations that others have created by searching for "eslint-config" on npmjs.com. ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.

## Reference

- [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)
- [EsLint Rules](https://eslint.org/docs/rules/)

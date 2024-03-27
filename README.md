# NodeJS SDK for Fastspring API

### About this project

This project is a ready to use [Fastspring API](https://developer.fastspring.com/reference/getting-started-with-your-api) for NodeJS environment. It uses [api](https://api.readme.dev/docs/getting-started) and exports the ready to use .js and .d.ts files for you.

The current build version is:
```
@fastspring/v1.0#2kzjaw33clr4j7f6d
```

#### Installation

```console
# npm install fastspring-node-sdk
# yarn add fastspring-node-sdk
```

#### Use

```ts
import fastspringSdk from "fastspring-node-sdk"

fastspringSdk.auth(process.env.YOUR_USERNAME, process.env.YOUR_PASSWORD)

export function getAllProductPrices(){
    return fastspringSdk.getallproductsprice()
}
```

#### Authentication

For all configuration options regarding authentication vist [Usage Authentication](https://api.readme.dev/docs/authentication) 

#### References
* [Fastspring API](https://developer.fastspring.com/reference/getting-started-with-your-api)
* [api](https://api.readme.dev/docs/getting-started)



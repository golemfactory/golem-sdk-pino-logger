# Pino based logging utility for `@golem-sdk`

## What is `@golem-sdk/pino-logger`

This library is designed for use with `@golem-sdk/golem-js` based libraries and applications. While `@golem-sdk/golem-js` provides built in logging capabilities, you can use `@golem-sdk/pino-logger` as an extension to your workflow to

## Features

This library exposes two implementations of the `Logger` interface from `@golem-sdk/golem-js`:

* JSON output logging (`pino`)
* Pretty formatted logging (`pino-pretty`)

## Installation

`@golem-sdk/pino-logger` is available as a [NPM package](https://www.npmjs.com/package/@golem-sdk/pino-logger). You can install it with:

```shell
npm install @golem-sdk/pino-logger
```

## Usage

In your `@golem-sdk/golem-js` based application, you can use in all the places where the `Logger` instance is accepted:

```ts
import { pinoPrettyLogger } from "@golem-sdk/pino-logger";

const logger = pinoPrettyLogger({
  level: "debug"
});
```

## Building

The library is developed using TypeScript and can be built with:

```shell
npm run build
```

## See also

- [Official Golem JS SDK repo](https://github.com/golemfactory/golem-js)
- [Documentation for JS Creators](https://docs.golem.network/docs/creators/javascript)
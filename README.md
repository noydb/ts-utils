[![Maintainability](https://api.codeclimate.com/v1/badges/0ca7640d58873389be60/maintainability)](https://codeclimate.com/github/benj-power/ts-utils/maintainability)

# ts-utils
A library of utilities to be used with TypeScript. I appreciate the established and efficacious utility
libraries out there for both TypeScript and JavaScript so, I wanted to make something of a contribution. 
This package will mostly remain unused by the public - with the majority of usage coming from my
personal projects. I am not writing any groundbreaking utilities, so it follows that I find the
following worthy of explicit mention: certain functions could be considered impractical and/or
illogical; I am writing this library out of practice and merriment.

## Installation
Using npm:
```shell
$ npm install --save bp-ts-utils
```

## Library
### [Array Global Augmentation](src/array/array.global.augmentation.ts)
- `first(): T`
- `isEmpty(): boolean`
- `isIdenticalTo(array: T[]): boolean`
- `last(): T`
- `longerThan(array: T[]): boolean`
- `shorterThan(array: T[]): boolean`
- `clone(array: unknown[]): unknown[]`
- `cloneWithValidation(array: unknown[]): unknown[]`

### [Boolean Global Augmentation](src/boolean/boolean.global.augmentation.ts)
- `not(): boolean`

### [Clone](src/clone/clone.util.ts)
- `clone(argument: unknown | unknown[]): unknown | unknown[]`
- `cloneWithValidation(argument: unknown | unknown[]): unknown | unknown[]`

### [Object](src/object/object.util.ts)
- `areIdentical<T>(first: T, second: T): boolean`
- `isUndefined(argument: unknown): boolean`
- `isNull(argument: unknown): boolean`
- `isNullOrUndefined(argument: unknown): boolean`
- `isANumber(argument: unknown): boolean`
- `areIdenticalArrays(first: T[], second: T[]): boolean`

## Releasing to NPM Registry
- `npm run build`
- `npm version <semantic-version>`
- `npm publish`

[View release on registry](https://www.npmjs.com/package/bp-ts-utils?activeTab=versions)

## Commands
- **lint**: `npm run lint`
- **test**: `npm test`
- **build**: `npm run build`

## Links
- https://github.com/benj-power/ts-utils
- https://www.npmjs.com/package/bp-ts-utils
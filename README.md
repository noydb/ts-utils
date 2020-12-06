[![Maintainability](https://api.codeclimate.com/v1/badges/0ca7640d58873389be60/maintainability)](https://codeclimate.com/github/benj-power/ts-utils/maintainability)

# ts-utils
A library of utilities to be used with TypeScript. I appreciate the established and efficacious utility
libraries out there for both TypeScript and JavaScript so, I wanted to make something of a contribution. 
This package will mostly remain unused by the public - with the majority of usage coming from my
personal projects. I am not writing any groundbreaking utilities, so it follows that I find the
following worthy of explicit mention: certain functions could be considered impractical and/or
illogical; I am writing this library out of practice and merriment.

## Installation
In a browser (TODO):
```html
<script src="bp-ts-utils.js"></script>
```

Using npm:
```shell
$ npm install --save bp-ts-utils
```

## Library
### [any](src/anything/anything.util.ts)
- `isType<T>(argument: T, type: string)`

### [Array Global Augmentation](src/array/array.global.augmentation.ts)
- `first<T>()`
- `isEmpty()`
- `isIdenticalTo<T>(array: T[])`
- `last<T>()`
- `longerThan<T>(array: T[])`
- `shorterThan<T>(array: T[])`

### [Boolean Global Augmentation](src/boolean/boolean.global.augmentation.ts)
- `not()`

### [Object](src/object/object.util.ts)
- `areIdentical<T>(first: T, second: T)`
- `areIdenticalArrays<T>(first: T[], second: T[])`
- `isUndefined<T>(argument: T)`
- `isNull<T>(argument: T)`
- `isNullOrUndefined<T>(argument: T)`
- `isANumber<T>(argument: T)`

## Releasing to NPM Registry
- `npm run build`
- `npm version <semantic-version>`
- `npm publish`

[View release on registry](https://www.npmjs.com/package/bp-ts-utils?activeTab=versions)

## Running Tests
- `npm jest`

## Discussions
- TODO: Why rollup is being used
- TODO: Wrapping functions in ObjectUtil 
- TODO: exporting named/default functions 
- TODO: Global augmentation
- TODO: Will this library be compatible with all versions of TypeScript?   

## Links
- https://github.com/benj-power/ts-utils
- https://www.npmjs.com/package/bp-ts-utils

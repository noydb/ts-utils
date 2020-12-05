[![Maintainability](https://api.codeclimate.com/v1/badges/0ca7640d58873389be60/maintainability)](https://codeclimate.com/github/benj-power/ts-utils/maintainability)

# ts-utils

#### NOTE: USE ESTABLISHED LIBRARIES FOR ANY ENTERPRISE CODEBASE - FOR YOUR SAFETY AND MY SANITY

A library of utilities to be used with TypeScript. I appreciate the established and efficacious utility
libraries out there for both TypeScript and JavaScript so, I wanted to make something of a contribution. 
This package will mostly remain unused by the public - with the majority of usage coming from my
personal projects. I am not writing any groundbreaking utilities, so it follows that I find the
following worthy of explicit mention: certain functions could be considered impractical and/or
illogical; I am writing this library out of practice and merriment.
     
## Utilities
### [any](src/anything/anything.util.ts)
- `isType(argument: any, type: string)`

### [Array Global Augmentation](src/array/array.global.augmentation.ts)
- `first()`
- `isEmpty()`
- `isIdenticalTo(array: unknown[])`
- `last()`
- `longerThan(array: unknown[])`
- `shorterThan(array: unknown[])`

### [Boolean Global Augmentation](src/boolean/boolean.global.augmentation.ts)
- `not`

### [Object](src/object/object.util.ts)
- `areIdentical`
- `identicalArray`
- `isUndefined`
- `isNull`
- `isNullOrUndefined`
- `isANumber`

## Releasing to NPM Registry
- `npm run build`
- `npm version <semantic-version>`

_Note: the changes made will determine the semantic version, either: major (1.x.x), minor (x.1.x), or
patch (x.x.1)_
- `npm publish`
- [View release on registry](https://www.npmjs.com/package/bp-ts-utils?activeTab=versions)

## Running Tests
- `npm jest`

## Discussions, Comments, Other
### TODO: Why rollup is being used
### TODO: Wrapping functions in ObjectUtil or exporting functions as is or writing
### TODO: Will this library be compatible with all versions of TypeScript?   

## Links
- https://github.com/benj-power/ts-utils
- https://www.npmjs.com/package/bp-ts-utils

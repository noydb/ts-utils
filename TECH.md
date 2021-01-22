# Technical Notes and other

## Rollup

Module bundler for JavaScript which compiles small pieces of code into something larger and more 
complex, such as a library or application. It uses the new standardized format for code modules included 
in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. 
ES modules let you freely and seamlessly combine the most useful individual functions from your favorite 
libraries.

"Rollup for libraries, Webpack for apps" is a common saying, but that may no longer be the case; the
functionality gap between bundlers is narrowing. Webpack focuses on CommonJS and converts everything to
that whereas Rollup focuses on ES Modules. Rollup can also detect what is not being imported and
subsequently not bundle it (tree shaking). Rollup does not know what to do with node module
imports, CSS, images, etc. So, it does not attempt to bundle assets it does not understand, it leaves 
this up to developer discretion. 

The biggest issue with Rollup is that it focuses on one thing: **creating production bundles**. There
is not much developer experience (apart from file watching and caching). It cannot produce development
bundles, does not provide a web server, and only reads relative ES modules by default. 

## package.json

**dependencies**: critical for your library to work in production (lodash, etc)

**devDependencies**: only needed during the development phase (eslint, Rollup, jest, etc)

**peerDependencies**: If this project depends on an important library, and you
suspect that a library that will depend on this project (pX) will *also* depend on the important library, 
then you should use peerDependencies. A warning will be displayed if the main project does not use the
specified version (it is best not to be too strict when defining peer dependency versions!).

## Further significance (TODO)
- Wrapping static functions in Class vs exporting flat ones
- Global augmentation
- Will this library be compatible with all versions of TypeScript?
- generics vs unknown (https://stackoverflow.com/a/51569726/8061089)
- what is *.js.map
- make it optional/a config to attach utils through augmentation
- https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-interchangeable
- ES lint vs TS lint
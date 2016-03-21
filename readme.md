# React UI Starter

This is the starter kit for React components with Material-UI.

## Usage

1. Clone the repo
2. `npm install`
3. Remove `.git` and *readme.md*
4. Modify `/src` as your need

## Features

### Webpack & Babel

It's now the de facto standard of React development. I follow [Survivejs](http://survivejs.com/)'s single `webpack.config.js` file setting, using `npm_lifecycle_event` to divide *dev* and *prod/build*.

### [Material-UI](http://www.material-ui.com/)

> A Set of React Components that Implement Google's Material Design.

It's beautiful and highly modular, and can be imported minimally. To import only the components you use:

```
// webpack.config.js
entry: {
  src: PATHS.src,
  vendor: Object.keys(pkg.dependencies).filter(function (v) {
    // Exclude material-ui as it can be used component by component
    return v !== 'material-ui'
  })
},
```

### Self-hosted Font

Material-UI was designed with the *Roboto* font in mind. I host my own fonts as an showcase alternative of Google's webfont API (sometimes you might have trouble accessing Google services :P).

Note how webpack's `url-loader` setting and the `url` in *roboto.css* coordinate to work in the current directory structure to make it work.

### [Enzyme](http://airbnb.io/enzyme/)

> JavaScript Testing utilities for React.

I like to pair it with [Mocha](http://mochajs.org/), and the native Node.js [assertion testing](https://nodejs.org/api/assert.html). Or you may use other assertion libraries like [Chai](http://chaijs.com/).

For writing tests, Material-UI's [test suit](https://github.com/callemall/material-ui/tree/master/test/unit) is a good reference.

To write Mocha tests in ES6, see `package.json`:

```
"scripts": {
  "test": "mocha --require babel-core/register"
},
```

### [Standard Style](http://standardjs.com/)

> JavaScript Standard Style ... No decisions to make. No .eslintrc, .jshintrc, or .jscsrc files to manage. It just works.

I prefer `npm install standard -g`, so it's in the *test* script but not in *devDependencies*.

To fully realize its magic, install [linter-js-standard](https://atom.io/packages/linter-js-standard) with Atom as well. (P.S., [Atom React Plugin](https://atom.io/packages/linter-js-standard) is so mighty :P)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

### [CSS Module](https://github.com/css-modules/css-modules)

> Modular and reusable CSS!
> No more conflicts. Explicit dependencies. No global scope.

It can be easily config with webpack's css-loader, no more additional package:

```
loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
```

Notes:

* Inline/element styles (Material-UI) will always override the `class` styles (any CSS), but they can work together
* CSS beats style when comes to `:hover` and `@media` ...
* There's still room for Global CSS - e.g., layout ([flexboxgrid](http://flexboxgrid.com/))

TODO: CSS composition

## License

ISC

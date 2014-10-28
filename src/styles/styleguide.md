# UA Libraries Style Guide

This styleguide is intended for web developers (e.g., not 'content creators/editors'). It gives basic information about the primary classes/features available.
For now, this styleguide is being generating using [kss-node](https://github.com/kss-node/kss-node). Unforunately, kss-node doesn't offer
all the features we will need, so it will likely be abandoned for another method when we need to development the styleguide for content creators.

## Using the CSS


## Forking, installing, and building the UA Libraries styles and styleguide

### Requirements

* [Node.js](http://nodejs.org/)
    * Go to their [downloads page](http://nodejs.org/download/) and install the appropriate package
* [Grunt.js](http://gruntjs.com/)
    * [See here](http://gruntjs.com/getting-started#installing-the-cli) for installation instructions
* [Bower](http://bower.io/)
    * [See here](http://bower.io/#install-bower) for installation

### Forking repo and Installing dependencies

1. Create you own fork of the [ualibweb/ualib-styles](https://github.com/ualibweb/ualib-styles) repo. [See here](https://help.github.com/articles/fork-a-repo/) for instructions on forking a github repo.
2. Run `npm install -g kss` in the command line to install `kss-node` globally.
3. Run `npm install` to install dependencies for `grunt` (ensure you're in the same folder as the `package.json` file).
3. Run `bower install` in the command line (ensure you're in the same folder as the `bower.json` file).

### Build everything (CSS and Styleguide)

1. Run `grunt` or `grunt default`

### Build CSS only

1. Run `grunt css`

#### The final CSS file(s) are build to
```
dist/css/
```


#### The Styleguide is build to
```
styleguide/
```

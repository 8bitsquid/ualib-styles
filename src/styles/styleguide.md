UA Libraries Style Guide
========================

This styleguide is intended for web developers (e.g., not 'content creators/editors'). It gives basic information about the primary classes/features available.
For now, this styleguide is being generating using [kss-node](https://github.com/kss-node/kss-node). Unforunately, kss-node doesn't offer
all the features we will need, so it will likely be abandoned for another method when we need to development the styleguide for content creators.

## Using the CSS
For temporary dev purposes you can use `<link rel="stylesheet" href="https://raw.githubusercontent.com/ualibweb/ualib-styles/gh-pages/dist/css/ualib-bootstrap.css">`.
**It is strongly encouraged** that you fork the repo (instructions below) and work off your own build instead (I'm not sure how restrictive github is with direct linking).

The css uses [Bootstrap](http://getbootstrap.com/) as a base. Until this styleguide is complete, use the bootstrap documentation for 
available CSS and Components not listed in the styleguide. **NOTE:** [Bootstrap's Javascript](http://getbootstrap.com/javascript/) components may not be used directly in the final theme, so don't worry about getting too familiar with them.

### Issues and feature requests
Use github's [issues system](https://github.com/ualibweb/ualib-styles/issues) to report problems or make feature requests. To do this, you must first create a github account. Afterwards, let me know you account name and I'll add you as a contributor.

---

## Forking, installing, and building the UA Libraries styles and styleguide

### Requirements
You must have the following software install on your computer to build the CSS and Styleguide. Grunt and Bower both require Node.js, so install Node first.
1. [Node.js](http://nodejs.org/)
    * Go to their [downloads page](http://nodejs.org/download/) and install the appropriate package
2. [Grunt.js](http://gruntjs.com/)
    * [See here](http://gruntjs.com/getting-started#installing-the-cli) for installation instructions
3. [Bower](http://bower.io/)
    * [See here](http://bower.io/#install-bower) for installation

---

### Forking repo and Installing dependencies

1. Create you own fork of the [ualibweb/ualib-styles](https://github.com/ualibweb/ualib-styles) repo. [See here](https://help.github.com/articles/fork-a-repo/) for instructions on forking a github repo.
    * The default branch for this repo is `gh-pages`. Any [pull requests](https://help.github.com/articles/using-pull-requests/) will be merged with this branch.
2. Run `npm install -g kss` in the command line to install `kss-node` globally.
3. Run `npm install` to install dependencies for `grunt` (ensure you're in the same folder as the `package.json` file).
3. Run `bower install` in the command line (ensure you're in the same folder as the `bower.json` file).

---

### Build everything (CSS and Styleguide)

1. Run `grunt` or `grunt default`

### Build CSS only

1. Run `grunt css`

---

#### The final CSS file(s) are build to
```
dist/css/
```


#### The Styleguide is build to
```
styleguide/
```

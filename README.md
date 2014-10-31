UA Libraries Style and Styleguide
===========

## Styles

The CSS is generated from [Bootstrap's](http://getbootstrap.com/) source. Customized Bootstrap features have their [Less](http://lesscss.org/) files copied to the
`src/styles/bootstrap` folder. After changes to the `.less` files are made, a [Grunt](http://gruntjs.com/) task is run to build the new `.css` file (builds to `dist/css/` folder).

Non-Bootstrap styles are in the `src/styles/ualib.less` file. This file is build to CSS and concatenated with the Bootstrap `.less` files.

## Styleguide

The styleguide is generated from comments in the `.less` files using [kss-node](https://github.com/kss-node/kss-node).
Comments added the overridden Bootstrap `.less` files, using the [kss style doc format](https://github.com/kneath/kss/blob/master/SPEC.md) generate the styleguide pages.

## Getting Started

You need [Node.js](http://nodejs.org/) to use the tools that build the CSS and the Styleguide. Download the proper Node.js package from their [download page](http://nodejs.org/download/).

After Node.js is installed, then you need to install [Grunt.js](http://gruntjs.com/getting-started) and [Bower](http://bower.io/#install-bower).
To do so, run the following commands:

```bash
npm install -g grunt-cli
npm install -g bower
```

## Building the CSS

### Install the dependencies and packages
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory the repository's [Gruntfile][Getting Started] and [package.json][], run the following command:

```bash
npm install
```

Then, from the same directory as the [bower.json](http://bower.io/docs/creating-packages/#bowerjson) file, run the following commands to install Bootstrap:

```bash
bower install
```

### Overriding Bootstrap Styles

1. Copy the appropriate `.less` files from the `bower_components/bootstrap/less` directory (generated from the `bower install`) to the `src/styles/bootstrap` directory.
2. Edit the `.less` file you just copied.

_If copying a `less` file that already exists in `src/styles/bootstrap`, be sure to preserve **any** style comment blocks that end with `Styleguide x.x.x`. Otherwise, that documentation will be erased from the styelgudie!_

### Adding Custom Styles

Edit the `src/styles/ualib.less` file.

### Build the CSS with Grunt

Once the dependencies are installed, you can build the CSS by running the following command:

```bash
grunt css
```

The build css file(s) will be placed in the `dist/css` folder.

### Build the Styleguide

First, you'll need to install kss-node by running the following command:

```bash
npm install kss
```

Now you can build the styleguide (and CSS) running the `default` grunt command:

```bash
grunt
```

or

```bash
grunt default
```



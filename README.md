![Maple](https://raw.github.com/t32k/maple.css/master/src/files/img/head.png)

This is alpha version, yet.


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) Features

+ **Writing Better CSS**
+ **High Performance**
+ **Rapid Prototyping**


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) Installation

### NPM

Requires [Node.js](http://nodejs.org/)

```sh
$ npm install -g grunt-cli
$ npm install -g grunt-init
```

### Gems

Requires [Ruby](http://www.ruby-lang.org/)

```sh
$ gem update --system
$ gem install sass
$ gem install compass
$ gem install oily_png
```


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) Getting Started

### Project Scaffolding

+ [grunt-init-maple](https://github.com/t32k/grunt-init-maple)

> Create a basic maple project with grunt-init. 

Installation
```sh
$ git clone https://github.com/t32k/grunt-init-maple.git ~/.grunt-init/maple --recursive
```

Usage
```sh
$ git-init maple
```

### Components List

```sh
$ cd /path/to/maple_project/src/tools
$ npm install
$ grunt develop
```

and, open URL.

`http://localhost:8080/components/`


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) Grunt Tasks

### [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) / [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

> Start a connect web server. Run predefined tasks whenever watched file patterns are added, changed or deleted.

`livereload: true`

A happy land where browsers don't need a Refresh button.

```sh
$ grunt develop
```

### [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)

> Compile Compass to CSS.

Compass is an open-source CSS Authoring Framework.

+ [Compass](http://compass-style.org/)

```sh
$ grunt develop
```

### [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)

> Lint CSS files.

CSSLint is a tool to help point out problems with your CSS code. It does basic syntax checking as well as applying a set of rules to the code that look for problematic patterns or signs of inefficiency. 

+ [Rules · stubbornella/csslint Wiki](https://github.com/stubbornella/csslint/wiki/Rules)

#### Lint turn off in Maple project

+ Bulletproof font face (Compatibility)
+ Require compatible vendor prefixes (Compatibility)
+ Disallow !important (Maintainability & Duplication)
+ Disallow selectors that look like regular expressions (Performance)
+ Disallow unqualified attribute selectors (Performance)

```sh
$ grunt build
```

### [grunt-csso](https://github.com/t32k/grunt-csso)

> Minify CSS files with CSSO

CSSO (CSS Optimizer) is a CSS minimizer unlike others. In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers.

+ [css/csso](https://github.com/css/csso)

```sh
$ grunt build
```

### [grunt-csscomb](https://github.com/csscomb/grunt-csscomb)

> The grunt plugin for sorting CSS properties in specific order.

+ [The Greatest tool for sorting CSS properties in specific order](http://csscomb.com/)

```sh
$ grunt csscomb
```

### [grunt-webfont](https://github.com/sapegin/grunt-webfont)

> SVG to webfont converter for Grunt

Generate custom icon webfonts from SVG/EPS files via Grunt to reduce HTTP requests.

+ [cognitom/symbols](https://github.com/cognitom/symbols)
+ [iconmonstr - Free simple icons for your next project](http://iconmonstr.com/)

**Requires fontforge, ttfautohint**

```sh
$ brew install fontforge ttfautohint
$ brew install https://raw.github.com/sapegin/grunt-webfont/master/Formula/sfnt2woff.rb
```
You can create glyph SVG from this [glyph.ai](https://raw.github.com/t32k/maple.css/master/src/files/ai/glyph.ai), and put it into `/files/font/svg` folder.

```sh
$ grunt webfont
```

### [grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim)

> Make ImageOptim, ImageAlpha and JPEGmini part of your automated build process.

**Requires Apps**

+ [ImageOptim — make websites and apps load faster (Mac app)](http://imageoptim.com/)
+ [ImageAlpha — heavy compression for PNG images (like JPEG with alpha channel!)](http://pngmini.com/)
+ [JPEGmini - Your Photos on a Diet!](http://jpegmini.com/)


```sh
$ grunt build
```


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) CSS

### Module Prefix

| Prefix | Module name |
| ------ | ---------- |
| head-\* | headline |
| list-\* | listview |
| btn-\* | button |
| box-\* | box/section |
| icon-\* | icon |
| bar-\* | bar |
| sprt-\* | sprite |

### Serial Number Suffix

| Suffix | Serial Number |
| ------ | ---------- |
| \*-a | alpha |
| \*-b | beta |
| \*-c | gamma |
| \*-d | delta |
| \*-e | epsilon |
| \*-f | zeta |
| \*-g | eta |
| \*-h | theta |
| \*-i | iota |
| \*-j | kappa |

EX.
```css
.btn-a { color: green }
.btn-b { color: red }
.btn-c { color: black }
.btn-d { color: white }
```

### Helper Classes

| Symbol | Property |
| ------ | -------- |
| a | - |
| b | font-weight: **b**old |
| c(s) | text-align: **c**enter, **c**olor: $color-{serial number} |
| d(v) | **d**isplay: {value} |
| e |  -  |
| f(n) | **f**ont-size: {number} |
| g |  -  |
| h |  -  |
| i |  -  |
| j |  -  |
| k |  -  |
| l | text-align: **l**eft |
| m(d)(s) | **m**argin-{direction}: {size}  |
| n | font-weight: **n**ormal |
| o |  -  |
| p(d)(s) | **p**adding-{direction}: {size}  |
| q |  -  |
| r | text-align: **r**ight |
| s |  -  |
| t |  -  |
| u | text-decoration: **u**nderline  |
| v(n) | **v**ertical-align: {size} |
| w |  -  |
| x |  -  |
| y |  -  |
| z |  -  |


### Class States

 + is-active (is-selected)
 + is-pressed (:hover.:avtive)
 + is-hidden (display:none)
 + is-animated
 + is-disabled

### Comments

```css
//-------------------------------------//
//  First Level
//-------------------------------------//

//  Second Level
//-------------------------------------

//  Third Level
```


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) Sass

### Directory structure

```sh
├── css
│   ├── maple.css
│   └── sass
│       ├── maple.scss
│       ├── _core.scss
│       ├── _modules.scss
│       ├── core
│       │   ├── _base.scss
│       │   ├── _helper.scss
│       │   ├── _layout.scss
│       │   ├── _reset.scss
│       │   └── _settings.scss
│       ├── modules
│       │   ├── _bars.scss
│       │   ├── _boxes.scss
│       │   ├── _buttons.scss
│       │   ├── _forms.scss
│       │   ├── _headlines.scss
│       │   ├── _listviews.scss
│       │   ├── _misc.scss
│       │   └── _navigation.scss
│       └── vendors
│           └── _myfont.scss
```

### Mixins

```scss
// - @mixin  CSS Sprite for Retina Display
// - @param  $isParent {String} the first parameter is a string(parent or child)
// - @param  $map {Glob} the second parameter is a glob
// - @param  $map-item {Glob} the second parameter is a glob
// - @param  $isSameChild {Boolean} default is false
// - @usage  @include sprite(child, $map-tabs, home)
@mixin sprite($isParent, $map, $map-item: foo, $isSameChild: false) {
	@if not $isSameChild {
		@if $isParent == "parent" {
			background-image: sprite-url($map);
			background-repeat: no-repeat;
			background-size: round(image-width(sprite-path($map)) / 2) round(image-height(sprite-path($map)) / 2);
		} @else {
			$position-x: round(nth(sprite-position($map, $map-item), 1) / 2);
			width: round(image-width(sprite-file($map, $map-item)) / 2);
			height: round(image-height(sprite-file($map, $map-item)) / 2);
			background-position: $position-x 0;
		}
	} @else {
		@if $isParent == "parent" {
			width: round(image-width(sprite-file($map, $map-item)) / 2);
			height: round(image-height(sprite-file($map, $map-item)) / 2);
			background-image: sprite-url($map);
			background-repeat: no-repeat;
			background-size: round(image-width(sprite-path($map)) / 2) round(image-height(sprite-path($map)) / 2);
		} @else {
			$position-x: round(nth(sprite-position($map, $map-item), 1) / 2);
			background-position: $position-x 0;
		}
	}
}
```
## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) Resources

### Framework

+ [Sencha Touch](http://docs.sencha.com/touch/2-2/#!/api/Global_CSS)
+ [jquery/jquery-mobile](https://github.com/jquery/jquery-mobile)
+ [twitter/bootstrap](https://github.com/twitter/bootstrap)
+ [zurb/foundation](https://github.com/zurb/foundation)
+ [stubbornella/oocss · GitHub](https://github.com/stubbornella/oocss)
+ [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css)
+ [mvcss/mvcss](https://github.com/mvcss/mvcss)
+ [BEM: Methodology of Effective Site Development](http://bem.info/)
+ [suitcss](https://github.com/suitcss)

### Tips

+ [stubbornella/csslint · GitHub](https://github.com/stubbornella/csslint)
+ [necolas/idiomatic-css · GitHub ](https://github.com/necolas/idiomatic-css/)
+ [Scalable and Modular Architecture for CSS](http://smacss.com/)
+ [About HTML semantics and front-end architecture – Nicolas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
+ [csswizardry/CSS-Guidelines](https://github.com/csswizardry/CSS-Guidelines)


## ![](https://raw.github.com/t32k/maple.css/master/src/files/img/icon/leaf.png) License MIT

Copyright (c) 2013 Koji Ishimoto

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

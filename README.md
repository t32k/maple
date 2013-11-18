![Maple](files/img/readme/head.png)

This is alpha version, yet.


## ![][leaf] Features

![](files/img/readme/feature.png)


## ![][leaf] Installation

### NPM

Requires [Node.js](http://nodejs.org/)

```sh
$ npm install -g grunt-cli
$ npm install -g grunt-init
```

## ![][leaf] Getting Started

### Project Scaffolding

+ [grunt-init-maple](https://github.com/t32k/grunt-init-maple)

> Create a basic maple project with grunt-init. 

Installation
```sh
$ git clone https://github.com/t32k/grunt-init-maple.git ~/.grunt-init/maple --recursive
```

Usage
```sh
$ grunt-init maple
```

### Components List

```sh
$ cd /path/to/maple_project/src/tools
$ npm install
$ grunt develop
```

and, open URL.

`http://localhost:8080/components/`


## ![][leaf] Grunt Tasks

### [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)

> Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.

### [grunt-csscomb](https://github.com/csscomb/grunt-csscomb)

> The grunt plugin for sorting CSS properties in specific order.

+ [The Greatest tool for sorting CSS properties in specific order](http://csscomb.com/)

```sh
$ grunt csscomb
```

### [grunt-csso](https://github.com/t32k/grunt-csso)

> Minify CSS files with CSSO

CSSO (CSS Optimizer) is a CSS minimizer unlike others. In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers.

+ [css/csso](https://github.com/css/csso)

```sh
$ grunt build
```

### [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) 

> Start a connect web server.

```sh
$ grunt develop
```

### [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)

> Lint CSS files.

CSSLint is a tool to help point out problems with your CSS code. It does basic syntax checking as well as applying a set of rules to the code that look for problematic patterns or signs of inefficiency. 

+ [Rules · stubbornella/csslint Wiki](https://github.com/stubbornella/csslint/wiki/Rules)

#### Lint turn off in Maple project

+ Bulletproof font face (Compatibility)
+ Disallow adjoining classes (Compatibility)
+ Require compatible vendor prefixes (Compatibility)
+ Disallow !important (Maintainability & Duplication)
+ Disallow selectors that look like regular expressions (Performance)
+ Disallow unqualified attribute selectors (Performance)
+ Disallow units for zero values (Performance)

```sh
$ grunt build
```

### [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

> Run tasks whenever watched files change.

`livereload: true`

A happy land where browsers don't need a Refresh button.

+ [Chrome Extensions](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)


### [grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim)

> Make ImageOptim, ImageAlpha and JPEGmini part of your automated build process.

**Requires Apps**

+ [ImageOptim — make websites and apps load faster (Mac app)](http://imageoptim.com/)
+ [ImageAlpha — heavy compression for PNG images (like JPEG with alpha channel!)](http://pngmini.com/)
+ [JPEGmini - Your Photos on a Diet!](http://jpegmini.com/)


```sh
$ grunt build
```

### [grunt-kss](https://github.com/t32k/grunt-kss)

> KSS styleguide generator for grunt.

[A NodeJS Implementation of KSS](https://github.com/hughsk/kss-node): a methodology for documenting CSS and generating styleguides

`http://localhost:8080/docs/`

```sh
$ grunt publish
```


### [grunt-pagespeed](https://github.com/jrcryer/grunt-pagespeed)

> Grunt plugin for running Google PageSpeed Insights

+ [Obtain Google API Key](https://developers.google.com/speed/docs/insights/v1/getting_started#auth)

```sh
$ grunt pagespeed
```


### [grunt-sass](https://github.com/sindresorhus/grunt-sass)

> Grunt task to compile Sass SCSS to CSS

```sh
$ grunt develop
```

### [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)

> Grunt task for creating spritesheets and their coordinates

```sh
$ grunt sprite
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
You can create glyph SVG from this [glyph.ai](files/ai/glyph.ai), and put it into `/files/font/svg` folder.

```sh
$ grunt typeset
```



## ![][leaf] CSS

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


## ![][leaf] Sass

### Directory structure

```sh
├── css
│   ├── maple
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
│       │   └── _misc.scss
│       └── libs
│           ├── _myfont.scss
│           └── _sprites.scss
```

### Mixins

#### CSS Sprite for Retina(Using Spritesmith)

[Previous Verison](https://gist.github.com/t32k/e65534b5a8bb124e1cbe)

```scss
// $list: <X> <Y> <Offset X> <Offset Y> <Width> <Height> <Total Width> <Total Height> <Image Path>
@mixin sprite($isParent, $sprite) {
  @if $isParent == "parent" {
    background-image: url( unquote( nth($sprite, 9) ) );
    background-repeat: no-repeat;
    background-size: round( nth($sprite, 7) / 2 ) round( nth($sprite, 8) / 2 );
  } @else {
    width: round( nth($sprite, 5) / 2 );
    height: round( nth($sprite, 6) / 2 );
    background-position: round( nth($sprite, 3) / 2 ) round( nth($sprite, 4) / 2 );
  }
}
```

## ![][leaf] Resources

### Framework

+ [Sencha Touch](http://docs.sencha.com/touch/2-2/#!/api/Global_CSS)
+ [jquery/jquery-mobile](https://github.com/jquery/jquery-mobile)
+ [twitter/bootstrap](https://github.com/twitter/bootstrap)
+ [zurb/foundation](https://github.com/zurb/foundation)
+ [stubbornella/oocss](https://github.com/stubbornella/oocss)
+ [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css)
+ [mvcss/mvcss](https://github.com/mvcss/mvcss)
+ [suitcss](https://github.com/suitcss)


### Tips

+ [Scalable and Modular Architecture for CSS](http://smacss.com/)
+ [BEM: Methodology of Effective Site Development](http://bem.info/)
+ [SOLID CSS | Miller Medeiros](http://blog.millermedeiros.com/solid-css/)
+ [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
+ [csswizardry/CSS-Guidelines](https://github.com/csswizardry/CSS-Guidelines)
+ [necolas/idiomatic-css](https://github.com/necolas/idiomatic-css/)
+ [stubbornella/csslint](https://github.com/stubbornella/csslint)


## ![][leaf] License MIT

© 2013 Koji Ishimoto

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

[leaf]: files/img/icon/leaf.png

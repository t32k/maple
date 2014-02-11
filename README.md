![Maple](build/files/img/pages/readme/head.png)

__This is alpha version, yet.__


## ![][leaf] Features

![](build/files/img/pages/readme/feature.png)


## ![][leaf] Installation

### NPM

Requires [Node.js](http://nodejs.org/)

```sh
$ npm install yo -g
```

## ![][leaf] Getting Started

### Project Scaffolding

[t32k/generator-maple](https://github.com/t32k/generator-maple)

> Create a basic maple project with Yeoman. 

Installation
```sh
$ npm install generator-maple -g 
```

Usage
```sh
$ mkdir your_proj && cd $_
$ yo maple
$ grunt
```

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


### [grunt-image](https://github.com/1000ch/grunt-image)

> Optimize PNG, JPEG, GIF images with grunt task.

**Require**

__Mac OS X__

```sh
$ brew install libjpeg libjpeg-turbo
```

```sh
$ grunt image
```

### [grunt-kss](https://github.com/t32k/grunt-kss)

> KSS styleguide generator for grunt.

[A NodeJS Implementation of KSS](https://github.com/hughsk/kss-node): a methodology for documenting CSS and generating styleguides

`http://localhost:8081/`

```sh
$ grunt publish
```

### [grunt-sass](https://github.com/sindresorhus/grunt-sass)

> Grunt task to compile Sass SCSS to CSS

```sh
$ grunt develop
```

### [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)

> Grunt task for creating spritesheets and their coordinates

**Requires Phantomjs(or canvas or gm)**

If Homebrew is not installed...

```sh
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
```

```sh
$ brew install phantomjs
```

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
```

You can create glyph SVG from this [glyph.ai](/build/files/ai/glyph.ai), and put it into `/build/files/font/svg` folder.

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
# stylesheets
├── maple.scss
├── _core.scss
├── _ui.scss
├── core
│   ├── _base.scss
│   ├── _helper.scss
│   ├── _layout.scss
│   ├── _reset.scss
│   └── _settings.scss
├── ui
│   ├── elements
│   │   ├── _button.scss
│   │   ├── _divider.scss
│   │   ├── _header.scss
│   │   └── _input.scss
│   ├── modules
│   │   ├── _bar.scss
│   │   └── _box.scss
│   └── views
│       ├── _list.scss
│       └── _modal.scss
└── lib
    ├── _myfont.scss
    └── _sprite.scss
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

### See Also

+ [suitcss](https://github.com/suitcss)
+ [Topcoat](https://github.com/topcoat)
+ [operatino/MCSS](https://github.com/operatino/MCSS)
+ [jquery/jquery-mobile](https://github.com/jquery/jquery-mobile)
+ [twitter/bootstrap](https://github.com/twitter/bootstrap)
+ [zurb/foundation](https://github.com/zurb/foundation)
+ [stubbornella/oocss](https://github.com/stubbornella/oocss)
+ [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css)
+ [mvcss/mvcss](https://github.com/mvcss/mvcss)


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

[leaf]: build/files/img/icon/leaf.png
[![Analytics](https://ga-beacon.appspot.com/UA-2317436-35/maple/readme)](https://github.com/igrigorik/ga-beacon)

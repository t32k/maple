![Maple](https://raw.github.com/t32k/maple.css/master/src/files/img/logo.png)

# Maple

This is alpha version yet.


## Features

+ __Writing Better CSS__
+ __High Performance__
+ __Rapid Prototyping__


## Installation

### NPM

Requires [Node.js](http://nodejs.org/)

```sh
$ npm install -g grunt-cli
$ npm install -g grunt-init
```

### Gems

Requires [Ruby](www.ruby-lang.org/)

```sh
$ gem update --system
$ gem install sass
$ gem install compass
$ gem install oily_png
```


## Getting Started

### Project Scaffolding

```sh
$ git clone https://github.com/t32k/grunt-init-maple.git ~/.grunt-init/maple --recursive
```
+ [grunt-init-maple](https://github.com/t32k/grunt-init-maple)
> Create a basic maple project with grunt-init. 

### Components List

```sh
$ cd /path/to/maple_project/src/tools
$ npm install
$ grunt develop
```

and, open url.

`http://localhost:8080/components/`

---

## Grunt Tasks

### [grunt-csso](https://github.com/t32k/grunt-csso)

> Minify CSS files with CSSO

CSSO (CSS Optimizer) is a CSS minimizer unlike others. In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers.

+ [css/csso](https://github.com/css/csso)

```sh
$ grunt minify
```

### [grunt-webfont](https://github.com/sapegin/grunt-webfont)

> SVG to webfont converter for Grunt

Generate custom icon webfonts from SVG/EPS files via Grunt to reduce HTTP requests.

+ [cognitom/symbols](https://github.com/cognitom/symbols)
+ [iconmonstr - Free simple icons for your next project](http://iconmonstr.com/)

__Requires fontforge, ttfautohint__

```sh
$ brew install fontforge ttfautohint
$ brew install https://raw.github.com/sapegin/grunt-webfont/master/Formula/sfnt2woff.rb
```

```sh
$ grunt webfont
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


### [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)

> Compile Compass to CSS.

Compass is an open-source CSS Authoring Framework.

+ [Compass](http://compass-style.org/)


### [grunt-csscomb](https://github.com/t32k/grunt-csscomb)

> The grunt plugin for sorting CSS properties in specific order.


### [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) / [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

> Start a connect web server. Run predefined tasks whenever watched file patterns are added, changed or deleted.

`livereload: true`

A happy land where browsers don't need a Refresh button.

```sh
$ grunt develop
```

---

### CSS

### Module Prefix

+ __head-*__ - headline
+ __list-*__ - listview
+ __btn-*__ - button
+ __box-*__ - box/section
+ __icon-*__ - icon
+ __bar-*__ - bar
+ __nav-*__ - navigation

### Serial Number Suffix

+ *-__a__ - alpha
+ *-__b__ - beta
+ *-__c__ - gamma
+ *-__d__ - delta
+ *-__e__ - epsilon
+ *-__f__ - zeta
+ *-__g__ - eta
+ *-__h__ - theta
+ *-__i__ - iota
+ *-__j__ - kappa

EX.
```CSS
.btn-a { color: red }
.btn-b { color: green }
.btn-c { color: black }
.btn-c { color: black }
```

### Helper Classses

| Symbol | Property |
| ------ | -------- |
| a | - |
| b | font-weight: __b__old |
| c(s) | text-align:__c__enter, __c__olor: $color-{serial number} |
| d(v) | __d__isplay: {value} |
| e |  -  |
| f(n) | __f__ont-size: {number} |
| g |  -  |
| h |  -  |
| i |  -  |
| j |  -  |
| k |  -  |
| l | text-align: __l__eft |
| m(d)(s) | __m__argin-{direction}: {size}  |
| n | font-weight: __n__ormal |
| o |  -  |
| p(d)(s) | __p__adding-{direction}: {size}  |
| q |  -  |
| r | text-align: __r__ight |
| s |  -  |
| t |  -  |
| u | text-decoration: __u__nderline  |
| v(n) | __v__ertical-align: {size} |
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


## Resources

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

### Apps

+ [ImageOptim — make websites and apps load faster](http://imageoptim.com/)
+ [ImageAlpha — lossy compression for 24-bit PNG images](http://pngmini.com/)

---

## MIT License

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

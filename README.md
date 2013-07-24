![Maple](https://raw.github.com/t32k/maple.css/master/files/img/logo.png)

# Maple – Alpha version

## Components List

```sh
$ cd /maple.css/files/tool
$ npm install
$ grunt develop
```

http://localhost:8080/components/

## Requires

### NPM

Requires Node.js 0.8/0.10

[node.js](http://nodejs.org/)

```sh
$ npm install -g grunt-cli
$ npm install -g grunt-init
```

### Gems

```sh
$ gem update --system
$ gem install sass
$ gem install compass
$ gem install oily_png
```

## Conventions

### Lint

+ [Rules · stubbornella/csslint Wiki](https://github.com/stubbornella/csslint/wiki/Rules)

#### Lint turn off

+ Bulletproof font face (Compatibility)
+ Require compatible vendor prefixes (Compatibility)
+ Disallow !important (Maintainability & Duplication)
+ Disallow selectors that look like regular expressions (Performance)
+ Disallow unqualified attribute selectors (Performance)

### Comments

```css
//-------------------------------------//
//  First Level
//-------------------------------------//

//  Second Level
//-------------------------------------

//  Third Level
```

### Serial Number

 1. first......a
 2. second.....b
 3. third.....c
 4. fourth.....d
 5. fifth.....e
 6. sixth.....f
 7. seventh.....g
 8. eighth.....h
 9. ninth.....i
 10. tenth.....j

* * *
 primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary, novenary, decenary
 
 alph, beta, gamma, delta, epsilon, zeta, eta, theta, iota, kappa

 loud, quiet, bare, positive, negative, firm, contrast, sharp, opaque, neutral, main, secondary, alert, success, highlight, shiny, dark

### Prefix

 + __hd-*__ - header
 + __bd-*__ - body
 + __ft-*__ - footer
 + __hl-*__ - headline text
 + __bx-*__ - box/section
 + __bg-*__ - background
 + __btn-*__ - button
 + __fig-*__ - figure
 + __icon-*__ - icon
 + __tab-*__ - tab
 + __bar-*__ - bar
 + __bnr-*__ - banner
 + __nav-*__ - navigation

### States

 + is-on, is-off
 + is-active (is-selected)
 + is-pressed (:hover.:avtive)
 + is-hidden (display:none)
 + is-animated
 + is-disabled
 + is-collapsed

### Helper

| Symbol | Property |
| ------ | -------- |
| a | - |
| b | font-weight: **b**old |
| c(s) | text-align:**c**enter, **c**olor: $color-{serial number} |
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

## Resources

### Tips

+ [stubbornella/csslint · GitHub](https://github.com/stubbornella/csslint)
+ [necolas/idiomatic-css · GitHub ](https://github.com/necolas/idiomatic-css/)
+ [Scalable and Modular Architecture for CSS](http://smacss.com/)
+ [About HTML semantics and front-end architecture – Nicolas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
+ [csswizardry/CSS-Guidelines](https://github.com/csswizardry/CSS-Guidelines)

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

### Apps

+ [ImageOptim — make websites and apps load faster](http://imageoptim.com/)
+ [ImageAlpha — lossy compression for 24-bit PNG images](http://pngmini.com/)

### Web font

+ [grunt-webfont](https://github.com/sapegin/grunt-webfont)
+ [cognitom/symbols](https://github.com/cognitom/symbols)
+ [iconmonstr - Free simple icons for your next project](http://iconmonstr.com/)

**Requires fontforge, ttfautohint**

```sh
$ brew install fontforge ttfautohint
$ brew install https://raw.github.com/sapegin/grunt-webfont/master/Formula/sfnt2woff.rb
```

```sh
$ grunt webfont
```

### Grunt

+ [grunt-init](https://github.com/gruntjs/grunt-init)
+ [grunt-init-maple](https://github.com/t32k/grunt-init-maple)
+ [grunt-csso](https://github.com/t32k/grunt-csso)
+ [grunt-webfont](https://github.com/sapegin/grunt-webfont)
+ [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
+ [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
+ [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)
+ [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

## License MIT

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

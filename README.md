![maple.css](https://raw.github.com/t32k/maple.css/master/files/img/logo.png)

# Maple.css – Alpha version

## Components List

```sh
$ cd /maple.css/files/tool
$ npm install
$ grunt develop
```

http://localhost:8000/components/

## Requires

### NPM

[node.js](http://nodejs.org/)

```sh
$ npm install grunt-cli -g 
```

### Gems

```sh
$ gem update --system
$ gem install sass
$ gem install compass
$ gem install oily_png
$ gem install css_parser
```

## Conventions

### Lint

 + Disallow IDs in selectors
 + Disallow tags only in selectors
 + Disallow units for 0 values
 + Require shorthand properties


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

### Framework

+ [Sencha Touch](http://docs.sencha.com/touch/2-2/#!/api/Global_CSS)
+ [jquery/jquery-mobile](https://github.com/jquery/jquery-mobile)
+ [twitter/bootstrap](https://github.com/twitter/bootstrap)
+ [zurb/foundation](https://github.com/zurb/foundation)
+ [stubbornella/oocss · GitHub](https://github.com/stubbornella/oocss)
+ [csswizardry/inuit.css](https://github.com/csswizardry/inuit.css)
+ [mvcss/mvcss](https://github.com/mvcss/mvcss)
+ [BEM: Methodology of Effective Site Development](http://bem.info/)

### Apps

+ [ImageOptim — make websites and apps load faster](http://imageoptim.com/)
+ [ImageAlpha — lossy compression for 24-bit PNG images](http://pngmini.com/)

### Grunt

+ [grunt-contrib](https://github.com/gruntjs/grunt-contrib)
+ [grunt-csso](https://github.com/t32k/grunt-csso)
+ [grunt-webfont](https://github.com/sapegin/grunt-webfont)

## Contributors

+ [hiloki](https://github.com/hiloki)
+ [Layzie](https://github.com/Layzie)

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

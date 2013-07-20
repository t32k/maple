![maple.css](https://raw.github.com/t32k/maple.css/master/files/img/logo.png)

# Maple.css – v0.1.0

## Components List

```
$ cd /maple.css/files/tool
$ npm install
$ grunt develop
```
http://localhost:8000/components/

## Requires

### NPM

http://nodejs.jp/

```
npm install grunt-cli -g 
```

### Gems

```
gem update --system
gem install sass
gem install compass
gem install oily_png
gem install css_parser
```

## Conventions

### Lint

 + Disallow IDs in selectors
 + Disallow tags only in selectors
 + Disallow units for 0 values
 + Require shorthand properties


### Comments
```
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

<table>
  <tr>
    <td>a</td><td> - </td>
  </tr>
  <tr>
    <td>b</td><td>font-weight:bold</td>
  </tr>
  <tr>
    <td>c(n)</td><td>text-align:center</td>
  </tr>
  <tr>
    <td>d(n)</td><td>display: {value}</td>
  </tr>
  <tr>
    <td>e</td><td> - </td>
  </tr>
  <tr>
    <td>f(n)</td><td>font-size: {number}</td>
  </tr>
  <tr>
    <td>g</td><td> - </td>
  </tr>
  <tr>
    <td>h</td><td> - </td>
  </tr>
  <tr>
    <td>i</td><td> - </td>
  </tr>
  <tr>
    <td>j</td><td> - </td>
  </tr>
  <tr>
    <td>k</td><td> - </td>
  </tr>
  <tr>
    <td>l</td><td>text-align:left</td>
  </tr>
  <tr>
    <td>m(n)(n)</td><td>margin-{direction}: {size} </td>
  </tr>
  <tr>
    <td>n</td><td>font-weight:normal</td>
  </tr>
  <tr>
    <td>o</td><td> - </td>
  </tr>
  <tr>
    <td>p(n)(n)</td><td>padding-{direction}: {size} </td>
  </tr>
  <tr>
    <td>q</td><td> - </td>
  </tr>
  <tr>
    <td>r</td><td>text-align:right</td>
  </tr>
  <tr>
    <td>s</td><td> - </td>
  </tr>
  <tr>
    <td>t</td><td> - </td>
  </tr>
  <tr>
    <td>u</td><td>text-decoration:underline </td>
  </tr>
  <tr>
    <td>v(n)</td><td>vertical-align: {size}</td>
  </tr>
  <tr>
    <td>w</td><td> - </td>
  </tr>
  <tr>
    <td>x</td><td> - </td>
  </tr>
  <tr>
    <td>y</td><td> - </td>
  </tr>
  <tr>
    <td>z</td><td> - </td>
  </tr>
</table>

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

## License

Maple.css is licensed under the MIT License.

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
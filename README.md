# Maple 

[![](public/files/img/pages/readme/cover.jpg)](https://plus.google.com/+KarenHutton/posts/VmDawurtRiy?pid=5812042682511318962&oid=112471890387110967375)

Photo by [Karen Hutton](https://plus.google.com/+KarenHutton)

[![devDependency Status](https://david-dm.org/t32k/maple/dev-status.svg)](https://david-dm.org/t32k/maple#info=devDependencies)

This is alpha version, yet.

## Features

![](public/files/img/pages/readme/feature.png)


## Installation

### NPM

Requires [Node.js](http://nodejs.org/)



## CSS

### Module Prefix

| Prefix | Module name |
| ------ | ---------- |
| u-\* | Utility |
| l-\* | Layout |
| c-\* | Component |
| is-\* | State |
| js-\* | JavaScript Specific |


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


## Sass

### Directory structure

```sh
# stylesheets
├── maple.scss
├── _core.scss
├── _ui.scss
├── core
│   ├── _base.scss
│   ├── _utility.scss
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

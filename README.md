# Maple 

This is alpha version, yet.

## Features

![](public/files/img/pages/readme/feature.png)


## Installation

This project use a bunch of npm, so you need [Node.js](https://nodejs.org/).

### npm

```
$ npm install
```

### gem

You need to install [Ruby](https://www.ruby-lang.org/) to use [scss-lint](https://github.com/causes/scss-lint) in advance.

```
$ gem install sass scss-lint
```

## Tasks

You don't have to install [grunt](http://gruntjs.com/)/[gulp](http://gulpjs.com/), yay!

```
# Show all tasks
$ npm run
```

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
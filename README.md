ngCopyText - HTML5 (Non-Flash) Based Copy to clipboard using AngularJS
=======

[![Build Status](https://travis-ci.org/codehangar/ng-copy-text.svg?branch=master)](https://travis-ci.org/codehangar/ng-copy-text)


A simple AngularJS directive that uses document.exec('copy') and updates the user's clipboard.


## How to get it ? 

#### Manual Download
Download the from [here](https://github.com/codehangar/ng-copy-text/releases)

#### Bower 
```
bower install ng-copy-text
```
<!--
#### Npm
```
npm install ng-copy-text
```
-->

#### CDN
ng-clip is available at [cdnjs](http://www.cdnjs.com/libraries/ng-copy-text)


## Usage

1. Add ng-copy-text.js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/ng-copy-text/dist/ng-copy-text.js"></script>
  ```

2. Set `ngCopyText` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngCopyText'])
  ```

3. Add copy-text directive to the wanted element, example:
  ```html
  <span copy-text>Text To Copy</span>
  ```

4. In Unsupported Browsers, the text will be selected, allowing user's to [CMD+C] or [Ctrl+C] to copy


## Examples
You can check out this live example here: http://plnkr.co/XXXX 


## Credits
This project was initially forked from the application template seed here
[https://github.com/refactorthis/angular-component-seed.git](https://github.com/refactorthis/angular-component-seed.git)

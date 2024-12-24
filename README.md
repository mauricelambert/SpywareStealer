![SpywareStealer Logo](https://mauricelambert.github.io/info/javascript/security/SpywareStealer_small.png "SpywareStealer logo")

# SpywareStealer

## Description

This browser extension implements a spyware and a stealer to exfiltrate data from all user interactions (keylogger and form data stealer) and work on Chrome and Firefox.

> It's very useful to test your browser protection, like many EDR have or other tools.

## Requirements

 - Firefox or Chrome

## Installation

### Mozilla Firefox

1. *Download* the `SpywareStealer.xpi` from releases [releases](https://github.com/mauricelambert/SpywareStealer/releases)
2. In the Firefox *address/url bar*, type `about:addons`
3. *Click on the settings icon* -> *Select* `Install Add-on From File...`
4. *Browse* to the location where you saved the `SpywareStealer.xpi` file, *select it*, and *click* `Open`

### Google Chrome

1. *Download* the `SpywareStealer.crx` from releases [releases](https://github.com/mauricelambert/SpywareStealer/releases)
2. *Navigate to* `chrome://extensions/` in your Chrome browser
3. *Toggle on* `Developer mode` located at the top right corner of the extensions page
4. *Drag and drop* the `SpywareStealer.crx` file onto the extensions page -> *click* `Add Extension`.

### Source code

If you want to use source code, you can add it from:

 - Firefox: `about:debugging#/runtime/this-firefox` -> `Load Temporary Add-on...`, you should have a warning cause of `manifest.background.service_worker` because is not used on Firefox.
 - Chrome: `chrome://extensions/` (you may activate the `Developer mode`) -> `Load unpacked` but you must remove this line (21): `"scripts": ["LoadSpyware.js"]` and the comma `,` at the end of the precedent line in the `manifest.json` because Chrome doesn't support the `manifest.background.scripts`.

## License

Licensed under the [GPL, version 3](https://www.gnu.org/licenses/).

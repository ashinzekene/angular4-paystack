# Changelog

All notable changes to `angular4-paystack` will be documented in this file

## 3.1.0 - 17-02-23
### Added
  - Added support for angular 15. Anguler versions 8 - 15 now supported
  - Moved repo to angular 15

## 3.0.2 - 18-08-21
### Fixed
  - Make angular v8 - v12 peer dependencies

## 3.0.1 - 12-07-21
### Fixed
  - Schematic change to ModuleWithProviders: [here](https://angular.io/guide/migration-module-with-providers). Thanks @alexnoise79
  - Fixed issue with re-opening payment modal after closing

## 3.0.0 - 15-10-20
### Added
  - Module with `forRoot`
  - `paystackOptions` input
### Removed
  - `text` input
### Deprecated
 - `angular-embed` component

## 2.4.0 - 15-10-20
### Added
  - Upgraded to angular v8  
### Bug Fixes
- Supports all payment channels when none is passes  

## 2.3.3 - 20-01-19
### Bug Fixes
- Nows upports dynamically updating paymentOptions (eg. Payment Ref #11)  

## 2.3.0 - 13-12-18
### Added
- Paystack script is imported dynamically

## 2.2.0 - 12-10-18
### Added
- Channels to options
- paymentInit event

## 2.1.0 - 2018-04-17
### Added
- Angular4Paystack directive
### Bug Fixes
- Fixed issue when more than one popup shows when user clicks on button more than once


## 2.0.0 - 2017-12-02
### Added
- You can now use the paystack inline embed in your angular application
- Added tests
### Changed
- updated README to show how to use the paystack inline embed and little fixes
### Removed
- Text input (`(text)`) is no longer supported for the `angular4-paystack` component. Check README for details


## 1.2.1 - 2017-10-04
### Changed
- updated readme to show that a callback is compulsory
- corrected `@angular/core` version in peerDependency


## 1.2.0 - 2017-09-22
### Changed
- text input `(text)` is now deprecated
- added example section
- updated readme


## 1.1.0 - 2017-09-21
### Changed
- Updated ReadMe and
### Removed
- removed unecessary packaged file
### Fixed
- Some minor bugs


## 1.0.0 - 2017-09-20
- Initial release

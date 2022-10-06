# @nodecfdi/cfdi-to-json ChangeLog

## 1.2.2

### Fix fs resolve

- fix: fs resolve for bundlers like webpack, rollup, vite, etc

## 1.2.1

### Text Node Support

- Added support to read content of text nodes for more information check [phpcfdi/cfdi-to-json VERSION 0.3.2](https://github.com/phpcfdi/cfdi-to-json/releases/tag/v0.3.2)
- Update dependencies
- Small refactoring for eslint rules

## 1.2.0

### DOM Agnostic support

- added support to dom agnostic
- remove @xmldom/xmldom dependency and use @nodecfdi/cfdiutils-common dependency

### CI

- Update workflow for use pnpm and better test coverage
- Added SonarCloud for better continuous code quality

## 1.1.0

- Best support for type modeling root data
- Support for node and browser
- Change build to microbundle
- Small fixes and refactoring
- Resolve multiple `CfdiRelacionados`

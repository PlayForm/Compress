## 2.4.1

## 2.4.0

## 2.3.9

### Change

- Updated package version from `2.3.8` to `2.3.9`.
- Updated contact email in `package.json` from `Source/Open@PlayForm.LTD` to
  `Source/Open@PlayForm.Cloud`.
- Updated URL in `package.json` from `HTTPS://PlayForm.LTD` to
  `HTTPS://PlayForm.Cloud`.
- Updated homepage URL in `package.json` to point to readme overview tab.
- Updated dependencies in `package.json`:
    - `@playform/pipe` from `0.1.3` to `0.1.4`.
    - `astro` from `*` to `5.16.8`.
    - `commander` from `13.1.0` to `14.0.2`.
    - `lightningcss` from `1.29.3` to `1.30.2`.
    - `sharp` from `0.33.5` to `0.34.5`.
    - `svgo` from `3.3.2` to `4.0.0`.
    - `terser` from `5.39.0` to `5.44.1`.
    - `@playform/build` from `0.2.1` to `0.2.6`.
    - `browserslist` from `4.24.4` to `4.28.1`.
- Removed `@ts-expect-error` comment in `Configuration/ESBuild.ts`.
- Reordered import statements in `Source/Function/Image/Writesharp.ts`.
- Reordered import statements in `Source/Function/Integration.ts`.
- Enhanced `JSON` type definition in `Source/Interface/Option.ts` to support
  replacer and space options.

## 2.3.8

### Add

- Support for JSON file compression with automatic parsing and minification
- JSON compression enabled by default in configuration

## 2.3.7

### Add

- Add `DEPENDENTS.md` to `.npmignore`.

### Change

- Updated package version from `2.3.5` to `2.3.6`.
- Updated contact email in `package.json` from `Source/Open@PlayForm.Cloud` to
  `Source/Open@PlayForm.LTD`.
- Updated URL in `package.json` from `HTTPS://PlayForm.Cloud` to
  `HTTPS://PlayForm.LTD`.
- Updated dependencies in `package.json`:
    - `@playform/pipe` from `0.1.1` to `0.1.2`.
    - `commander` from `12.1.0` to `13.0.0`.
    - `fast-glob` from `3.3.2` to `3.3.3`.
    - `lightningcss` from `1.27.0` to `1.28.2`.
    - `terser` from `5.36.0` to `5.37.0`.
    - `@playform/build` from `0.1.8` to `0.2.1`.
    - `browserslist` from `4.24.2` to `4.24.4`.

### Fix

- Modified `Cache.Search` assignment in `Integration.ts` to ensure `Directory`
  is converted to a string using `Directory.toString()`.

## 2.3.6

### Add

- Add `DEPENDENTS.md` to `.npmignore`.

### Change

- Updated package version from `2.3.5` to `2.3.6`.
- Updated contact email in `package.json` from `Source/Open@PlayForm.Cloud` to
  `Source/Open@PlayForm.LTD`.
- Updated URL in `package.json` from `HTTPS://PlayForm.Cloud` to
  `HTTPS://PlayForm.LTD`.
- Updated dependencies in `package.json`:
    - `@playform/pipe` from `0.1.1` to `0.1.2`.
    - `commander` from `12.1.0` to `13.0.0`.
    - `fast-glob` from `3.3.2` to `3.3.3`.
    - `lightningcss` from `1.27.0` to `1.28.2`.
    - `terser` from `5.36.0` to `5.37.0`.
    - `@playform/build` from `0.1.8` to `0.2.1`.
    - `browserslist` from `4.24.2` to `4.24.4`.

### Fix

- Modified `Cache.Search` assignment in `Integration.ts` to ensure `Directory`
  is converted to a string using `Directory.toString()`.

## 2.3.5

### Add

- New Configuration folder with `ESBuild.js` and `ESBuild.ts` files
- Add browserslist as a development dependency

### Change

- Updated `.npmignore` to exclude the `Configuration/` directory
- Modified `package.json` scripts to use the new `ESBuild` configuration
- Updated version to `0.1.6`
- Enhanced error handling in CSS compression in Source/Function/Integration.ts
- Updated `Source/Interface/CSS/lightningcss.ts` to set default value for
  `unusedSymbols`
- Add targets to `Source/Variable/CSS/lightningcss.ts`

## 2.3.4

### Change

- Updated dependencies
- Typings update

## 2.3.3

### Fix

- Fixes missing `Pipe.js`

## 2.3.2

### Add

- New CLI functionality with `Compress` command
- New `CLI.ts` and `Pipe.ts` functions for improved command-line operations
- Add `commander` dependency for CLI support
- Add `fast-glob` dependency for file pattern matching

### Change

- Updated package name from `astro-compress` to `@playform/compress`
- Updated various dependencies to their latest versions:
    - `@playform/pipe` from `0.1.0` to `0.1.1`
    - `deepmerge-ts` from `7.1.0` to `7.1.1`
    - `lightningcss` from `1.25.1` to `1.27.0`
    - `sharp` from `0.33.4` to `0.33.5`
    - `svgo` from `4.0.0-rc.0` to `3.3.2`
    - `terser` from `5.31.3` to `5.34.1`
    - `@playform/build` from `0.1.3` to `0.1.7`
- Refactored and improved various TypeScript interfaces and types
- Updated `README` with new installation instructions and badge styling
- Updated `README` badges to use HTTPS URLs
- Updated `README` table layout for better visual presentation
- Updated dependency badges in `README` to use correct package name
  (`@playform/compress` instead of `@playform/inline`)
- Updated `README` to remove unnecessary line breaks and improve spacing
- Updated `Source/Function/Image/Writesharp.ts` to simplify an import statement
- Add `Source/Function/CLI.ts` for command-line interface functionality
- Add `Source/Interface/CLI.ts` to define the command-line interface
- Updated `package.json` to include necessary CLI dependencies

### Removed

- Removed `Documentation/` directory (replaced with `docs/`)
- Removed `Summary.md` file

### Fix

- Various code improvements and refactoring for better type safety and
  performance
- Fix broken links in `README` badges
- Fix alignment and spacing issues in `README` table
- Fix incorrect package name in dependency badges

## 2.3.1

### Change

- Updated .npmignore file:
    - Reordered ignored directories and files
    - Add `Summary.md` to ignored files

### Fix

- Improved code formatting in Source/Function/Image/Writesharp.ts:
    - Simplified import statement for default sharp options

## 2.3.0

### Change

- Updated TODO comments in Integration.ts and Middleware.ts

## 2.2.28

### Change

- Updated lightningcss interface and options

## 2.2.27

### Change

- Reordered CSS processing in Integration.ts (lightningcss now runs before csso)

## 2.2.26

### Change

- Minor formatting changes and comma additions

## 2.2.25

No changes recorded in this version.

## 2.2.24

### Change

- Updated sharp configuration in Integration.ts
- Removed Merge.ts interface

## 2.2.23

### Change

- Updated CSS processing in Integration.ts to support both csso and lightningcss
- Minor updates to sharp configuration and error handling

## 2.2.22

### Change

- Updated import paths to use @ prefix
- Renamed some Type interfaces to Interface
- Updated sharp configuration and processing
- Add support for lightningcss
- Updated various option configurations

## 2.2.21

This version marks the beginning of the recorded changes.

### Add

- Significant project restructuring with separate directories for Source,
  Interface, Type, and Variable
- New modules and interfaces for CSS, HTML, Image, JavaScript, and SVG file
  types
- Utility functions: Directory and Merge
- Expanded support for additional image formats and optimization options
- Enhanced error handling and logging
- New "Run" script for building and watching `Source/\*_/_.ts` files
- Add svgo `v4.0.0`-rc.0 dependency
- Add terser v5.31.3 dependency

### Change

- Major refactoring of the integration functionality in
  Source/Function/Integration.ts
- Moved configuration options to separate files in the Variable directory
- Updated and expanded type definitions throughout the project
- Modularized and improved compression logic for different file types
- Overall code structure is now more modular and type-safe

### Dependency Updates

- Add svgo `v4.0.0`-rc.0
- Change astro dependency to use any version (\*)
- Updated `@playform/build` to `v0.1.2`
- Updated `@playform/pipe` to `v0.1.0`
- Updated lightningcss to `v1.25.1`
- Updated sharp to `v0.33.4`
- Updated terser to `v5.31.3`

### Removed

- Removed specific version for astro dependency

## 0.0.13

### Removed

- Removed `@playform/document` from peerDependencies and peerDependenciesMeta

## 0.0.12

### Change

- Updated astro to use any version (\*)

## 0.0.10

### Add

- Add "@playform/compress" and "playform" to keywords
- Add astro `v4.9.2` as a dependency

### Change

- Updated description to "🗜️ Compress —"
- Updated homepage, bugs, and repository URLs
- Updated author information
- Updated `@playform/pipe` to `v0.0.5`
- Updated lightningcss to `v1.25.1`
- Updated sharp to `v0.33.4`
- Updated svgo to `v3.3.2`
- Updated terser to `v5.31.0`

## 0.0.9

### Add

- Add astro `v4.9.2` as a dependency

### Change

- Moved `@playform/build` to `devDependencies`

### Removed

- Removed peerDependencies and peerDependenciesMeta

## 0.0.8

### Change

- Updated lightningcss to `v1.25.1`

## 0.0.7

### Removed

- Removed `@playform/document` from peerDependencies and peerDependenciesMeta

## 0.0.6

### Change

- Reordered peerDependencies and peerDependenciesMeta

## 0.0.5

### Add

- Add "Document" script for documenting `Source/\*_/_.ts` files
- Add `@playform/document` v0.0.7 as a peerDependency

### Change

- Updated `@playform/pipe` to `v0.0.5`
- Updated lightningcss to `v1.25.0`
- Updated sharp to `v0.33.4`
- Updated svgo to `v3.3.2`
- Updated terser to `v5.31.0`
- Updated `@playform/build` to `v0.0.9`
- Updated astro peerDependency to `v4.9.1`

## 0.0.4

### Add

- Add "@playform/compress" to keywords
- Add astro `v4.8.1` as a dependency

### Change

- Updated description to "🗜️ Compress —"
- Updated homepage, bugs, and repository URLs to use HTTPS
- Updated author information
- Updated `@playform/pipe` to `v0.0.3`
- Moved `@playform/build` to `devDependencies`

### Removed

- Removed "Document" script

## 0.0.3

### Add

- Add `@playform/build`, `@playform/document`, and astro as dependencies

### Change

- Moved `csso`, `html-minifier-terser`, `lightningcss`, `sharp`, `svgo`, and
  `terser` to dependencies

## 0.0.2

### Change

- Reverted various changes from previous versions

## 0.0.1

### Add

- Initial setup of AstroCompress integration
- Implemented various compression functions for CSS, HTML, JavaScript, Images,
  and SVG
- Add configuration options for different file types
- Set up basic project structure with separate files for different
  functionalities

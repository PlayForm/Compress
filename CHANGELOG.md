## 0.2.4

### Change

- Bumped package version from 0.2.3 to 0.2.4
- Updated dependencies to latest versions:
    - `@playform/pipe` (0.1.5 → 0.1.6)
    - `@types/csso` (5.0.4 → 5.0.5)
    - `commander` (14.0.3 → 15.0.0)
    - `lightningcss` (1.32.0 → 1.33.0)
    - `sharp` (0.34.5 → 0.35.3)
    - `svgo` (4.0.1 → 4.0.2)
    - `terser` (5.46.1 → 5.49.2)
    - `@playform/build` (0.3.1 → 0.3.4)
    - `browserslist` (4.28.2 → 4.28.7)
- Updated `tsconfig.json` to replace `baseUrl` with path aliases:
    - `@Function/*` → `./Source/Function/*`
    - `@Interface/*` → `./Source/Interface/*`
    - `@Type/*` → `./Source/Type/*`
    - `@Variable/*` → `./Source/Variable/*`

## 0.2.3

### Change

- Removed `Configuration/` from `.npmignore` to include type definitions in the
  package.
- Updated dependencies to latest versions:
    - `@playform/pipe` (0.1.4 → 0.1.5)
    - `terser` (5.46.0 → 5.46.1)
    - `@playform/build` (0.3.0 → 0.3.1)
    - `browserslist` (4.28.1 → 4.28.2)

## 0.2.2

- Fix `astro` version to \* in dependencies

## 0.2.1

### Change

- Updated dependencies to latest versions:
    - `@playform/pipe` (0.1.3 → 0.1.4)
    - `astro` (^5.9.2 → 5.16.8)
    - `commander` (14.0.0 → 14.0.2)
    - `lightningcss` (1.30.1 → 1.30.2)
    - `sharp` (0.34.2 → 0.34.5)
    - `svgo` (3.3.2 → 4.0.0)
    - `terser` (5.42.0 → 5.44.1)
    - `@playform/build` (0.2.4 → 0.2.6)
    - `browserslist` (4.25.0 → 4.28.1)
- Updated homepage URL in package.json to point to readme overview tab
- Removed `@ts-expect-error` comment in ESBuild configuration files
- Bumped package version from 0.2.0 to 0.2.1

## 0.2.0

### Breaking Change

- Updated `commander` dependency from 13.1.0 → 14.0.0 (major version update)

### Change

- Updated contact information in package.json to use `PlayForm.Cloud` domain
- Updated dependencies to latest versions:
    - `astro` (wildcard → ^5.9.2)
    - `lightningcss` (1.29.3 → 1.30.1)
    - `sharp` (0.33.5 → 0.34.2)
    - `terser` (5.39.0 → 5.42.0)
    - `@playform/build` (0.2.1 → 0.2.4)
    - `browserslist` (4.24.4 → 4.25.0)
- Refactored option interfaces to use `Partial<>` type for more flexible
  configuration
- Improved code organization in:
    - Image processing module (Writesharp.ts)
    - Core integration logic (Integration.ts)

### Add

- Enhanced JSON compression options with configurable `replacer` and `space`
  parameters for `JSON.stringify`

## 0.1.9

### Add

- Support for JSON file compression with automatic parsing and minification
- JSON compression enabled by default in configuration

## 0.1.8

### Change

- Updated core module imports to use Node.js `node:` protocol for `fs`, `path`,
  and `buffer`
- Updated dependencies to latest versions:
    - `commander` (13.0.0 → 13.1.0)
    - `deepmerge-ts` (7.1.3 → 7.1.5)
    - `lightningcss` (1.28.2 → 1.29.3)
    - `terser` (5.37.0 → 5.39.0)
    - `browserslist` (4.24.3 → 4.24.4)
- Modified package metadata including:
    - Version bump to 0.1.8
    - Description formatting changes
    - Script name adjustments in package.json
- Changed default configuration to disable `lightningcss` compressor by default

### Add

- Support boolean type for compression options (`csso`, `lightningcss`,
  `html-minifier-terser`, `sharp`, `terser`, `svgo`) to allow disabling specific
  compressors

### Fix

- Fixed type casting in ESBuild configuration by explicitly specifying `Plugin`
  type
- Corrected import statements for Node.js core modules

## 0.1.7

### Add

- Dependents stats for PlayForm/Compress badge to `README.md`.
- `DEPENDENTS.md` file containing a list of repositories that depend on this
  package.

### Change

- Updated `package.json` to include updated contact information and package
  dependencies.
- Updated `README.md` to reflect the updated organization name in the URLs and
  images.

### Fix

- Corrected a bug in `Source/Function/Integration.ts` where `Cache.Search` was
  not being set correctly.

## 0.1.6

### Add

- New Configuration folder with ESBuild.js and ESBuild.ts files
- Added browserslist as a development dependency

### Change

- Updated .npmignore to exclude the Configuration/ directory
- Modified package.json scripts to use the new ESBuild configuration
- Updated version to 0.1.6
- Enhanced error handling in CSS compression in Source/Function/Integration.ts
- Updated Source/Interface/CSS/lightningcss.ts to set default value for
  unusedSymbols
- Added targets to Source/Variable/CSS/lightningcss.ts

## 0.1.5

### Change

- Updated dependencies
- Typings update

## 0.1.4

### Fix

- Fixes missing `Pipe.js`

## 0.1.2

### Add

- New CLI functionality with `Compress` command
- New `CLI.ts` and `Pipe.ts` functions for improved command-line operations
- Added `commander` dependency for CLI support
- Added `fast-glob` dependency for file pattern matching

### Change

- Updated package name from `astro-compress` to `astro-compress`
- Updated various dependencies to their latest versions:
    - `@playform/pipe` from 0.1.0 to 0.1.1
    - `deepmerge-ts` from 7.1.0 to 7.1.1
    - `lightningcss` from 1.25.1 to 1.27.0
    - `sharp` from 0.33.4 to 0.33.5
    - `svgo` from 4.0.0-rc.0 to 3.3.2
    - `terser` from 5.31.3 to 5.34.1
    - `@playform/build` from 0.1.3 to 0.1.7
- Refactored and improved various TypeScript interfaces and types
- Updated README with new installation instructions and badge styling
- Updated README badges to use HTTPS URLs
- Updated README table layout for better visual presentation
- Updated dependency badges in README to use correct package name
  (`astro-compress` instead of `@playform/inline`)
- Updated README to remove unnecessary line breaks and improve spacing
- Updated `Source/Function/Image/Writesharp.ts` to simplify an import statement
- Added `Source/Function/CLI.ts` for command-line interface functionality
- Added `Source/Interface/CLI.ts` to define the command-line interface
- Updated `package.json` to include necessary CLI dependencies

### Removed

- Removed `Documentation/` directory (replaced with `docs/`)
- Removed `Summary.md` file

### Fix

- Various code improvements and refactoring for better type safety and
  performance
- Fixed broken links in README badges
- Fixed alignment and spacing issues in README table
- Fixed incorrect package name in dependency badges

## 0.1.1

### Change

- Updated .npmignore file:
    - Reordered ignored directories and files
    - Added 'Summary.md' to ignored files

### Fix

- Improved code formatting in Source/Function/Image/Writesharp.ts:
    - Simplified import statement for default sharp options

## 0.1.0

### Add

- Significant project restructuring with separate directories for Source,
  Interface, Type, and Variable
- New modules and interfaces for CSS, HTML, Image, JavaScript, and SVG file
  types
- Utility functions: Directory and Merge
- Expanded support for additional image formats and optimization options
- Enhanced error handling and logging
- New "Run" script for building and watching 'Source/\*_/_.ts' files
- Added svgo v4.0.0-rc.0 dependency
- Added terser v5.31.3 dependency

### Change

- Major refactoring of the integration functionality in
  Source/Function/Integration.ts
- Moved configuration options to separate files in the Variable directory
- Updated and expanded type definitions throughout the project
- Modularized and improved compression logic for different file types
- Overall code structure is now more modular and type-safe

### Dependency Updates

- Added svgo v4.0.0-rc.0
- Changed astro dependency to use any version (\*)
- Updated @playform/build to v0.1.2
- Updated @playform/pipe to v0.1.0
- Updated lightningcss to v1.25.1
- Updated sharp to v0.33.4
- Updated terser to v5.31.3

### Removed

- Removed specific version for astro dependency

## 0.0.13

### Removed

- Removed @playform/document from peerDependencies and peerDependenciesMeta

## 0.0.12

### Change

- Updated astro to use any version (\*)

## 0.0.10

### Add

- Added "astro-compress" and "playform" to keywords
- Added astro v4.9.2 as a dependency

### Change

- Updated description to "🗜️ Compress -"
- Updated homepage, bugs, and repository URLs
- Updated author information
- Updated @playform/pipe to v0.0.5
- Updated lightningcss to v1.25.1
- Updated sharp to v0.33.4
- Updated svgo to v3.3.2
- Updated terser to v5.31.0

## 0.0.9

### Add

- Added astro v4.9.2 as a dependency

### Change

- Moved @playform/build to devDependencies

### Removed

- Removed peerDependencies and peerDependenciesMeta

## 0.0.8

### Change

- Updated lightningcss to v1.25.1

## 0.0.7

### Removed

- Removed @playform/document from peerDependencies and peerDependenciesMeta

## 0.0.6

### Change

- Reordered peerDependencies and peerDependenciesMeta

## 0.0.5

### Add

- Added "Document" script for documenting 'Source/\*_/_.ts' files
- Added @playform/document v0.0.7 as a peerDependency

### Change

- Updated @playform/pipe to v0.0.5
- Updated lightningcss to v1.25.0
- Updated sharp to v0.33.4
- Updated svgo to v3.3.2
- Updated terser to v5.31.0
- Updated @playform/build to v0.0.9
- Updated astro peerDependency to v4.9.1

## 0.0.4

### Add

- Added "astro-compress" to keywords
- Added astro v4.8.1 as a dependency

### Change

- Updated description to "🗜️ Compress -"
- Updated homepage, bugs, and repository URLs to use HTTPS
- Updated author information
- Updated @playform/pipe to v0.0.3
- Moved @playform/build to devDependencies

### Removed

- Removed "Document" script

## 0.0.3

### Add

- Added @playform/build, @playform/document, and astro as dependencies

### Change

- Moved csso, html-minifier-terser, lightningcss, sharp, svgo, and terser to
  dependencies

## 0.0.2

### Change

- Reverted various changes from previous versions

## 0.0.1

### Add

- Initial release

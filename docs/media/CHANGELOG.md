<<<<<<< HEAD:docs/media/CHANGELOG.md
## 0.1.2

### Added

-   New CLI functionality with `Compress` command
-   New `CLI.ts` and `Pipe.ts` functions for improved command-line operations
-   Added `commander` dependency for CLI support
-   Added `fast-glob` dependency for file pattern matching

### Changed

-   Updated package name from `astro-compress` to `@playform/compress`
-   Updated various dependencies to their latest versions:
    -   `@playform/pipe` from 0.1.0 to 0.1.1
    -   `deepmerge-ts` from 7.1.0 to 7.1.1
    -   `lightningcss` from 1.25.1 to 1.27.0
    -   `sharp` from 0.33.4 to 0.33.5
    -   `svgo` from 4.0.0-rc.0 to 3.3.2
    -   `terser` from 5.31.3 to 5.34.1
    -   `@playform/build` from 0.1.3 to 0.1.7
-   Refactored and improved various TypeScript interfaces and types
-   Updated README with new installation instructions and badge styling
-   Updated README badges to use HTTPS URLs
-   Updated README table layout for better visual presentation
-   Updated dependency badges in README to use correct package name
    (`@playform/compress` instead of `@playform/inline`)
-   Updated README to remove unnecessary line breaks and improve spacing
-   Updated `Source/Function/Image/Writesharp.ts` to simplify an import
    statement
-   Added `Source/Function/CLI.ts` for command-line interface functionality
-   Added `Source/Interface/CLI.ts` to define the command-line interface
-   Updated `package.json` to include necessary CLI dependencies

### Removed

-   Removed `Documentation/` directory (replaced with `docs/`)
-   Removed `Summary.md` file

### Fixed

-   Various code improvements and refactoring for better type safety and
    performance
-   Fixed broken links in README badges
-   Fixed alignment and spacing issues in README table
-   Fixed incorrect package name in dependency badges

## 0.1.1
=======
## 2.3.1
>>>>>>> c509b432f17e78bdee9fb589ef11d871e1faf8ea:Documentation/media/CHANGELOG.md

### Changed

-   Updated .npmignore file:
    -   Reordered ignored directories and files
    -   Added 'Summary.md' to ignored files

### Fixed

-   Improved code formatting in Source/Function/Image/Writesharp.ts:
    -   Simplified import statement for default sharp options

## 2.3.0

### Changed

-   Updated TODO comments in Integration.ts and Middleware.ts

## 2.2.28

### Changed

-   Updated lightningcss interface and options

## 2.2.27

### Changed

-   Reordered CSS processing in Integration.ts (lightningcss now runs before
    csso)

## 2.2.26

### Changed

-   Minor formatting changes and comma additions

## 2.2.25

No changes recorded in this version.

## 2.2.24

### Changed

-   Updated sharp configuration in Integration.ts
-   Removed Merge.ts interface

## 2.2.23

### Changed

-   Updated CSS processing in Integration.ts to support both csso and
    lightningcss
-   Minor updates to sharp configuration and error handling

## 2.2.22

### Changed

-   Updated import paths to use @ prefix
-   Renamed some Type interfaces to Interface
-   Updated sharp configuration and processing
-   Added support for lightningcss
-   Updated various option configurations

## 2.2.21

This version marks the beginning of the recorded changes.

### Added

<<<<<<< HEAD:docs/media/CHANGELOG.md
-   Significant project restructuring with separate directories for Source,
    Interface, Type, and Variable
-   New modules and interfaces for CSS, HTML, Image, JavaScript, and SVG file
    types
-   Utility functions: Directory and Merge
-   Expanded support for additional image formats and optimization options
-   Enhanced error handling and logging
-   New "Run" script for building and watching 'Source/\*_/_.ts' files
-   Added svgo v4.0.0-rc.0 dependency
-   Added terser v5.31.3 dependency

### Changed

-   Major refactoring of the integration functionality in
    Source/Function/Integration.ts
-   Moved configuration options to separate files in the Variable directory
-   Updated and expanded type definitions throughout the project
-   Modularized and improved compression logic for different file types
-   Overall code structure is now more modular and type-safe

### Dependency Updates

-   Added svgo v4.0.0-rc.0
-   Changed astro dependency to use any version (\*)
-   Updated @playform/build to v0.1.2
-   Updated @playform/pipe to v0.1.0
-   Updated lightningcss to v1.25.1
-   Updated sharp to v0.33.4
-   Updated terser to v5.31.3

### Removed

-   Removed specific version for astro dependency

## 0.0.13

### Removed

-   Removed @playform/document from peerDependencies and peerDependenciesMeta

## 0.0.12

### Changed

-   Updated astro to use any version (\*)

## 0.0.10

### Added

-   Added "@playform/compress" and "playform" to keywords
-   Added astro v4.9.2 as a dependency

### Changed

-   Updated description to "🗜️ Compress —"
-   Updated homepage, bugs, and repository URLs
-   Updated author information
-   Updated @playform/pipe to v0.0.5
-   Updated lightningcss to v1.25.1
-   Updated sharp to v0.33.4
-   Updated svgo to v3.3.2
-   Updated terser to v5.31.0

## 0.0.9

### Added

-   Added astro v4.9.2 as a dependency

### Changed

-   Moved @playform/build to devDependencies

### Removed

-   Removed peerDependencies and peerDependenciesMeta

## 0.0.8

### Changed

-   Updated lightningcss to v1.25.1

## 0.0.7

### Removed

-   Removed @playform/document from peerDependencies and peerDependenciesMeta

## 0.0.6

### Changed

-   Reordered peerDependencies and peerDependenciesMeta

## 0.0.5

### Added

-   Added "Document" script for documenting 'Source/\*_/_.ts' files
-   Added @playform/document v0.0.7 as a peerDependency

### Changed

-   Updated @playform/pipe to v0.0.5
-   Updated lightningcss to v1.25.0
-   Updated sharp to v0.33.4
-   Updated svgo to v3.3.2
-   Updated terser to v5.31.0
-   Updated @playform/build to v0.0.9
-   Updated astro peerDependency to v4.9.1

## 0.0.4

### Added

-   Added "@playform/compress" to keywords
-   Added astro v4.8.1 as a dependency

### Changed

-   Updated description to "🗜️ Compress —"
-   Updated homepage, bugs, and repository URLs to use HTTPS
-   Updated author information
-   Updated @playform/pipe to v0.0.3
-   Moved @playform/build to devDependencies

### Removed

-   Removed "Document" script

## 0.0.3

### Added

-   Added @playform/build, @playform/document, and astro as dependencies

### Changed

-   Moved csso, html-minifier-terser, lightningcss, sharp, svgo, and terser to
    dependencies

## 0.0.2

### Changed

-   Reverted various changes from previous versions

## 0.0.1

### Added

-   Initial release
=======
-   Initial setup of AstroCompress integration
-   Implemented various compression functions for CSS, HTML, JavaScript, Images,
    and SVG
-   Added configuration options for different file types
-   Set up basic project structure with separate files for different
    functionalities
>>>>>>> c509b432f17e78bdee9fb589ef11d871e1faf8ea:Documentation/media/CHANGELOG.md

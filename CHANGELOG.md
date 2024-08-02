## 0.1.1

## 0.1.0

### Added

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

-   Added "astro-compress" and "playform" to keywords
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

-   Added "astro-compress" to keywords
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

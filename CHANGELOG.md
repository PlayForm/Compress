## 2.3.1

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

-   Initial setup of AstroCompress integration
-   Implemented various compression functions for CSS, HTML, JavaScript, Images,
    and SVG
-   Added configuration options for different file types
-   Set up basic project structure with separate files for different
    functionalities

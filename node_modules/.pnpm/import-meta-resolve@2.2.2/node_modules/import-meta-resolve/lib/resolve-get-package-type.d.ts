/**
 * @param {URL} url
 * @returns {PackageType}
 */
export function getPackageType(url: URL): PackageType
export type PackageType = import('./package-config.js').PackageType

/**
 * The function `JSON` is a TypeScript function that reads a JSON file and returns its parsed content.
 * @param {string} File - The `File` parameter is a string that represents the name or path of the JSON
 * file that you want to parse.
 * @param {string} From - The `From` parameter is a string that represents the source URL or file path
 * from which the JSON file will be loaded. It is set to `import.meta.url` by default, which refers to
 * the URL of the current module. However, if a different source URL or file path is provided,
 */
declare const _default: (File: string, From?: string) => Promise<any>;
export default _default;

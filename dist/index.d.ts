import type { AstroIntegration } from "astro";
import Options from "./options";
/**
 * It takes in an object of options, and returns an object with a name and a hook
 * @param {Options} integrationOptions - Options = {}
 * @returns A function that returns an object.
 */
export default function createPlugin(integrationOptions?: Options): AstroIntegration;

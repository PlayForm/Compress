import type { AstroIntegration } from "astro";
import Options from "./options";
export interface Files {
    [type: string]: string[];
}
export default function createPlugin(integrationOptions?: Options): AstroIntegration;

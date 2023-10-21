/**
 * @module Integration
 */
export default interface Integration {
    (Option: Option): AstroIntegration;
}
import type { AstroIntegration } from "astro";
import type Option from "../Interface/Option.js";

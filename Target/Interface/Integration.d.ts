import type { AstroIntegration } from "astro";
import type Option from "../Interface/Option.js";
/**
 * @module Integration
 *
 */
export default interface Interface {
    (Option?: Option): AstroIntegration;
}

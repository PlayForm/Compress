import type { Pattern } from "fast-glob";
import type { Plan } from "../../Option/Index.js";
declare const _default: (File: Pattern | Pattern[], Paths: Plan["Paths"], Results: Plan["Results"]) => Promise<Map<string, string>>;
export default _default;

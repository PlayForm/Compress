import type { Execution, Plan } from "../../Option/Index.js";
declare const _default: (Plan: Plan, { Fulfilled, Failed, Accomplished, Changed, Passed, Read, Wrote }: Execution) => Promise<Plan>;
export default _default;

// Ensure this is treated as a module.
export {};

declare global {
    interface Object {
        type<T>():
            "bigint" | "boolean" | "function" | "number" |
            "object" | "string" | "symbol" | "undefined";
    }
}

/**
 * Returns type of 'this'
 */
Object.prototype.type = function(): "bigint" | "boolean" | "function" | "number" |
    "object" | "string" | "symbol" | "undefined" {
    return typeof this;
};
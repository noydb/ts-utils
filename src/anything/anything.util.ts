/**
 * Returns true if the type of specified 'argument' is equal to the specified
 * 'type' argument.
 *
 * @param argument whose type is being evaluated.
 * @param type to compare with the first arg's type.
 */
export function isType(argument: any,
                         type: "bigint" | "boolean" | "function" | "number"
                             | "object" | "string" | "symbol" | "undefined"): boolean {
    return typeof argument === type;
}
// Ensure this is treated as a module.
export {};

declare global {
    interface Object {
        isOfType<T>(v: any): boolean;
    }
}

/**
 * Returns true if the type of 'this' is equal to the value of the specified
 * arguments. I prefer this to
 * ```
 * typeof <x> === '...'
 * ```
 *
 * @param argument used to compare against 'this' and its type.
 */
Object.prototype.isOfType = function(argument: string): boolean {
    return typeof this === argument;
};
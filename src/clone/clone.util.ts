/**
 * Clones the provided argument.
 * "Techniques" for differing variables:
 * - array: [...spread]
 * - boolean: Boolean(value)
 * - object: { ...spread }
 * - number: number. (primitive, correct? has no reference)
 * - string: interpolation (cheeky)
 *
 * Do not ask me why spread. I will add a note in TECH.md
 *
 * @param argument to be cloned.
 */
import { areIdentical, isNull } from "../object/object.util";
import { CloneError } from "../error/clone.error";

export function clone(argument: unknown | unknown[]): unknown {
    if (Array.isArray(argument)) {
        return [...argument];
    }

    switch (typeof argument) {
        case "boolean":
            return Boolean(argument);
        case "undefined":
            return undefined;
        case "object":
            // null = "nothing" (does not exist).
            // unfortunately typeof null is object in JS. consider it a bug.
            return isNull(argument) ? null : { ...argument };
        case "number":
            return argument;
        case "string":
            return `${ argument }`;
    }

    throw new CloneError("what have you given me?");
}

/**
 * Same as above but provides an extra layer of "reassurance".
 * Was the clone successful? Are the objects identical - according to me?
 * Do you want to run an identity check using my areIdentical function, free
 * of charge?
 *
 * @param argument to be cloned and subsequently validated against its clone
 * @throws CloneError if the argument is not identical to its clone
 */
export function cloneWithValidation(argument: unknown | unknown[]): unknown {
    const argumentClone: unknown = clone(argument);

    areIdentical(argument, argument);

    const argumentsIdentical: boolean = areIdentical(argument, argumentClone);

    if (!argumentsIdentical) {
        throw new CloneError("the cloned object is not identical to the original");
    }

    return clone;
}
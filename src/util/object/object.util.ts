/**
 * TODO: write doc.
 * // how to handle object referencing itself?
 *
 * @param first to be compared against the 'second' argument for identicalness.
 * @param second to be compared against the 'second' argument for identicalness.
 */
export function areIdentical(first: unknown, second: unknown): boolean {
    if (typeof first !== typeof second) {
        return false;
    }

    const firstZilch: boolean = isZilch(first);
    const secondZilch: boolean = isZilch(second);

    if (firstZilch && secondZilch) {
        return true;
    } else if (firstZilch || secondZilch) {
        return false;
    }

    switch (typeof first) {
        case "boolean":
            return first === second;
        case "number":
            return first === second;
        case "object":
            return areIdenticalObjects(first as object, second as object);
        case "string":
            return first === second;
    }

    return true;
}

/**
 * TODO: write doc.
 *
 * @param first to be compared with the 'second' argument for identicalness.
 * @param second to be compared with the 'second' argument for identicalness.
 */
function areIdenticalObjects(first: object, second: object): boolean {
    let firstKeys: string[] = Object.keys(first);
    let secondKeys: string[] = Object.keys(second);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    firstKeys = firstKeys.sort();
    secondKeys = secondKeys.sort();

    const firstKeysLength: number = firstKeys.length;
    for (let i = 0; i < firstKeysLength; i++) {
        // Worth nothing: keys are always of type string. Surely a key could be a
        // number? we are doing this because our core comparison logic relies on
        // the keys in both lists being ordered identically - the objects are
        // compared side-by-side, so to say.
        // TODO: add this note to the doc. keep an inline comment here though.
        if (firstKeys[i] !== secondKeys[i]) {
            return false;
        }
    }

    for (let i: number = 0; i < firstKeysLength; i++) {
        const key: string = firstKeys[i];
        const firstValue: unknown = first[key];
        const secondValue: unknown = second[key];

        if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
            const areIdenticalArrays: boolean = identicalArray(firstValue, secondValue);
            if (!areIdenticalArrays) {
                return false;
            }
        }

        if (!areIdentical(firstValue, secondValue)) {
            return false;
        }
    }

    return true;
}

/**
 * Returns true if the values of the two specified arrays are identical - that is,
 * every element belonging to argument 'first', has a corresponding identical
 * element in argument 'second'.
 *
 * TODO: provide code examples of true and false results.
 * TODO: Elaborate further on logic, if possible.
 *
 * @param first to be compared with the 'second' argument for identicalness.
 * @param second to be compared with the 'first' argument for identicalness.
 */
function identicalArray(first: unknown[], second: unknown[]): boolean {
    const firstArgumentLength: number = first.length;
    const secondArgumentLength: number = second.length;

    if (firstArgumentLength !== secondArgumentLength) {
        return false;
    }

    outer: for (let i: number = 0,
                    innerI: number = 0; i < firstArgumentLength; i++) {
        const firstObj = first[i];

        while (innerI < secondArgumentLength) {
            const secondObj: unknown = second[innerI];

            if (!areIdentical(firstObj, secondObj)) {
                return false;
            }

            innerI += 1;
            continue outer;
        }
    }

    return true;
}

/**
 * Would this function cover all the cases of the function immediately below it
 * (#isZilch)? If so, deprecate #isZilch, or change its logic to this function's.
 *
 * @param argument are you nothing?
 */
export function isZilchXPERIMENT(argument: unknown): boolean {
    // duh?
    return !!argument;
}

/**
 * Returns true if the value of the specified argument is Nothing.
 *
 * @param areUZilch are you nothing?
 */
export function isZilch(areUZilch: unknown): boolean {
    if (areUZilch === undefined || areUZilch === null) {
        return true;
    }

    switch (typeof areUZilch) {
        case "boolean":
            return areUZilch.not();
        case "string":
            return (areUZilch as string).trim() === "";
    }

    return false;
}

/**
 * Returns true if the value of specified argument is undefined.
 *
 * @param argument are you undefined?
 */
export function isUndefined(argument: unknown): boolean {
    return argument === undefined;
}

/**
 * Returns true if the value of the specified argument is undefined.
 *
 * @param argument are you undefined?
 */
export function isNull(argument: unknown): boolean {
    return argument === null;
}

/**
 * Returns true if the value of the specified argument is null or undefined.
 *
 * @param argument are you null or undefined?
 */
export function isNullOrUndefined(argument: unknown): boolean {
    return isUndefined(argument) || isNull(argument);
}

/**
 * We have isNaN, how come we do not have isANumber?
 *
 * @param argument are you not not a (!isNaN...) number?
 */
export function isANumber(argument: unknown): boolean {
    return typeof argument === "number";
}
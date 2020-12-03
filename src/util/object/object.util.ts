/**
 * TODO: write doc.
 * how to handle object referencing itself?
 * array of arrays?
 * functions?
 *
 * @param first to be compared against the 'second' argument for identicalness.
 * @param second to be compared against the 'second' argument for identicalness.
 */
export function areIdentical(first: unknown, second: unknown): boolean {
    if (typeof first !== typeof second) {
        return false;
    }

    const firstIsZilch: boolean = !first;
    const secondIsZilch: boolean = !second;

    if (firstIsZilch && secondIsZilch) {
        return true;
    } else if (firstIsZilch || secondIsZilch) {
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

    const firstKeysLength: number = firstKeys.length;
    if (firstKeysLength !== secondKeys.length) {
        return false;
    }

    firstKeys = firstKeys.sort();
    secondKeys = secondKeys.sort();

    for (let i: number = 0; i < firstKeysLength; i++) {
        // we are doing this because our core comparison logic relies on
        // the keys in both lists being ordered identically - the objects are
        // compared side-by-side, so to speak.
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
        } else if (!areIdentical(firstValue, secondValue)) {
            return false;
        }
    }

    return true;
}

/**
 * Returns true if the values of the two specified arrays are identical - that is,
 * every element belonging to argument 'first', has a corresponding identical
 * element belonging to argument 'second'.
 *
 * TODO: provide code examples of true and false results.
 * TODO: Elaborate further on logic, if possible.
 *
 * @param first to be compared with the 'second' argument for identicalness.
 * @param second to be compared with the 'first' argument for identicalness.
 */
export function identicalArray(first: unknown[], second: unknown[]): boolean {
    const length: number = first.length;

    if (length !== second.length) {
        return false;
    }

    const firstMatchers: Matcher[] = buildMatcherList(first);
    const secondMatchers: Matcher[] = buildMatcherList(second);

    outer: for (let i: number = 0; i < length; i++) {
        for (let innerI: number = 0; i < length; innerI++) {
            const firstMatcher: Matcher = firstMatchers[i];
            const secondMatcher: Matcher = secondMatchers[innerI];

            if (secondMatcher.isIdentical) {
                continue;
            }

            if (areIdentical(firstMatcher.object, secondMatcher.object)) {
                firstMatcher.isIdentical = true;
                secondMatcher.isIdentical = true;

                continue outer;
            }
        }
    }

    for (let i: number = 0; i < length; i++) {
        if (!firstMatchers[i].isIdentical) {
            return false;
        }
    }

    for (let i: number = 0; i < length; i++) {
        if (!secondMatchers[i].isIdentical) {
            return false;
        }
    }

    return true;
}

const buildMatcherList = (array: unknown[]): Matcher[] => {
    return array.map((object: unknown) =>
        ({
            object,
            isIdentical: false
        })
    );
};

/**
 * Returns true if the value of the specified argument is undefined.
 *
 * @param argument are you undefined?
 */
export function isUndefined(argument: unknown): boolean {
    return argument === undefined;
}

/**
 * Returns true if the value of the specified argument is null.
 *
 * @param argument are you null?
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
 * We have isNaN, why do we not have isANumber?
 *
 * @param argument are you not not a (!isNaN...) number?
 */
export function isANumber(argument: unknown): boolean {
    return typeof argument === "number";
}

interface Matcher {
    object: unknown;
    isIdentical: boolean;
}
import { Matcher } from "../interface/matcher.interface";

/**
 * Returns true if the values of the specified 'first' & 'second' argument are
 * identical - that is, similar in every detail; exactly like. Keys are ordered
 * for each object and the values corresponding to said keys are then compared.
 *
 * Considerations for this utility:
 * Handling an object that references itself?
 * Comparing arrays of arrays?
 * Comparing functions?
 *
 * @param first to be compared against the 'second' argument for identicalness.
 * @param second to be compared against the 'second' argument for identicalness.
 */
export function areIdentical<T>(first: T, second: T): boolean {
    if (!first && !second) {
        return first === second;
    } else if (!first || !second) {
        return false;
    }

    switch (typeof first) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return first === second;
        case "object":
            return areIdenticalObjects(first, second);
    }

    return true;
}

/**
 * Returns true if the specified object arguments are identical. In this case,
 * identicalness is achieved by both arguments having the same keys and those
 * same keys having identical corresponding values.
 *
 * @param first to be compared with the 'second' argument for identicalness.
 * @param second to be compared with the 'second' argument for identicalness.
 */
function areIdenticalObjects<T>(first: T, second: T): boolean {
    const firstKeys: string[] = Object.keys(first).sort();
    const secondKeys: string[] = Object.keys(second).sort();

    const firstKeysLength: number = firstKeys.length;

    if (!areKeysValid(firstKeysLength, firstKeys, secondKeys)) {
        return false;
    }

    return compareObjects(first, second, firstKeys, firstKeysLength);
}

/**
 * Returns true if 'firstKeys' argument is equal to 'secondKeys' argument.
 *
 * @param firstKeysLength used to check if the lengths are equal.
 * @param firstKeys to be compared against 'secondKeys'
 * @param secondKeys to be compared against 'firstKeys'
 * @return boolean value indicating whether the specified Arrays (keys) are equal.
 */
const areKeysValid = (firstKeysLength: number, firstKeys: string[], secondKeys: string[]): boolean => {
    if (firstKeysLength !== secondKeys.length) {
        return false;
    }

    for (let i: number = 0 ; i < firstKeysLength ; i++) {
        if (firstKeys[i] !== secondKeys[i]) {
            return false;
        }
    }

    return true;
};

const compareObjects = <T>(first: T, second: T, firstKeys: string[], firstKeysLength: number): boolean => {
    for (let i: number = 0 ; i < firstKeysLength ; i++) {
        const key: string = firstKeys[i];
        const firstValue: T = first[key];
        const secondValue: T = second[key];

        if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
            if (!areIdenticalArrays(firstValue, secondValue)) {
                return false;
            }
        } else if (!areIdentical(firstValue, secondValue)) {
            return false;
        }
    }

    return true;
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

/* array util. situated here because of circular dependency.
 I would prefer to have it in its own file(array.util.ts) */

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
export function areIdenticalArrays<T>(first: T[], second: T[]): boolean {
    const length: number = first.length;

    if (length !== second.length) {
        return false;
    }

    const firstMatchers: Matcher<T>[] = buildMatcherList(first);
    const secondMatchers: Matcher<T>[] = buildMatcherList(second);
    compareArrayElements(firstMatchers, secondMatchers, length);

    return isMatcherValid(firstMatchers, length) && isMatcherValid(secondMatchers, length);
}

const buildMatcherList = <T>(array: T[]): Matcher<T>[] => {
    return array.map((object: T) =>
        ({
            object,
            isIdentical: false
        })
    );
};

/**
 * Checks if each element in 'firstMatchers' argument has a corresponding identical
 * element in 'secondMatchers' argument.
 *
 * @param firstMatchers to be compared with 'secondMatchers'
 * @param secondMatchers to be compared with 'firstMatchers'
 * @param length for iteration & caching purposes.
 */
const compareArrayElements = <T>(firstMatchers: Matcher<T>[], secondMatchers: Matcher<T>[], length: number): void => {
    outer: for (let i: number = 0 ; i < length ; i++) {
        for (let innerI: number = 0 ; i < length ; innerI++) {
            const firstMatcher: Matcher<T> = firstMatchers[i];
            const secondMatcher: Matcher<T> = secondMatchers[innerI];

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
};

/**
 * Returns true if all Matcher elements have a value corresponding true value for
 * 'isIdentical' field.
 *
 * @param matchers to be checked for validity.
 * @param length for iteration & caching purposes.
 */
const isMatcherValid = <T>(matchers: Matcher<T>[], length: number): boolean => {
    for (let i: number = 0 ; i < length ; i++) {
        if (!matchers[i].isIdentical) {
            return false;
        }
    }

    return true;
};

/* array util end */
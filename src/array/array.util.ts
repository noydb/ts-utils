import { areIdentical } from "../object/object.util";

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

interface Matcher<T> {
    object: T;
    isIdentical: boolean;
}
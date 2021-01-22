import { clone, cloneWithValidation } from "../../src/clone/clone.util";
import { areIdenticalArrays } from "../object/object.util";

// Ensure this is treated as a module.
export {};

declare global {

    /**
     * My augmentation of the Array interface; things I believe ought to belong.
     * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
     * @author bp
     */
    interface Array<T> {
        /**
         * Returns the first element belonging to 'this' Array.
         * TODO: does this return undefined if 'this' Array is empty? Is an undefined
         * TODO: check necessary?
         *
         * @return T object of type of 'this' Array.
         */
        first(): T;

        /**
         * Returns true if 'this' Array has a length of zero.
         *
         * @return boolean indicating whether 'this' Array has a length of zero.
         */
        isEmpty(): boolean;

        /**
         * Returns true if 'this' Array is identical to the specified 'array' argument.
         * Identical, meaning - as taken from the object.util.ts#areIdentical doc -
         * similar in every detail; exactly like. Logic works by checking if each
         * object in 'this' Array has an identical match in array two. (See further
         * elaboration pertaining to this logic on the areIdentical comment/doc).
         *
         * @param array to be compared against 'this' Array for identicalness.
         * @return boolean indicating whether the two arrays are identical.
         */
        isIdenticalTo(array: T[]): boolean;

        /**
         * Returns the last element belonging to 'this' Array.
         * TODO: does this return undefined if 'this' Array is empty? Is an undefined
         * TODO: check necessary?
         *
         * @return T object of type of 'this' Array.
         */
        last(): T;

        /**
         * Returns true if 'this' Array is longer than the specified 'array' argument.
         *
         * @param array to be compared with 'this' Array.
         * @return boolean indicating whether 'this' Array is longer than the specified
         * 'array'.
         */
        longerThan(array: T[]): boolean;

        /**
         * Returns true if 'this' Array is short than the specified 'array' argument.
         *
         * @param array to be compared with 'this' Array.
         * @return boolean indicating whether  'this' Array shorter than the
         * specified Array.
         */
        shorterThan(array: T[]): boolean;

        /**
         * Returns a [...spread] clone of the specified array.
         * @see clone inside clone.util.ts for more
         *
         * @param array to be cloned.
         */
        clone(array: T[]): T[];

        /**
         * Returns a [...spread] clone of the specified array and validates the
         * argument against its clone.
         * @see cloneWithValidation inside clone.util.ts for more
         *
         * @param array to be cloned and validated.
         */
        cloneWithValidation(array: T[]): T[];
    }
}

/* IMPLEMENTATIONS */
// use a regular function when using 'this', 'new', or arguments

Array.prototype.first = function<T>(): T {
    return this[0];
};

Array.prototype.isEmpty = function(): boolean {
    return 0 === this.length;
};

Array.prototype.isIdenticalTo = function<T>(array: T[]): boolean {
    return areIdenticalArrays(this, array);
};

Array.prototype.last = function<T>(): T {
    return this.isEmpty() ? undefined : this[this.length - 1];
};

Array.prototype.longerThan = function<T>(array: T[]): boolean {
    return this.length > array.length;
};

Array.prototype.shorterThan = function<T>(array: T[]): boolean {
    return this.length < array.length;
};

Array.prototype.clone = function<T>(array: T[]): T[] {
    // could this throw an error? what if undefined is passed in and returned?
    // undefined as Array<unknown> will surely break?
    return clone(array) as T[];
};

Array.prototype.cloneWithValidation = function<T>(array: T[]): T[] {
    // same as above inline comment
    return cloneWithValidation(array) as T[];
};
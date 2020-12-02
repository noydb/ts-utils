// Ensure this is treated as a module.
export {};

declare global {
    interface Array<T> {
        isEmpty(): boolean;

        first(): T;

        last(): T;

        longerThan(array: unknown[]): boolean;

        shorterThan(array: unknown[]): boolean;
    }
}

Array.prototype.isEmpty = function(): boolean {
    return 0 === this.length;
};

Array.prototype.first = function(): unknown {
    return this[0];
};

Array.prototype.last = function(): unknown {
    return this.isEmpty() ? undefined : this[this.length - 1];
};

Array.prototype.longerThan = function(array: unknown[]): boolean {
    return this.length > array.length;
};

Array.prototype.shorterThan = function(array: unknown[]): boolean {
    return this.length < array.length;
};

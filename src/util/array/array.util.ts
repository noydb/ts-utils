// Ensure this is treated as a module.
export {};

declare global {
    interface Array<T> {
        isEmpty(): boolean;
    }
}

Array.prototype.isEmpty = function () {
    return 0 === this.length;
};
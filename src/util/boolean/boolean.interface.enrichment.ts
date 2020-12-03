// Ensure this is treated as a module.
export {};

declare global {
    interface Boolean {
        not(): boolean;
    }
}

Boolean.prototype.not = function(): boolean {
    return !this;
};
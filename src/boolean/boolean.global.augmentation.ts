// Ensure this is treated as a module.
export {};

declare global {

    /**
     * My augmentation of the Boolean interface; things I think ought to belong.
     * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
     *
     * @author bp
     */
    interface Boolean {
        /**
         * Like how the testing frameworks do it...
         *
         * @return inverse value of 'this' Boolean.
         */
        not(): boolean;
    }
}

/* IMPLEMENTATIONS */

Boolean.prototype.not = function(): boolean {
    return !this;
};
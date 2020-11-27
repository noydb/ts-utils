interface Array<T> {
    isEmpty(): boolean;

    includes(searchElement: any, fromIndex?: number): boolean;
}

Array.prototype.isEmpty = function() {
    return 0 === this.length;
};
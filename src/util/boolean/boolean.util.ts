interface Boolean {
    not(): boolean;
}

Boolean.prototype.not = function() {
    return !this;
};
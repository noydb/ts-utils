export class CloneError extends Error {
    constructor(message?: string) {
        super(message);

        // needed?
        // Error.apply(this, arguments);
    }
}
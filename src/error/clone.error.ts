export class CloneError extends Error {
    constructor(message?: string) {
        super(message);

        // Error.apply(this, arguments);
    }
}
export function zilch(argument: unknown): boolean {
    if(argument === undefined || argument === null) {
        return true;
    }

    if(typeof argument === "string") {
        return (argument as string).trim() === "";
    }

    if(Array.isArray(argument)) {
        return argument.isEmpty();
    }

    return false;
}
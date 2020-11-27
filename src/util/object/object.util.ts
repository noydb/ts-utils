export function zilch(argument: unknown): boolean {
    if(argument === undefined || argument === null) {
        return true;
    }

    switch(typeof argument) {
        case "boolean":
            return argument.not();
        case "number":
            return argument === 0;
        case "string":
            return (argument as string).trim() === "";
    }

    if(Array.isArray(argument)) {
        return argument.isEmpty();
    }

    return false;
}
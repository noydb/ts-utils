export class BPObjectUtil {
    zilch(argument: unknown): boolean {
        if(argument === undefined) {
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

    not(argument: unknown): boolean {
        return this.zilch(argument).not();
    }
}
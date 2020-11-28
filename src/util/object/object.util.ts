export function identical(first: unknown, second: unknown): boolean {
    if (typeof first !== typeof second) {
        return false;
    }

    switch (typeof first) {
        case "boolean":
            return identicalBoolean(first as boolean, second as boolean);
        case "number":
            return identicalNumber(first as number, second as number);
        case "object":
            return identicalObject(first as Object, second as Object);
        case "string":
            return identicalString(first as string, second as string);
    }

    return true;
}

function identicalBoolean(first: boolean, second: boolean): boolean {
    return first === second;
}

function identicalNumber(first: number, second: number): boolean {
    return first === second;
}

function identicalString(first: string, second: string): boolean {
    return first === second;
}

function identicalObject(first: Object, second: Object): boolean {
    const firstKeys: string[] = Object.keys(first).sort();
    const secondKeys: string[] = Object.keys(second).sort();

    for (let i = 0; i < firstKeys.length; i++) {
        if (firstKeys[i] !== secondKeys[i]) {
            return false;
        }
    }

    for (const key of firstKeys) {
        const firstValue: unknown = first[key];
        const secondValue: unknown = second[key];

        if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
            return identicalArray(firstValue, secondValue);
        }

        if (!identical(firstValue, secondValue)) {
            return false;
        }
    }

    return true;
}

function identicalArray(first: Array<unknown>, second: Array<unknown>): boolean {
    if (zilch(first) && zilch(second)) {
        return true;
    }

    if (typeof first[0] !== "object") {
        const firstSorted: Array<unknown> = first.sort();
        const secondSorted: Array<unknown> = first.sort();

        for (let i = 0; i < firstSorted.length; i++) {
            if (!identical(firstSorted[i], secondSorted[i])) {
                return false;
            }
        }
    }

    const firstMatchMap: { [key: number]: boolean } = {};
    for (let i: number = 0; i < first.length; i++) {
        firstMatchMap[i] = false;
    }

    const secondMatchMap: { [key: number]: boolean } = {};
    for (let i: number = 0; i < second.length; i++) {
        secondMatchMap[i] = false;
    }

    for (let firstObj of first) {
        for (let secondObj of second) {
            if (identical(firstObj, secondObj)) {

                firstMatchMap[first.indexOf(firstObj)] = true;
                secondMatchMap[second.indexOf(secondObj)] = true;
            }
        }
    }

    for (const key of Object.keys(firstMatchMap)) {
        if (!firstMatchMap[Number(key)]) {
            return false;
        }
    }

    for (const key of Object.keys(secondMatchMap)) {
        if (!secondMatchMap[Number(key)]) {
            return false;
        }
    }

    return true;
}

export function zilch(argument: unknown): boolean {
    if (argument === undefined || argument === null) {
        return true;
    }

    switch (typeof argument) {
        case "boolean":
            return argument.not();
        case "number":
            return argument === 0;
        case "string":
            return (argument as string).trim() === "";
    }

    if (Array.isArray(argument)) {
        return argument.length === 0;
    }

    return false;
}
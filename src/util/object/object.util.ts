export function areIdentical(first: unknown, second: unknown): boolean {
    if (typeof first !== typeof second) {
        return false;
    }

    switch (typeof first) {
        case "boolean":
            return first === second;
        case "number":
            return first === second;
        case "object":
            return areIdenticalObjects(first as object, second as object);
        case "string":
            return first === second;
    }

    return true;
}

function areIdenticalObjects(first: object, second: object): boolean {
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

        if (!areIdentical(firstValue, secondValue)) {
            return false;
        }
    }

    return true;
}

function identicalArray(first: unknown[], second: unknown[]): boolean {
    if (isZilch(first) && isZilch(second)) {
        return true;
    }

    if (typeof first[0] !== "object") {
        const firstSorted: unknown[] = first.sort();
        const secondSorted: unknown[] = first.sort();

        for (let i = 0; i < firstSorted.length; i++) {
            if (!areIdentical(firstSorted[i], secondSorted[i])) {
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

    for (const firstObj of first) {
        for (const secondObj of second) {
            if (areIdentical(firstObj, secondObj)) {

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

export function isZilch(argument: unknown): boolean {
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
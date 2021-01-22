// Containing everything and anything to do with mocking values (Mostly involves
// generating objects for the areIdentical comparator functions).

/* INTERFACES */
export interface Person {
    firstName?: string;
    lastName?: string;
    age?: number;
    address?: Address;
    children?: Person[];
}

export interface Address {
    streetName?: string;
}

/* GENERATOR */
export class PersonGenerator {
    static get(noOfChildren: number = 0): Person {
        const person: Person = PersonGenerator.getFlat(0);

        for (let i: number = 1; i <= noOfChildren; i++) {
            person.children?.push(PersonGenerator.getChild(i));
        }

        return person;
    }

    private static getFlat(count: number): Person {
        return {
            firstName: `first ${ count }`,
            lastName: `last ${ count }`,
            address: {
                streetName: `name ${ count }`
            },
            age: count,
            children: []
        };
    }

    private static getChild(count: number): Person {
        return {
            firstName: `child first ${ count }`,
            lastName: `child last ${ count }`,
            address: {
                streetName: `child streetName ${ count }`
            },
            age: count,
            children: []
        };
    }
}

export class PersonAMocks {
    static readonly BASE: Person = {
        firstName: "firstName",
        lastName: "lastName",
        age: 40,
        address: {
            streetName: "streetName"
        }
    };

    static readonly MATCH_ONE: Person = {
        lastName: "lastName",
        age: 40,
        firstName: "firstName",
        address: {
            streetName: "streetName"
        }
    };

    static readonly FAIL_ONE: Person = {
        firstName: "firstName",
        lastName: "lastName",
        age: 40,
        address: {
            streetName: "streetName"
        },
        children: []
    };
}

export class PersonBMocks {
    static readonly BASE: Person = {
        ...PersonAMocks.BASE,
        children: [
            {
                firstName: "child firstName",
                lastName: "child lastName",
                age: 10,
                address: {
                    streetName: "streetName"
                }
            }
        ]
    };

    static readonly MATCH_ONE: Person = {
        ...PersonAMocks.BASE,
        children: [
            {
                firstName: "child firstName",
                lastName: "child lastName",
                age: 10,
                address: {
                    streetName: "streetName"
                }
            }
        ]
    };

    static readonly FAIL_ONE: Person = {
        ...PersonAMocks.BASE,
        children: [
            {
                firstName: "child firstName",
                lastName: "child lastName",
                age: 10,
                address: {
                    streetName: "streetName"
                }
            },
            {
                firstName: "child firstName",
                lastName: "child lastName",
                age: 10,
                address: {
                    streetName: "streetName"
                }
            }
        ]
    };
}
export class Mocks {
    static getPerson(noOfChildren: number = 0): Person {
        const person: Person = Mocks.getFlatPerson(0);

        for (let i: number = 1; i <= noOfChildren; i++) {
            person.children?.push(Mocks.getChild(i));
        }

        return person;
    }

    private static getFlatPerson(count: number): Person {
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
                streetName: `child streetNname ${ count }`
            },
            age: count,
            children: []
        };
    }
}

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
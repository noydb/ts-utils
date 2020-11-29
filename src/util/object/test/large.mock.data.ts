import { Person } from "../../../mock/person.interface";

export class Mocks {
    static getPerson(noOfChildren: number = 0): Person {
        const person: Person = Mocks.getFlatPerson(0);

        for (let i = 1; i <= noOfChildren; i++) {
            person.children?.push(Mocks.getFlatPerson(i));
        }

        return person;
    }

    private static getFlatPerson(count: number): Person {
        return {
            firstName: `first ${count}`,
            lastName: `last ${count}`,
            address: {
                streetName: `name ${count}`
            },
            age: count,
            children: []
        };
    }
}
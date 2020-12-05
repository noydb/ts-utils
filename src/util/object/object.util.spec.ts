import { Mocks, Person } from "../../mock/person.mock.data";
import { areIdentical } from "./object.util";

describe("object util", () => {

    describe("areIdentical", () => {
        describe(" will return false", () => {
            it("#1", () => {
                const result: boolean = areIdentical(PersonAMocks.BASE, PersonAMocks.FAIL_ONE);

                expect(result).toBeFalsy();
            });

            it("#2", () => {
                const result: boolean = areIdentical(undefined, null);

                expect(result).toBeFalsy();
            });

            it("#3", () => {
                const result: boolean = areIdentical(PersonBMocks.BASE, PersonBMocks.FAIL_ONE);

                expect(result).toBeFalsy();
            });

            it("#4", () => {
                const result: boolean = areIdentical({}, { b: 1 });

                expect(result).toBeFalsy();
            });

            it("#5", () => {
                const result: boolean = areIdentical({}, undefined);

                expect(result).toBeFalsy();
            });

            describe("#6 array test", () => {
                it.each([[1], [50], [100], [250], [500], [1000], [10000], [50000]])
                ("given %p children", (given: number) => {
                    const firstMock: Person = Mocks.getPerson(given);
                    const secondMock: Person = Mocks.getPerson(given * 2);

                    expect(areIdentical(firstMock, secondMock)).toBeFalsy();
                });
            });
        });

        describe("will return true ", () => {
            it("#1", () => {
                const result: boolean = areIdentical(undefined, undefined);

                expect(result).toBeTruthy();
            });

            it("#2", () => {
                const result: boolean = areIdentical(PersonAMocks.BASE, PersonAMocks.MATCH_ONE);

                expect(result).toBeTruthy();
            });

            it("#3", () => {
                const result: boolean = areIdentical(PersonBMocks.BASE, PersonBMocks.MATCH_ONE);

                expect(result).toBeTruthy();
            });

            it("given children on objects", () => {
                const mock: Person = Mocks.getPerson(2);

                expect(areIdentical(mock, mock)).toBeTruthy();
            });

            describe("#4 - array tests ", () => {
                it.each([[1], [50], [100], [250], [500], [1000], [10000], [50000]])
                ("given %p children on objects", (given: number) => {
                    const mock: Person = Mocks.getPerson(given);

                    expect(areIdentical(mock, mock)).toBeTruthy();
                });

                it.each([[1], [50], [100], [250], [500], [1000], [10000], [50000]])
                ("given %p children directly", (given: number) => {
                    const mock: Person = Mocks.getPerson(given);

                    expect(areIdentical(mock.children, mock.children)).toBeTruthy();
                });
            });
        });
    });
});

class PersonAMocks {
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

class PersonBMocks {
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
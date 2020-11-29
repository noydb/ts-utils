import { areIdentical, isZilch } from "./object.util";
import { Person } from "../../mock/person.interface";
import { Mocks } from "./test/large.mock.data";

describe("object util", () => {
    describe("isZilch", () => {
        it("should return true", () => {
            const result: boolean = isZilch(undefined);

            expect(result).toBeTruthy();
        });
    });

    describe("areIdentical", () => {
        describe("will return false #", () => {
            it("1", () => {
                const result: boolean = areIdentical(PersonAMocks.BASE, PersonAMocks.FAIL_ONE);

                expect(result).toBeFalsy();
            });

            it("2", () => {
                const result: boolean = areIdentical(undefined, null);

                expect(result).toBeFalsy();
            });

            // TODO: fix
            xit("3", () => {
                const result: boolean = areIdentical(PersonBMocks.BASE, PersonBMocks.FAIL_ONE);

                expect(result).toBeFalsy();
            });

            it("4", () => {
                const result: boolean = areIdentical({}, { b: 1 });

                expect(result).toBeFalsy();
            });
        });

        describe("will return true ", () => {
            it("#1", () => {
                const result: boolean = areIdentical(PersonAMocks.BASE, PersonAMocks.MATCH_ONE);

                expect(result).toBeTruthy();
            });

            it("#2", () => {
                const result: boolean = areIdentical(PersonBMocks.BASE, PersonBMocks.MATCH_ONE);

                expect(result).toBeTruthy();
            });

            describe("array test #", () => {
                it.each([[1], [50], [100], [250], [500], [1000]])
                ("%b", (given: number) => {
                    const mock: Person = Mocks.getPerson(given);

                    expect(areIdentical(mock, mock)).toBeTruthy();
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
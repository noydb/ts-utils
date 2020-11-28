import { identical, zilch } from "./object.util";
import { Person } from "../../mock/person.interface";

describe("object util", () => {
    describe("zilch", () => {
        it("should return true", () => {
            const result: boolean = zilch(undefined);

            expect(result).toBeTruthy();
        });
    });

    describe("identical", () => {
        it("should return true", () => {
            const result: boolean = identical(PersonAMocks.BASE, PersonAMocks.MATCH_ONE);

            expect(result).toBeTruthy();
        });

        it("should return false", () => {
            const result: boolean = identical(PersonAMocks.BASE, PersonAMocks.FAIL_ONE);

            expect(result).toBeFalsy();
        });

        it("should return true", () => {
            const result: boolean = identical(PersonBMocks.BASE, PersonBMocks.MATCH_ONE);

            expect(result).toBeTruthy();
        });

        it("should return false", () => {
            const result: boolean = identical(PersonBMocks.BASE, PersonBMocks.FAIL_ONE);

            expect(result).toBeFalsy();
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
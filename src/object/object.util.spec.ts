import { areIdentical, isANumber, isNull, isNullOrUndefined, isUndefined } from "./object.util";
import { Person, PersonAMocks, PersonBMocks, PersonGenerator } from "../mock/mock";

describe("object util", () => {

    describe("areIdentical", () => {
        describe("will return false", () => {
            it("#1", () => {
                const result: boolean = areIdentical(PersonAMocks.BASE, PersonAMocks.FAIL_ONE);

                expect(result).toBeFalsy();
            });

            it("#2", () => {
                const result: boolean = areIdentical(undefined, null);

                expect(result).toBeFalsy();
            });

            it("#3", () => {
                const result: boolean = areIdentical(PersonAMocks.BASE, PersonAMocks.FAIL_ONE);

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
                    const firstMock: Person = PersonGenerator.get(given);
                    const secondMock: Person = PersonGenerator.get(given * 2);

                    expect(areIdentical(firstMock, secondMock)).toBeFalsy();
                });
            });

            it("#7", () => {
                const result: boolean = areIdentical(null, undefined);

                expect(result).toBeFalsy();
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
                const mock: Person = PersonGenerator.get(2);

                expect(areIdentical(mock, mock)).toBeTruthy();
            });

            describe("#4 - array tests ", () => {
                it.each([[1], [50], [100], [250], [500], [1000], [10000], [50000]])
                ("given %p children on objects", (given: number) => {
                    const mock: Person = PersonGenerator.get(given);

                    expect(areIdentical(mock, mock)).toBeTruthy();
                });

                it.each([[1], [50], [100], [250], [500], [1000], [10000], [50000]])
                ("given %p children directly", (given: number) => {
                    const mock: Person = PersonGenerator.get(given);

                    expect(areIdentical(mock.children, mock.children)).toBeTruthy();
                });
            });
        });
    });

    describe("isUndefined", () => {
        describe("will return false", () => {
            it("#1", () => {
                expect(isUndefined(null)).toBeFalsy();
            });

            it("#2", () => {
                expect(isUndefined([])).toBeFalsy();
            });

            it("#3", () => {
                expect(isUndefined("")).toBeFalsy();
            });

            it("#4", () => {
                expect(isUndefined(false)).toBeFalsy();
            });
        });

        describe("will return true", () => {
            it("#1", () => {
                expect(isUndefined(undefined)).toBeTruthy();
            });
        });
    });

    describe("isNull", () => {
        describe("will return false", () => {
            it("#1", () => {
                expect(isNull(undefined)).toBeFalsy();
            });

            it("#2", () => {
                expect(isNull([])).toBeFalsy();
            });

            it("#3", () => {
                expect(isNull("")).toBeFalsy();
            });

            it("#4", () => {
                expect(isNull(false)).toBeFalsy();
            });
        });

        describe("will return true", () => {
            it("#1", () => {
                expect(isNull(null)).toBeTruthy();
            });
        });
    });

    describe("isNullOrUndefined", () => {
        describe("will return true", () => {
            it("#1", () => {
                expect(isNullOrUndefined(null)).toBeTruthy();
            });

            it("#2", () => {
                expect(isNullOrUndefined(undefined)).toBeTruthy();
            });
        });
    });

    describe("isANumber", () => {
        describe("will return true", () => {
            it("#1", () => {
                expect(isANumber(1)).toBeTruthy();
            });

            it("#2", () => {
                expect(isANumber(1.02023)).toBeTruthy();
            });

            it("#3", () => {
                expect(isANumber(805645645645)).toBeTruthy();
            });

            it("#4", () => {
                expect(isANumber(.5)).toBeTruthy();
            });
        });

        describe("will return false", () => {
            it("#1", () => {
                expect(isANumber("5")).toBeFalsy();
            });

            it("#2", () => {
                expect(isANumber(false)).toBeFalsy();
            });
        });
    });
});
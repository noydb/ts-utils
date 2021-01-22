import { PersonGenerator } from "../mock/mock";
import { areIdentical } from "../object/object.util";
import { clone, cloneWithValidation } from "../../src/clone/clone.util";

describe("clone util", () => {
    // do these tests make sense?
    describe("clone", () => {
        it.each([
            [PersonGenerator.get(5).children],
            [undefined],
            [null],
            [PersonGenerator.get(10)],
            [10],
            [Number(10)],
            ["test"],
            ["test"]
        ])("Clone and validate: 1 - %p",
            (argument: unknown) => {
                const argumentClone: unknown = clone(argument);

                expect(areIdentical(argument, argumentClone)).toBeTruthy();
            }
        );

        // test that reassigning a value on one object does not update the other (by reference)

        describe("CloneError", () => {
            // I do not know how to contrive a CloneError
        });
    });

    describe("cloneWithValidation", () => {
        it.each([
            [PersonGenerator.get(5).children],
            [undefined],
            [null],
            [PersonGenerator.get(10)],
            [10],
            [Number(10)],
            ["test"],
            ["test"]
        ])("Clone and validate: 1 - %p",
            (argument: unknown) => {
                cloneWithValidation(argument);
            }
        );

        describe("CloneError", () => {
            // I do not know how to contrive a CloneError
        });
    });

    it("wtf", () => {
        expect(typeof null).toEqual("object");
    });
});
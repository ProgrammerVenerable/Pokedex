import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello world  ",
        expected: ["hello", "world"],
    },
    {
        input: "name age power",
        expected: ["name", "age", "power"],
    },
    {
        input: "JOE mama  ",
        expected: ["joe", "mama"],
    },
    {
        input: "  dragon WARRIOR",
        expected: ["dragon", "warrior"],
    },
    {
        input: "   HELP MANUNITED       ",
        expected: ["help", "manunited"],
    },
    {
        input: " Missed\npython",
        expected: ["missed", "python"],
    },
    {
        input: "Hello   World\tThis\nis\n\rJavaScript",
        expected: ["hello", "world", "this", "is", "javascript"],
    },

])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        
        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {

            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
import { cleanInput } from "./repl.js";
import {  afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Cache } from "./pokecache.js";

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
    {
        input: "",
        expected: []
    }

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

describe("Cache", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("adds and retrieves a cache entry", () => {
    const cache = new Cache(500);

    cache.add("https://example.com", "testdata");

    const cached = cache.get("https://example.com");

    expect(cached).toBeDefined();
    expect(cached?.val).toBe("testdata");

    cache.stopReapLoop();
  });

  test("returns undefined for a key that does not exist", () => {
    const cache = new Cache(500);

    const cached = cache.get("https://example.com");

    expect(cached).toBeUndefined();

    cache.stopReapLoop();
  });

  test("overwrites an existing cache entry", () => {
    const cache = new Cache(500);

    cache.add("https://example.com", "old data");
    cache.add("https://example.com", "new data");

    const cached = cache.get("https://example.com");

    expect(cached?.val).toBe("new data");

    cache.stopReapLoop();
  });

  test("reaps expired cache entries", () => {
    const interval = 500;
    const cache = new Cache(interval);

    cache.add("https://example.com", "testdata");

    expect(cache.get("https://example.com")).toBeDefined();

    vi.advanceTimersByTime(interval * 2);

    expect(cache.get("https://example.com")).toBeUndefined();

    cache.stopReapLoop();
  });

  test("stopReapLoop stops expired entries from being removed", () => {
    const interval = 500;
    const cache = new Cache(interval);

    cache.add("https://example.com", "testdata");

    cache.stopReapLoop();

    vi.advanceTimersByTime(interval * 3);

    const cached = cache.get("https://example.com");

    expect(cached?.val).toBe("testdata");
  });

  test("overwriting an entry resets its expiration time", () => {
    const interval = 1000;
    const cache = new Cache(interval);

    cache.add("key", "old");

    vi.advanceTimersByTime(500);

    cache.add("key", "new");

    vi.advanceTimersByTime(500);

    const cached = cache.get("key");

    expect(cached?.val).toBe("new");

    cache.stopReapLoop();
    });
});


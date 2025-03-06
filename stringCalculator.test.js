const addNumbers = require("./stringCalc");

describe("String Calculator - addNumbers", () => {
  test("returns 0 for empty string", () => {
    expect(addNumbers("")).toBe(0);
  });

  test("returns number itself for a single number", () => {
    expect(addNumbers("5")).toBe(5);
  });

  test("returns sum for multiple numbers", () => {
    expect(addNumbers("5,1")).toBe(6);
  });
});

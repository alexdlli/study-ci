import { sum } from "../sum";

describe("sum function tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 8)).toBe(0);
  });

  test("adds -1 + -2 to equal -3", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("should fail: adds 2 + 2 to equal 5", () => {
    expect(sum(2, 2)).not.toBe(5);
  });
});

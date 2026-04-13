const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

// capitalizeWords tests
describe("capitalizeWords", () => {

  test("capitalizes normal sentence", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("handles empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("handles single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  test("handles special characters", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });

});


// filterActiveUsers tests
describe("filterActiveUsers", () => {

  test("filters active users from mixed array", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false }
    ];

    expect(filterActiveUsers(users)).toEqual([
      { name: "Alice", isActive: true }
    ]);
  });

  test("returns empty array if all users inactive", () => {
    const users = [
      { name: "Bob", isActive: false }
    ];

    expect(filterActiveUsers(users)).toEqual([]);
  });

  test("handles empty array", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });

});


// logAction tests
describe("logAction", () => {

  test("returns correct log format", () => {
    const result = logAction("login", "Alice");
    expect(result).toContain("User Alice performed login at");
  });

  test("handles empty action", () => {
    const result = logAction("", "Alice");
    expect(result).toContain("User Alice performed  at");
  });

  test("handles empty username", () => {
    const result = logAction("login", "");
    expect(result).toContain("User  performed login at");
  });

});

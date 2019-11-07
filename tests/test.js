const str = require("../strings");
const {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kabobCase,
  snakeCase,
  camelCase
} = str;

test("capitalize", () => {
  expect(capitalize("h")).toBe("H");
});

test("all caps", () => {
  expect(allCaps("hello")).toBe("HELLO");
});

test("capitalize words", () => {
  expect(capitalizeWords("hello how are you")).toBe("Hello How Are You");
});

test("remove extra spaces", () => {
  expect(removeExtraSpaces("  hello   how  are you  ")).toBe(
    "hello how are you"
  );
});

test("kabob case", () => {
  expect(kabobCase("hello how are you")).toBe("hello-how-are-you");
});

test("snake case", () => {
  expect(snakeCase("hello how are you")).toBe("hello_how_are_you");
});

test("camel case", () => {
  expect(camelCase("hello how are you")).toBe("helloHowAreYou");
});

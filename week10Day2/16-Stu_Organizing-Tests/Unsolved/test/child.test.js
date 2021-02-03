const Child = require("../child");

describe("Child", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const child = new Child("Sarah", 3);

      // TODO: Add a comment describing the purpose of the following statements
      //Child.name should return a string
      //Child.age should return a number greater than 0
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // TODO: Add a comment describing the purpose of the following expression
      const cb = () => new Child();

      // TODO: Add a comment describing the purpose of the following statement
      //Expect the result to throw an error because no arguments have been passed
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Child("Sarah");

      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // TODO: Add a comment describing the purpose of the following statement
      //Expect the result to throw an error because we haven't passed a number as an argument
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      //Expect an error because we did not pass a string as the first argument
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      //Throw an error because the second argument is not a number
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      //Throw an error because the age is less than 0
      expect(cb).toThrowError(err);
    });
  });
});

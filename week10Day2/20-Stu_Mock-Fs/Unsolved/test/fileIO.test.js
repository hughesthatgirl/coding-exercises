const fs = require("fs");
const FileIO = require('../fileIO');

jest.mock("fs")

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const readFile = new FileIO();
      const fileName = 'message.txt';
      const mock = jest.spyOn(fs, 'readFileSync');
      
      readFile.read(fileName)
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});

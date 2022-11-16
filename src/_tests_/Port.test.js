const Port = require ("../Port.js")
const Ship = require ("../Ship.js")
const Itinerary = require("../Itinerary.js")

describe("Port", () => {
    
    it("can be instantiated", () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });
    
    it("has a name property", () => {
      const port = new Port("Calais");
      expect(port.name).toEqual("Calais");
    });
  
});
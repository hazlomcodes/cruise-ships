const Itinerary = require ("../Itinerary.js");
const Port = require ("../Port.js");
const Ship = require ("../Ship.js");

describe("Itinerary", () => {
    it ("can be instantiated", () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it("can have ports", () => {
        const dover = new Port ("Dover");
        const calais = new Port ("Calais");

        const itinerary = new Itinerary (["Dover", "Calais"]);
        expect (itinerary.ports).toEqual(["Dover", "Calais"]);
    });

});

 

        

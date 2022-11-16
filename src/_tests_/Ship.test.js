const Ship = require("../Ship.js")
const Port = require("../Port.js")
const Itinerary = require ("../Itinerary.js")

describe("Ship", () => {
    
    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it("has a current port property", () => {
        const port = new Port ("Dover");
        const ship = new Ship (port);

        expect(ship.currentPort).toBe(port);

    });

    it ("can set sail", () => {
        const ship = new Ship ("Dover");

        ship.setSail();
    });

    expect(Ship.startingPort).toBeFalsy();
   });

   it ("is able to dock at different ports", () => {
    const dover = new Port("Dover");
    const ship = new Ship (dover);

    const calais = new Port("Calais");
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
   });

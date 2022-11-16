const Ship = require("../Ship.js");

describe("Ship", () => {
    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        const ship = new Ship("Dover");

        expect(ship.startingPort).toEqual("Dover");
    });
});
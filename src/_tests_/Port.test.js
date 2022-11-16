const Port = require ("../Port.js");
const Ship = require ("../Ship.js");
const Itinerary = require("../Itinerary.js");

describe("Port", () => {
    
    describe("has name and can add and remove ships", () => {

        let port;
        let titanic;

        beforeEach(() => {

          port = new Port("Dover");
          titanic = {};
        
        });

        it("can be instantiated", () => {

          expect(new Port()).toBeInstanceOf(Object);
        
        });

        it("has a name property", () => {

          expect(port.name).toEqual("Dover");
        
        });
        
        it("adds a ship when it docks", () => {

          port.addShip(titanic);

          expect(port.ships).toContain(titanic);
        
        });

        it("can remove a ship", () => {
            
            const queenMary = {};

            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);
        });

    });

});
    



    
   


     
    
        
  

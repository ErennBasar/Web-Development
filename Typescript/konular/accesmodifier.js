var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi X: ".concat(this.location.x, " Y: ").concat(this.location.y, "'dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });

export interface point {
  x: number;
  y: number;
}

interface vehicle {
  currentLocation: point;
  travelTo(point: point): void;
}

class Taxi implements vehicle {
  currentLocation: point;
  travelTo(point: point): void {
    console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
  }
}

class Bus implements vehicle {
  currentLocation: point;
  travelTo(point: point): void {
    console.log(`Bus X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
  }
}
let taxi_1: Taxi = new Taxi();

taxi_1.travelTo({ x: 1, y: 2 });

taxi_1.currentLocation = { x: 2, y: 5 };

let taxi_2: Taxi = new Taxi();
taxi_2.travelTo({ x: 5, y: 7 });
taxi_2.currentLocation = { x: 3, y: 6 };

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);

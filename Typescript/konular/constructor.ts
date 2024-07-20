import { point } from "./Point";

interface vehicle {
  currentLocation: point;
  travelTo(point: point): void;
}

class Taxi implements vehicle {
  color: string;

  constructor(location: point, color?: string) {
    this.currentLocation = location;
  }
  currentLocation: point;
  travelTo(point: point): void {
    console.log(`Taxi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });
//taxi_1.color = "Red";
console.log(taxi_1.currentLocation);

let taxi_2: Taxi = new Taxi({ x: 3, y: 6 }, "Red");

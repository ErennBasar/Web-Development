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

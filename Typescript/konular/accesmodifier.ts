interface point {
  x: number;
  y: number;
}

interface vehicle {
  travelTo(point: point): void;
}

class Taxi implements vehicle {
  constructor(private location: point, private color?: string) {}

  travelTo(point: point): void {
    console.log(
      `Taxi X: ${this.location.x} Y: ${this.location.y}'dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`
    );
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });

taxi_1.travelTo({ x: 1, y: 2 });

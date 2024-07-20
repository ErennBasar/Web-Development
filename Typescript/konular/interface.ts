interface point {
  x: number;
  y: number;
}

interface passenger {
  name: string;
  phone: string;
}

interface vehicle {
  currentLocation: point;
  travelTo(point: point): void;
  getDistance(pointA: point, pointB: point): number;
  addPassenger(passenger: passenger): void;
  removePassenger(passenger: passenger): void;
}

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
}

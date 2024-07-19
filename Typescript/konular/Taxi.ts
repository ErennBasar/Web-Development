import { vehicle } from "./Vehicle";
import { point } from "./Point";

export class Taxi implements vehicle {
  constructor(private _location: point, private _color?: string) {}

  travelTo(point: point): void {
    console.log(
      `Taxi X: ${this._location.x} Y: ${this._location.y}'dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`
    );
  }
  get location() {
    return this._location;
  }
  set location(value: point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Negatif deger olamaz");
    }
    this._location = value;
  }
}

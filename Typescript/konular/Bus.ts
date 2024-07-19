import { vehicle } from "./Vehicle";
import { point } from "./Point";

export class Bus implements vehicle {
  travelTo(point: point): void {
    throw new Error("Method not implemented.");
  }
}

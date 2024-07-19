import { point } from "./Point";

export interface vehicle {
  travelTo(point: point): void;
}

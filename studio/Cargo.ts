import { Payload } from "./Payload";

export class Cargo implements Payload {
    material: string;
    massKg: number;
    constructor(massKg: number, material: string) {
        this.material = material;
        this.massKg = massKg;
    }
}


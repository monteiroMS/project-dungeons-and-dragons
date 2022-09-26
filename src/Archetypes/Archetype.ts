import { EnergyType } from '../Energy';
import { NOT_IMPLEMENTED } from '../Races/Race';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }
  
  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error(NOT_IMPLEMENTED);
  }

  abstract get energyType(): EnergyType;
}
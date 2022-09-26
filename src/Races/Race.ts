export const NOT_IMPLEMENTED = 'Not implemented';

export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {}

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error(NOT_IMPLEMENTED);
  }

  abstract get maxLifePoints(): number;
}
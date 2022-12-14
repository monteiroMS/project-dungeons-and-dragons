import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import getRandomInt from './utils';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _archetype: Archetype;
  private _dexterity: number;
  private _race: Race;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._archetype = new Mage(_name);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      const newLifePoints = this._lifePoints - damage;
      this._lifePoints = newLifePoints <= 0
        ? -1
        : newLifePoints;
    }
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    const enemyLifeBeforeBattle = enemy.lifePoints;
    const enemyLifeAfterBattle = enemy.receiveDamage(this._strength);
    if (enemyLifeBeforeBattle === enemyLifeAfterBattle) {
      this._lifePoints = -1;
    }
  }

  public levelUp(): void {
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = newMaxLifePoints > this._race.maxLifePoints
      ? this._race.maxLifePoints
      : newMaxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    const criticalDamage = this._strength + (this._race.dexterity * 2);
    enemy.receiveDamage(criticalDamage);
  }
}

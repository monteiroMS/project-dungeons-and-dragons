import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
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
}

import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

const oponentsStillAlive = ({ lifePoints }: SimpleFighter) => lifePoints > 0;

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _oponents: SimpleFighter[],
  ) {
    super(_player);
  }

  private get oponentsLeft() {
    return this._oponents.filter(oponentsStillAlive);
  }

  public fight(): number {
    console.log('UMA NOVA BATALHA SE INICIA... BOA SORTE AO HEROI!');

    this.oponentsLeft.forEach((oponent) => {
      while (oponent.lifePoints > 0 && this._player.lifePoints > 0) {
        this._player.attack(oponent);
        oponent.attack(this._player);
      }
    });

    console.log(`${super.fight() === 1
      ? 'NOSSO HEROI VIVE!' : 'HEROI ESTÁ MORTO'}`);
    
    return super.fight();
  }
}
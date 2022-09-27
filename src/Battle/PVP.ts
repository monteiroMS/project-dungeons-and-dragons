import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }
 
  public fight(): number {
    console.log(`
      DOIS HEROIS TRAVARAM UMA BATALHA
      MAS AQUI POR ESTAS TERRAS, NÃO EXISTE PIEDADE
      NESTA LUTA, ALGUM BRAVO LUTADOR TERÁ SUA ALMA CEIFADA...
      QUE O MELHOR SOBREVIVA!!
    `);

    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }

    console.log(`
      ${super.fight() === 1 ? 'O LUTADOR 01 VENCE!' : 'O LUTADOR 02 VENCE!'}
    `);
    
    return super.fight();
  }
}

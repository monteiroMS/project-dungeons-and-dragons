export const MANA = 'mana';
export const STAMINA = 'stamina';

export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType,
  amount: number,
}
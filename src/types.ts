export type Frame = [number, number];

export type LastFrame = [number, number, number];

export type Game = [
  Frame,
  Frame,
  Frame,
  Frame,
  Frame,
  Frame,
  Frame,
  Frame,
  Frame,
  LastFrame
];

export enum  BonusType {
  STRIKE = 'strike',
  SPARE = 'spare'
}
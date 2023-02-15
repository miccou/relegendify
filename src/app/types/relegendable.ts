export enum LegendPositionOptions {
  centre = 'text-center pt-12',
  top = 'text-center pt-2',
  bottom = 'text-center pt-24',
  left = 'text-left pt-12 pl-2',
  right = 'text-right pt-12 pr-2',
}

export interface Relegendable {
  legend: string;
  legendPosition: LegendPositionOptions;
  legendColour: string;
  keycapColour: string;
}

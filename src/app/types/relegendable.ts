export const LegendPositionOptions = {
  topLeft: 'Top Left',
  top: 'Top',
  topRight: 'Top Right',
  left: 'Left',
  centre: 'Centre',
  right: 'Right',
  bottomLeft: 'Bottom Left',
  bottom: 'Bottom',
  bottomRight: 'Bottom Right',
} as const;

export type LegendPositionOptionsType = typeof LegendPositionOptions;

export interface Relegendable {
  legend: string;
  legendPosition: string;
  legendFontSize: number;
  legendColour: string;
  keycapColour: string;
}

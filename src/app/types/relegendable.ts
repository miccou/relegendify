export enum LegendPositionOptions {
  topLeft = "Top left",
  top = "Top",
  topRight = "Top right",
  left = "Left",
  centre = "Centre",
  right = "Right",
  bottomLeft = "Bottom left",
  bottom = "Bottom",
  bottomRight = "Bottom right",
}

export type LegendPositionOptionsType = keyof typeof LegendPositionOptions;

export enum LegendAlignOptions {
  alignLeft = "Align left",
  alignCentre = "Align centre",
  alignRight = "Align right",
}

export type LegendAlignOptionsType = keyof typeof LegendAlignOptions;

export class Relegendable {
  legend: string = "Aa";
  legendPosition: LegendPositionOptions = LegendPositionOptions.topLeft;
  legendFontSize: number = 8;
  legendAlign: LegendAlignOptions = LegendAlignOptions.alignCentre;
  legendColour: string = "#123456";
  keycapColour: string = "#abcdef";
}

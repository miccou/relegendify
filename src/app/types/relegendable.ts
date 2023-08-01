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

export enum FrontLipLegendPositionOptions {
  left = "Left",
  centre = "Centre",
  right = "Right",
}

export type FrontLipLegendPositionOptionsType =
  keyof typeof FrontLipLegendPositionOptions;

export enum LegendAlignOptions {
  alignLeft = "Align left",
  alignCentre = "Align centre",
  alignRight = "Align right",
}

export type LegendAlignOptionsType = keyof typeof LegendAlignOptions;

export class Relegendable {
  uuid: string = crypto.randomUUID();
  legend: string = "Aa";
  legendPosition: LegendPositionOptions = LegendPositionOptions.topLeft;
  legendFontSize: number = 10;
  legendAlign: LegendAlignOptions = LegendAlignOptions.alignCentre;
  legendColour: string = "#123456";
  keycapColour: string = "#abcdef";
  includeFrontLip: boolean = false; //done
  frontLipLegend: string = "Text"; //done
  frontLipLegendPosition: FrontLipLegendPositionOptions =
    FrontLipLegendPositionOptions.centre;
  frontLipLegendFontSize: number = 6;

  clone(): Relegendable {
    const cloned = new Relegendable();
    Object.assign(cloned, { ...this, uuid: crypto.randomUUID() });
    return cloned;
  }
}

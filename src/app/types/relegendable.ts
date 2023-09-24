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
  legendColour: string = DEFAULTS.legendColour;
  keycapColour: string = DEFAULTS.keycapColour;
  includeFrontLip: boolean = false; 
  frontLipLegend: string = "Text"; 
  frontLipLegendPosition: LegendPositionOptions = LegendPositionOptions.centre;
  frontLipLegendFontSize: number = 6;

  clone(): Relegendable {
    const cloned = new Relegendable();
    Object.assign(cloned, { ...this, uuid: crypto.randomUUID() });
    return cloned;
  }

  addFrontLip() {
    this.includeFrontLip = true;
  }
}


export const DEFAULTS = {
  legendColour: "#000000",
  keycapColour: "#ffffff"
}
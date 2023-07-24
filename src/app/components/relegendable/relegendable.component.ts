import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import {
  LegendPositionOptions,
  Relegendable,
  LegendAlignOptions,
} from "src/app/types/relegendable";

@Component({
  selector: "app-relegendable",
  templateUrl: "./relegendable.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelegendableComponent {
  @Input() relegendable!: Relegendable;

  ngOnInit() {}

  relegendableClass(): { parent: string; child: string } {
    let parent;
    let child;

    switch (this.relegendable.legendPosition) {
      case LegendPositionOptions.centre:
      default:
        parent = "flex items-center justify-center";
        break;
      case LegendPositionOptions.top:
        parent = "flex items-start justify-center";
        break;
      case LegendPositionOptions.topLeft:
        parent = "flex items-start justify-start";
        break;
      case LegendPositionOptions.topRight:
        parent = "flex items-start justify-end";
        break;
      case LegendPositionOptions.bottom:
        parent = "flex items-end justify-center";
        break;
      case LegendPositionOptions.bottomLeft:
        parent = "flex items-end justify-start";
        break;
      case LegendPositionOptions.bottomRight:
        parent = "flex items-end justify-end";
        break;
      case LegendPositionOptions.left:
        parent = "flex items-center justify-start";
        break;
      case LegendPositionOptions.right:
        parent = "flex items-center justify-end";
        break;
    }

    switch (this.relegendable.legendAlign) {
      case LegendAlignOptions.alignCentre:
      default:
        child = "text-center";
        break;
      case LegendAlignOptions.alignLeft:
        child = "text-left";
        break;
      case LegendAlignOptions.alignRight:
        child = "text-right";
        break;
    }

    return { parent, child };
  }

  fontSizeName(): string {
    return `legend-${this.relegendable.legendFontSize
      .toString()
      .replace(".", "-")}px`;
  }

  onPositionSelected(position: LegendPositionOptions) {
    console.log(position);
    this.relegendable.legendPosition = position;
  }
}

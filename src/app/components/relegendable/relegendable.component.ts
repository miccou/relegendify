import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  LegendPositionOptions,
  Relegendable,
  LegendAlignOptions,
} from "src/app/types/relegendable";

@Component({
  selector: "app-relegendable",
  templateUrl: "./relegendable.component.html",
})
export class RelegendableComponent {
  @ViewChild("container", { read: ElementRef }) container!: ElementRef;
  @Input() relegendable!: Relegendable;
  @Input() lessNoticeableBorder!: boolean;
  @Input() boldLegends!: boolean;
  @Input() invertColours!: boolean;
  @Output() delete = new EventEmitter();
  @Output() clone = new EventEmitter();

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.container.nativeElement.classList.remove("scale-50", "opacity-0");
    }, 100);
  }

  get borderClass() {
    return this.lessNoticeableBorder ? "outline-0" : "outline outline-1";
  }

  get boldClass() {
    return this.boldLegends ? "font-semibold" : "font-normal";
  }

  get colourClass() {
    return this.invertColours
      ? "bg-black text-white outline-cutty-sark-800"
      : "bg-white text-black outline-cutty-sark-100";
  }

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

  frontLipClass(): string {
    switch (this.relegendable.frontLipLegendPosition) {
      case LegendPositionOptions.centre:
      default:
        return "flex items-center justify-center";
      case LegendPositionOptions.left:
        return "flex items-center justify-start";
      case LegendPositionOptions.right:
        return "flex items-center justify-end";
    }
  }

  fontSizeName(legendFontSize: number): string {
    return `legend-${legendFontSize.toString().replace(".", "-")}px`;
  }
}

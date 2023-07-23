import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  LegendPositionOptions,
  Relegendable,
} from 'src/app/types/relegendable';

@Component({
  selector: 'app-relegendable',
  templateUrl: './relegendable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelegendableComponent {
  @Input() relegendable!: Relegendable;

  ngOnInit() {}

  relegendableClass(): { parent: string; child: string } {
    switch (this.relegendable.legendPosition) {
      case LegendPositionOptions.centre:
      default:
        return { parent: 'flex items-center justify-center', child: '' };
      case LegendPositionOptions.top:
        return { parent: 'flex items-start justify-center', child: '' };
      case LegendPositionOptions.topLeft:
        return { parent: 'flex items-start justify-start', child: '' };
      case LegendPositionOptions.topRight:
        return { parent: 'flex items-start justify-end', child: '' };
      case LegendPositionOptions.bottom:
        return { parent: 'flex items-end justify-center', child: '' };
      case LegendPositionOptions.bottomLeft:
        return { parent: 'flex items-end justify-start', child: '' };
      case LegendPositionOptions.bottomRight:
        return { parent: 'flex items-end justify-end', child: '' };
      case LegendPositionOptions.left:
        return { parent: 'flex items-center justify-start', child: '' };
      case LegendPositionOptions.right:
        return { parent: 'flex items-center justify-end', child: '' };
    }
  }

  fontSizeName(): string {
    return `legend-${this.relegendable.legendFontSize
      .toString()
      .replace('.', '-')}px`;
  }

  onPositionSelected(position: keyof typeof LegendPositionOptions) {
    console.log(position);
    this.relegendable.legendPosition = position;
  }
}

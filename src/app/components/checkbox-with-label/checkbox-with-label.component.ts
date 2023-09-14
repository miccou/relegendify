import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox-with-label",
  template: `
    <label class="relative inline-flex cursor-pointer items-center w-44">
      <input
        type="checkbox"
        [ngModel]="checked"
        (ngModelChange)="checkedChange.emit($event)"
        class="peer sr-only" />
      <div
        class="peer h-6 w-11 rounded-full bg-cutty-sark-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-cutty-sark-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-aquamarine-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-0"></div>
      <span
        class="dark:text-gray-300 ml-3 text-sm font-medium text-cutty-sark-900">
        {{ label }}
      </span>
    </label>
  `,
})
export class CheckboxWithLabelComponent {
  @Input() checked: boolean = false;
  @Input() label: string = "";
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}

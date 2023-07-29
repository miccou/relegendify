import { Component } from "@angular/core";

@Component({
  selector: "app-button-small",
  template: `
    <div
      class="m-auto flex h-8 w-20 cursor-pointer  items-center justify-center gap-1 rounded-md border border-aquamarine-950 bg-gradient-to-br from-aquamarine-400 to-aquamarine-500 p-2 text-cutty-sark-950 hover:from-aquamarine-300 hover:to-aquamarine-400">
      <ng-content></ng-content>
    </div>
  `,
})
export class ButtonSmallComponent {}

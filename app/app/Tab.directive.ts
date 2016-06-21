import { Input, Directive } from "@angular/core";

@Directive({
  selector: "[tab]",
})
export class Tab {
  @Input('tab') name: string;
}

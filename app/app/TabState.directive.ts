import { Input, Directive } from "@angular/core";
import { Tab } from "./Tab.directive";

@Directive({
  selector: "[enabled]",
})
export class TabState {
  enabled = false;

  @Input('enabled') set enabling(can: any) {
    this.enabled = Boolean(can);
  }
}

import { Directive } from "@angular/core";

@Directive({
  selector: "[powerButton]",
  host: {
    "(click)": "animating = !animating",
    "(animationend)": "animating = !animating",
    "[class.animating]": "animating",
  },
})
export class PowerButton {
  animating = false;
}

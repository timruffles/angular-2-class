import { Directive } from "@angular/core";

@Directive({
  selector: "[powerButton]",
  host: {
    '[class.animating]': 'animating',
    '(click)': 'animate()',
    '(animationend)': 'done()',
  },
})
export class PowerButton {
  animating = false;

  animate() {
    console.log("animate!");
    this.animating = true;
  }

  done() {
    console.log("done!");
    this.animating = false;
  }
}

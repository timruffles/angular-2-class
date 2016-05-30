
import { EventEmitter, Input, Output, Component } from "angular2/core";

@Component({
  selector: "chart-control",
  template: `<input type=range [max]="maxAge"
     #maxAgeInput
     (change)="maxAgeSet(maxAgeInput.value)">`,
})
export class ChartControl {
  @Input() maxAge: number;
  @Output() filtered = new EventEmitter;

  maxAgeSet(value) {
    this.filtered.emit({
      maxAge: parseInt(value),
    });
  }
  
}



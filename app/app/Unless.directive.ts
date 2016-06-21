import { 
  Directive,
  Input,
  TemplateRef, 
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: "[unless]",
})
export class Unless {
  constructor(
    private tpl: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  @Input() unless: any;

  ngOnChanges() {
    if(this.unless) {
      this.view.clear();
    } else {
      this.view.createEmbeddedView(this.tpl);
    }
  }
}

import { Input, Directive, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[unless]",
})
export class Unless {
  constructor(
    private vcr: ViewContainerRef,
    private tRef: TemplateRef<any>
  ) {
  }

  @Input() set unless(to: any) {
    // use this to do template create/destroy
    if(to) {
      this.vcr.clear();
    } else {
      this.vcr.createEmbeddedView(this.tRef);
    }
  }
}

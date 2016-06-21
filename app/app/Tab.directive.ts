import { 
  Directive,
  TemplateRef,
  Input,
} from "@angular/core";

@Directive({
  selector: "[tab]",
})
export class Tab {
  @Input('tab') name: string;

  constructor(
    public tRef: TemplateRef
  ) {}
}



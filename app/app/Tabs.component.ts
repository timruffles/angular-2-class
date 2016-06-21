import { Tab} from "./Tab.directive";
import { 
  Component,
  ContentChildren,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  QueryList,
  Input,
} from "@angular/core";

@Component({
  template: `<active #activeRef></active>`,
  selector: "tabs",
})
export class Tabs {
  @Input() activeName: string;

  @ViewChild('activeRef', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  // our list of tabs
  @ContentChildren(Tab) tabs: QueryList<Tab>;


  ngAfterContentInit() {
    this.updateTab();
  }

  ngOnChanges() {
    this.updateTab();
  }

  private updateTab() {
    if(!this.tabs) return;

    if(!this.activeName) {
      return this.clear();
    }

    this.tabs.forEach((tab: Tab) => {
      if(tab.name === this.activeName) {
        this.show(tab.tRef);
      }
    })
  }

  private clear() {
    this.viewContainerRef.clear();
  }

  private show(tRef: TemplateRef<any>) {
    if(tRef) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(tRef);
    }
  }

}



import { NgZone, Input, TemplateRef, ViewChild, ViewContainerRef, QueryList, Component, ContentChildren } from "@angular/core";
import { Tab } from "./Tab.directive";

@Component({
  selector: "tabs",
  directives: [],
  template: `
    <active #activeTab></active>
  `,
})
export class Tabs {
  @Input() activeName: string;
  @ContentChildren(Tab, { read: TemplateRef }) tabTemplates: QueryList<TemplateRef<any>>;
  @ContentChildren(Tab) tabs: QueryList<Tab>;
  @ViewChild('activeTab', { read: ViewContainerRef }) activeContainerRef: ViewContainerRef;

  previouslyRenderedTab: Tab;

  constructor(private zone: NgZone) {
  }

  ngAfterContentInit() {
    this.updateTab();
  }

  activeTab(): [number, Tab] {
    if(this.activeName) {
      const tabs = this.tabs.toArray();
      for(let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        if(tab.name === this.activeName) {
          return [i, tab];
        }
      }
    } else if(this.tabs.first) {
      return [0, this.tabs.first] 
    }

    return [-1, null];
  }

  ngOnChanges() {
    // wait till we've hit afterViewInit
    if(this.tabs) {
      this.updateTab();
    }
  }

  private updateTab() {
    const [index, active] = this.activeTab();
    if(!active) {
      this.clear();
    } else if(this.previouslyRenderedTab !== active) {
      this.render(this.tabTemplates.toArray()[index]);
      this.previouslyRenderedTab = active;
    }
  }

  private clear() {
    this.zone.runOutsideAngular(() => {
      this.activeContainerRef.clear();
    })
  }

  private render(tpl: TemplateRef<any>) {
    this.zone.runOutsideAngular(() => {
      this.activeContainerRef.clear();
      this.activeContainerRef.createEmbeddedView(tpl);
    })
  }
}

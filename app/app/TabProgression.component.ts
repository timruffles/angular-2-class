/**
 * <tab-progression>
 *   <tab>
 *   </tab>
 *   <tab [attr.selectable]='next'>
 *   </tab>
 * </tab-pgoression>
 */

import { NgZone, Input, TemplateRef, ViewChild, ViewContainerRef, QueryList, Component, ContentChildren } from "@angular/core";
import { Tab } from "./Tab.directive";

@Component({
  selector: "tab-progression",
  directives: [],
  template: `
    <active #activeTab></active>
  `,
})
export class TabProgression {
  @Input() activeName: string;
  @ContentChildren(Tab, { read: TemplateRef }) tabTemplates: QueryList<TemplateRef<any>>;
  @ContentChildren(Tab) tabs: QueryList<Tab>;
  @ViewChild('activeTab', { read: ViewContainerRef }) activeContainerRef: ViewContainerRef;

  previouslyRenderedTab: Tab;

  constructor(private zone: NgZone) {
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
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
    if(!this.tabs) {
      return;
    }

    const [index, active] = this.activeTab();
    console.log(index, active);
    
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

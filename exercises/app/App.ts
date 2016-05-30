import { Component } from "angular2/core";
import { Chart } from "./Chart.component";
import { ChartControl } from "./ChartControl.component";

import { CORE_DIRECTIVES } from "angular2/common";

import { Reddit } from "./Reddit.service";


import { HTTP_PROVIDERS } from "angular2/http";
@Component({
   selector: "app",
    directives: [Chart, ChartControl, CORE_DIRECTIVES],
    providers: [Reddit, HTTP_PROVIDERS],
   template: `
        <h2 *ngFor="#story of stories">{{ story.title }}</h2>

      <!-- extra stuff -->
    `,
})
export class App {

  // more stuff
   stories: any[];
   
   constructor(private reddit: Reddit) {
      
      reddit.frontpage()
        .then((stories) => 
            this.stories = stories);
   }
    
    setFilter(event: any) {
      console.log(event);
    }
    
    changeSize(delta: number) {
        this.fontSize+= delta;
    }
}



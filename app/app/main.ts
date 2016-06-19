import { App } from "./App.component";
import { bootstrap } from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from '@angular/forms';


bootstrap(App, [
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));


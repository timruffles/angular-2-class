
import { bootstrap } 
  from "@angular/platform-browser-dynamic";

import { App }
  from "./App.component";

import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
]);


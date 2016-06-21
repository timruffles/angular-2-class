
import { bootstrap } 
  from "@angular/platform-browser-dynamic";

import { App }
  from "./App.component";

import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { API_URL } from "./types";

import { HTTP_PROVIDERS } from "@angular/http";

bootstrap(App, [
  HTTP_PROVIDERS,
  { provide: API_URL, useValue: "http://localhost:3999" },
  disableDeprecatedForms(),
  provideForms(),
]);



import { bootstrap } 
  from "@angular/platform-browser-dynamic";

import { HTTP_PROVIDERS } 
  from "@angular/http";

import { App }
  from "./App.component";

import { API_URL } from "./types";

import {disableDeprecatedForms, provideForms} from '@angular/forms';



bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  { provide: API_URL,
    useValue: "http://localhost:3999" },
  HTTP_PROVIDERS
]);


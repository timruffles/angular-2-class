
import { bootstrap } 
  from "@angular/platform-browser-dynamic";

import { App }
  from "./App.component";

import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { API_URL } from "./types";

import { HTTP_PROVIDERS } from "@angular/http";

import { PowerButton } from "./PowerButton.directive";
import { PLATFORM_DIRECTIVES  } from "@angular/core";

import { Unless } from "./Unless.directive";

bootstrap(App, [
  { provide: PLATFORM_DIRECTIVES,
    multi: true,
    useValue: PowerButton },
  { provide: PLATFORM_DIRECTIVES,
    multi: true,
    useValue: Unless },
  HTTP_PROVIDERS,
  { provide: API_URL, useValue: "http://localhost:3999" },
  disableDeprecatedForms(),
  provideForms(),
]);


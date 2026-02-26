import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f2f8e9',
      100: '#e0efcc',
      200: '#cce5ab',
      300: '#b6db86',
      400: '#a3d266',
      500: '#80B828', // Primary requested by user
      600: '#73a524',
      700: '#649020',
      800: '#567c1c',
      900: '#486716',
      950: '#2e430d'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ]
};

import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { applicationConfig } from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { provideHttpClient } from '@angular/common/http';

setCompodocJson(docJson);

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f2f8e9',
      100: '#e0efcc',
      200: '#cce5ab',
      300: '#b6db86',
      400: '#a3d266',
      500: '#80B828',
      600: '#73a524',
      700: '#649020',
      800: '#567c1c',
      900: '#486716',
      950: '#2e430d'
    }
  }
});

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
        provideAnimationsAsync(),
        providePrimeNG({
          theme: {
            preset: MyPreset,
            options: { darkModeSelector: '.my-app-dark' }
          }
        })
      ]
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
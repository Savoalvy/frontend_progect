import { Theme } from '@app/providers/ThemeProvider';

import '@app/styles/index.scss';
import {
  RouterDecorator,
  StoreDecorator,
  StyleDecorator,
  ThemeDecorator,
  TranslationDecorator,
} from '@shared/config';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#090949' },
    ],
  },
  options: {
    storySort: {
      order: ['UI', 'Widgets', 'Pages', 'Features'],
    },
  },
};

export const decorators = [
  StoreDecorator({}),
  TranslationDecorator,
  ThemeDecorator(Theme.LIGHT),
  StyleDecorator,
  RouterDecorator,
];

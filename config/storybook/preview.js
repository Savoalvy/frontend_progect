import { Theme } from '@app/providers/ThemeProvider';
import { StyleDecorator } from '@shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '@shared/config/storybook/RouterDecorator/RouterDecorator';

import '@app/styles/index.scss';

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

export const decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecorator];

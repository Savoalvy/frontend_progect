import { I18nextProvider } from 'react-i18next';
import i18nForTest from '@shared/config/i18n/i18nForTest';
import { Story } from '@storybook/react';

export const TranslationDecorator = (
  StoryComponent: Story,
) => (
  <I18nextProvider i18n={i18nForTest}>
    <StoryComponent />
  </I18nextProvider>
);

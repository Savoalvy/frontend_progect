import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton, SizeButton } from './Button';
import '@app/styles/index.scss';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = { children: 'Primary' };

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear',
  theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'ClearInverted',
  theme: ThemeButton.CLEAR_INVERTED,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Clear Dark',
  theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  theme: ThemeButton.OUTLINE,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Background',
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'BackgroundInverted',
  theme: ThemeButton.BACKGROUND_INVERTED,
};
BackgroundInverted.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Outline Dark',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// Square Buttons
export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  square: true,
  size: SizeButton.M,
  theme: ThemeButton.BACKGROUND,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  square: true,
  size: SizeButton.L,
  theme: ThemeButton.BACKGROUND,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  square: true,
  size: SizeButton.XL,
  theme: ThemeButton.BACKGROUND,
};

export const SquareDark = Template.bind({});
SquareDark.args = {
  children: '>',
  square: true,
  theme: ThemeButton.BACKGROUND_INVERTED,
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

// Size Variants
export const SizeM = Template.bind({});
SizeM.args = {
  children: 'Size M',
  size: SizeButton.M,
  theme: ThemeButton.OUTLINE,
};

export const SizeL = Template.bind({});
SizeL.args = {
  children: 'Size L',
  size: SizeButton.L,
  theme: ThemeButton.OUTLINE,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  children: 'Size XL',
  size: SizeButton.XL,
  theme: ThemeButton.OUTLINE,
};

// Combined Examples
export const SquareOutlineM = Template.bind({});
SquareOutlineM.args = {
  children: '>',
  square: true,
  size: SizeButton.M,
  theme: ThemeButton.OUTLINE,
};

export const SquareBackgroundL = Template.bind({});
SquareBackgroundL.args = {
  children: '>',
  square: true,
  size: SizeButton.L,
  theme: ThemeButton.BACKGROUND,
};

export const SquareBackgroundInvertedXL = Template.bind({});
SquareBackgroundInvertedXL.args = {
  children: '>',
  square: true,
  size: SizeButton.XL,
  theme: ThemeButton.BACKGROUND_INVERTED,
};
SquareBackgroundInvertedXL.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  theme: ThemeButton.OUTLINE,
  disabled: true,
};

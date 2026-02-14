import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import '@app/styles/index.scss';
import { Modal } from '@shared/ui/Modal';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque eius error laborum magnam odit rem temporibus totam? Dolorem illum ipsa laboriosam maiores minus ratione. Culpa cumque maxime optio voluptatibus.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque eius error laborum magnam odit rem temporibus totam? Dolorem illum ipsa laboriosam maiores minus ratione. Culpa cumque maxime optio voluptatibus.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

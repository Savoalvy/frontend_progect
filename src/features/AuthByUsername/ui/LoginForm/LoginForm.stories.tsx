import React from 'react';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import '@app/styles/index.scss';
import { StoreDecorator } from '@shared/config';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (
  args,
) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: 'ewew' },
  }),
];

export const Error = Template.bind({});
Error.args = {};

Error.decorators = [
  StoreDecorator({
    loginForm: {
      username: '123',
      password: 'qwerty',
      error: 'Error',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: '123',
      password: 'qwerty',
      isLoading: true,
    },
  }),
];

import React from 'react';

import { Inputbox } from '../components/input/Input'

export default {
  title: 'Themes/Inputbox',
  component: Inputbox,
};

const Template = (args) => <Inputbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   normal:true,
   placeholder:'Text',
   type:'text'
};

export const Required = Template.bind({});
Required.args = {
    required:true,
  placeholder:'Required Text',
  label:'*Required',
  type:'text',
  color:'red'
};
export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
   success:true,
   placeholder:'Success',
   label:'Success',
   type:'text',
   color:'green'
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
   password:true,
   placeholder:'Password',
   type:'password',
   icon:'👀'
};
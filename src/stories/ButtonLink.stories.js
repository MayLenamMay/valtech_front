import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Button from '../components/ButtonLink/ButtonLink';

export default {
  title: "Components/ButtonLink",
  component: Button,
  decorators: [withRouter],
};

// Turn Stories preview Background to dark mode to see this Button Story
const Template = args => <Button {...args} />

export const Default = Template.bind({});

export const Simple = Template.bind({});
Simple.args = { text: "Simple Link", type: "simple" }
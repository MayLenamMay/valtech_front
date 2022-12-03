import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import CityCard from '../components/CityCard/CityCard';

export default {
    title: "Components/CityCard",
    component: CityCard,
    decorators: [withRouter],
};
const Template = args => <CityCard {...args} />

export const Default = Template.bind({});
Default.args = {
    info: {
        id: 55,
        city: 'Tunis',
        country_name: 'Tunisia',
        image_url: 'https://images.unsplash.com/photo-1636865266989-58043bceaa71?format=640x480',
        body: 'Pellentesque in ipsum id orci porta dapibus.',
        link: '#'
    },
    isBanner: true
}

export const Simple = Template.bind({});
Simple.args = {
    info: {
        id: 55,
        city: 'Tunis',
        country_name: 'Tunisia',
        image_url: 'https://images.unsplash.com/photo-1636865266989-58043bceaa71?format=640x480',
        body: 'Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    },
    isBanner: false
}
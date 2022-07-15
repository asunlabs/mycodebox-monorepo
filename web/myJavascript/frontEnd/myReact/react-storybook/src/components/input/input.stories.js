import React from 'react';
import Input from './input';

// component story format
export default {
    title : 'form/Input',
    component : Input
}

export const Large = () => <Input variant='large' />
export const Medium = () => <Input variant='medium' />
export const Small = () => <Input variant='small' />

// Storybook version 6 => changing story name
Small.storyName = 'Small Input'


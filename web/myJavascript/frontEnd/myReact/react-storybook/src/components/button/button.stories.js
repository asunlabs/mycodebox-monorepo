import React from 'react';
import Center from '../center/center';
import Button from './button';

// component story format
export default {
    title : 'form/Button',
    component : Button, 
    args : {
        children : 'Button'
    },
    // adding control to Storybook app
    argTypes : {
        variant : {
            options : ['primary', 'secondary', 'success', 'danger'],
            control : { type : 'select' }
        }
    }, 
    // decorators : [story => <Center>{story()}</Center>]
}

// Hard-coded stories
export const Primary = () =><Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

// Stories with args mechanism in Storybook version 6
const Template = (args) => <Button {...args} />

export const PrimaryA = Template.bind({}) // pass empty object
// define the empty object
PrimaryA.args = {
    variant : 'primary', 
    children : 'Primary Args'
}

// LongPrimaryA extends PrimaryA with different children
export const LongPrimaryA = Template.bind({}) 
LongPrimaryA.args = {
    ...PrimaryA.args,
    // overwriting children
    children : 'Secondary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    // getting default children
    variant : 'secondary', 
}

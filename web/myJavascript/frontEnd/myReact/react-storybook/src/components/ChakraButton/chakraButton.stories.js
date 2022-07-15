import React from 'react'
import { Button } from '@chakra-ui/react'

export default {
    title : 'Chakra/Button', 
    component : Button,
    argTypes : {
        onClick : { action : 'clicked' }
    }
}

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    backgroundColor : 'green',
    color : 'white',
    padding : '20',
    children : 'Success', 
}

export const Danger = Template.bind({})
Danger.args = {
    backgroundColor : 'red',
    color : 'white',
    padding : '20',
    children : 'Danger'
}
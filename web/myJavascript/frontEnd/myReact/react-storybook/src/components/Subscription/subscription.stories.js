import React from 'react';
import { Primary } from '../button/button.stories';
import { Large } from '../input/input.stories';

export default {
    title : 'form/Subscription', 
}

export function PrimarySubscription() {
    return (
    <>
        <Large />
        <Primary />
    </>
    )
}

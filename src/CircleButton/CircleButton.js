import React from 'react';
import './CircleButton.css';

export default function NavCircleButton(props) {
    console.log(props);
    // destructuring state? 
    const {tag, className, children, ...otherProps} = props

    // are we using createElement because there's no JSX? 
    return React.createElement(
        props.tag,
        {
            className: ['NavCircleButton', props.className].join(' '),
            ...otherProps
        },
        props.children 

    )
}

NavCircleButton.defaultProps = {
    tag: 'a',
}
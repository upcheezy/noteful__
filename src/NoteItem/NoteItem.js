import React from 'react';
import STORE from '../dummy-store';

export default function NoteItem(props) {
    return (
        <li>
            {props.name}
        </li>
    )
}
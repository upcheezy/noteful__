import React from 'react';
import './FolderItem.css';

export default function FolderItem(props) {
    return (
        <li>
            {props.name}
        </li>
    )
}
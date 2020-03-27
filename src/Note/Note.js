import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Note(props) {
    return (
        <div className='Note'>
            <h2 className='Note__title'>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <button className='Note__delete' type='button'>
                <FontAwesomeIcon icon={faTrashAlt} />
                {' '}
                remove
            </button>
            <div className='Note__dates'>
                <div className='Note__dates-modified'>
                    Modified
                    {' '}
                    <span className='Date'>
                        {format(props.modified, 'Do MMM YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom'

function Card ({ id, title, cover }) {
    console.log(id)
    return (
        <Link to={`/listings/${id}`}>
        <div className={styles.card}>
            <img src={cover} alt='Un de nos logements' />
            <h3>{title}</h3>
        </div>
        </Link>
    )
};

export default Card;
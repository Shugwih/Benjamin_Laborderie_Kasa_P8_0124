import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import styles from './Listings.module.scss'

function Listings() {
    const { id } =useParams();
    const listing = data.find(item => item.id === id);
    return (
        <div className={styles.listings}>
        {listing && (
            <div>
                <img src={listing.cover} alt={listing.title} />
                <h1>{listing.title}</h1>
                <h2>{listing.location}</h2>
                <ul>
                    {listing.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    )
}

export default Listings
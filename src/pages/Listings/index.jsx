import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import styles from './Listings.module.scss'
import Rating from '../../components/Rating/'
import Collapse from '../../components/Collapse/'

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
                <div className={styles.host_rating_container}>
                    <Rating rating={listing.rating} />
                    <div className={styles.host_container}>
                        <h3>{listing.host.name}</h3>
                        <img src={listing.host.picture} alt={listing.host.name} />
                    </div>
                </div>
                <div className={styles.collapse_container}>
                    <div className={styles.collapse_element}>
                        <Collapse title="Description">
                            <p>{listing.description}</p>
                        </Collapse>
                    </div>
                    <div className={styles.collapse_element}>
                    <Collapse title="Équipements">
                        <div className={styles.equipements_list}>
                            <ul>
                                {listing.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li> 
                                ))}
                            </ul>
                        </div>
                    </Collapse>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default Listings
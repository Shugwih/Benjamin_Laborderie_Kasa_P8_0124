import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Rating.module.scss';

function Rating({ rating }) {
    const totalStars = 5;

    return (
        <div className={styles.rating}>
            {[...Array(totalStars)].map((star, index) => {
                const ratingValue = index + 1;
                const starType = ratingValue <= rating ? 'fullStar' : 'emptyStar';
                return (
                    <span key={index} className={styles[starType]}>
                        <FontAwesomeIcon icon={starType === 'fullStar' ? fullStar : emptyStar} />
                    </span>
                );
            })}
        </div>
    );
}

export default Rating;

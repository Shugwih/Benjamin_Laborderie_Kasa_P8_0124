import React from 'react';
import styles from './Banner.module.scss';

function Banner( {backgroundImage} ) {
    return (
        <div 
            className={styles.banner}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            
        </div>
    );
}

export default Banner;
import React from 'react';
import styles from './Banner.module.scss';

function Banner({ backgroundImage, bannerText }) {
    return (
        <div className={styles.banner}>
            <img src={backgroundImage} alt="Banner" />
            {bannerText && <h1>{bannerText}</h1>}
        </div>
    );
}

export default Banner;
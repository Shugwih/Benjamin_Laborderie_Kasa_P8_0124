import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../Assets/Footer_logo.svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <img src={logo} alt='Kasa - Logo'></img>
            <p>© 2020 Kasa. <span className={styles.breack}>All</span> rights reserved</p>
        </div>
    )
}

export default Footer;
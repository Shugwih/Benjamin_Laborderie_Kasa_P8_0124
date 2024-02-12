import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../Assets/Main_logo.svg'

function Header() {
    
    /* Get the Navigation link path to apply scss when active */
    const location = useLocation();

    const getLinkClassName = (path) => {
    return location.pathname === path ? `${styles.navLink} ${styles.selected}` : styles.navLink;
    };
    /*--------------------------------------------------------*/

    return (
        <header className={styles.header}>
            <div className={styles.top_container}>
                <div className={styles.top_container_main_logo}>
                    <img src={logo} alt='Kasa - Logo'></img>
                </div>

                <nav>
                    <Link to="/" className={getLinkClassName('/')}>ACCUEIL</Link>
                    <Link to="/About" className={getLinkClassName('/About')}>À PROPOS</Link>
                </nav>
            </div>
        </header>    
    )
}

export default Header
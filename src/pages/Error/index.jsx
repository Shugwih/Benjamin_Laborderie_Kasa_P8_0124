import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

function Error() {
    return (
      <div className={styles.Error}>
        <h1>404</h1>
        <h2>Oups! La page <span className={styles.breack}>que</span> vous demandez n'existe pas.</h2>
        <nav>
          <Link to="/" className={styles.errorToHomeLink}>Retourner sur la page d'accueil</Link>
        </nav>
      </div>
    );
}

export default Error;

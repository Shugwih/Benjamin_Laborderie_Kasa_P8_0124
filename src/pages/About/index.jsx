import React from 'react';
import styles from './About.module.scss'
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import Aboutbanner from '../../Assets/About_Banner.jpg';

function About() {

    return (
        <div className={styles.About}>
            <Banner backgroundImage={Aboutbanner}/>
            <div className={styles.collapse_container}>
                <div className={styles.collapse_element}>
                    <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiée par nos équipes.</p>
                    </Collapse>
                </div>
                <div className={styles.collapse_element}>
                    <Collapse title="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînemra une exclusion de notre plateforme.</p>
                    </Collapse>
                </div>
                <div className={styles.collapse_element}>
                    <Collapse title="Service">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînemra une exclusion de notre plateforme.</p>
                    </Collapse>
                </div>
                <div className={styles.collapse_element}>
                    <Collapse title="Sécurité">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux criètres de sécurité établis par nos services. En laissant une note aussi à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Collapse>
                </div>
            </div>

        </div>
    )
}

export default About
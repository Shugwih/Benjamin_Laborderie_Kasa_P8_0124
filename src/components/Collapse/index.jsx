import React, { useState } from 'react';
import styles from './Collapse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp as ChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown as ChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.collapse}>
            <div className={styles.collapseButton}>
                {title}
                <span onClick={toggleCollapse}>
                    <FontAwesomeIcon icon={isOpen ? ChevronDown : ChevronUp} />
                </span>
            </div>
            {isOpen && <div className={styles.content}>{children}</div>}
        </div>
    );
}

export default Collapse;

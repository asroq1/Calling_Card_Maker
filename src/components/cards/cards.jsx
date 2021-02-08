import React from 'react';
import styles from './cards.module.css';

const Cards = ({cards}) => {
    const DEFAULT_IMAGE = '/images/default_logo.png';

    const { name , company, title , eamil , message , theme , fileName , fileURL} = cards;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img  className={styles.avatar}src={url} alt="profile Photo"></img>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.eamil}>{eamil}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
};

function getStyles(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
            case 'light':
                return styles.light;
                case 'colorful':
                    return styles.colorful;
                    default:
                        throw new Error(`unknow Theme : ${theme}`);
    }
}

export default Cards;
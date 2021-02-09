import React from 'react';
import Cards from '../cards/cards';
import styles from '../preview/preview.module.css';
const Preview = ({cards}) => {
    return (
    <section className={styles.preview}>
        <h1 className={styles.title}>Card Previews</h1>
        <ul className={styles.cards}>
        { Object.keys(cards).map(key =>(
                <Cards
                key={key} 
                cards={cards[key]} 
                />
         ))}
        </ul>
    </section>
    );
};

export default Preview;
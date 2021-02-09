import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../maker/maker.module.css';
import Preview from '../preview/preview';
const Maker = ({ FileInput ,authService}) => {
    const [cards, setCards] = useState({
        '1' :{
            id: '1',
            name : 'marsoon',
            company : 'Google',
            theme : 'dark',
            title : 'S/W Engineer',
            email : 'asroq98@gmail.com',
            message : 'go for it',
            fileName : 'marsoon',
            fileURL : null,
        },

        '2' : {
            
        id: '2',
        name : 'marsoon',
        company : 'Google',
        theme : 'light',
        title : 'S/W Engineer',
        email : 'asroq98@gmail.com',
        message : 'go for it',
        fileName : 'marsoon',
        fileURL : 'marsoon.png',
        },

        '3' :{
            id: '3',
            name : 'marsoon',
            company : 'Google',
            theme : 'colorful',
            title : 'S/W Engineer',
            email : 'asroq98@gmail.com',
            message : 'go for it',
            fileName : 'marsoon',
            fileURL : null,
        }
    });

    const history = useHistory();

    const onLogout= () =>{
        authService.logout();
    };

    const createOrupdateCard = card =>{
       setCards(cards =>{
           const updated = {... cards};
           updated[card.id] = card;
           return updated;
       })
    };

    const deleteCard = card =>{
        setCards(cards =>{
            const updated = {... cards};
            delete updated[card.id];
            return updated;
        })
    }
    useEffect(() =>{
        authService.onAuthChange(user =>{
        if(!user){
            history.push('/');
        }
        });
    });
    
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
              <Editor FileInput={FileInput} cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
              <Preview  cards={cards}/>  
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from '../maker/maker.module.css';
import Preview from '../preview/preview';
const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
            id: '3',
            name : 'marsoon',
            company : 'Google',
            theme : 'colorful',
            title : 'S/W Engineer',
            email : 'asroq98@gmail.com',
            message : 'go for it',
            fileName : 'marsoon',
            fileURL : null,

        },
    ]);

    const history = useHistory();

    const onLogout= () =>{
        authService.logout();
    };

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
              <Editor cards={cards} />
              <Preview  cards={cards}/>  
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
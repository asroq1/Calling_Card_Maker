import React, { useRef } from 'react';
import Button from '../button/button';
import Cards from '../cards/cards';
import styles from '../card_edit_form/card_edit_form.module.css';

const CardEditForm = ({FileInput ,cards , updateCard, deleteCard}) => {

    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
  
    const { name , company, title , email , message , theme , fileName , fileURL} = cards;
   
    const onsubmit = () =>{
        deleteCard(cards);
    }
    const onChange = event =>{
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...cards,
            [event.currentTarget.name] : event.currentTarget.value,
        }); 
    };
    
    const onFileChange = file =>{
        updateCard({
            ...cards,
            fileName: file.name,
            fileURLL : file.url,
        });
    };
        return (
        <form className={styles.form}>
            <input 
            className={styles.input} 
            type="text" 
            name="name" 
            value={name}
            ref={nameRef}
            onChange={onChange}
            />
            <input  
            className={styles.input} 
            type="text" 
            name="company" 
            value={company}
            ref={companyRef}
            onChange={onChange}
            />
            <select name="theme" 
            ref={themeRef} 
            value={theme} 
            className={styles.select}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input 
            className={styles.input} 
            type="text" 
            name="title" 
            value={title}
            ref={titleRef}
            onChange={onChange}
            />
            <input 
            className={styles.input} 
            type="text" 
            name="email" 
            value={email} 
            ref={emailRef}
            onChange={onChange} 
            />
            <textarea 
            className={styles.textarea} 
            name="message"
            value={message} 
            ref={messageRef}
            onChange={onChange}
            />
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button name="Delete" onClick={onsubmit} />
        </form>
    );
};

export default CardEditForm;
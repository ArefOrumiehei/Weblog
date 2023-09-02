import { useContext, useState } from 'react';
import { styled } from 'styled-components';

//Styles
import styles from '../Styles/Write.module.css';
import { DarkModeContext } from '../context/DarkModeProvider';

const WriteDiv = styled.div `
  
  & #writeInput , #writeForm {
    color: ${({theme}) => theme.text};
  }
`

const Write = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title , setTitle] = useState('')
  const [text , setText] = useState('')

  const {darkMode} = useContext(DarkModeContext)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // reset all inputs
  const resetHandler = (e) => {
    e.preventDefault();
    setSelectedImage(null);
    setTitle('');
    setText('');
  
    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll(`.${styles.writeCheckbox}`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  

  return (
    <WriteDiv className={styles.write}>
      {selectedImage ? <img className={styles.writeImg} src={selectedImage} alt="Selected Image" />
        :
        <label htmlFor='fileInput'><img src={`https://placehold.co/600x300/${darkMode ? 'bdbdbd' : 'd1d1d1'}/8f8f8f?text=select+cover+image&font=Montserrat`} className={styles.imgPlaceholder}/></label>
      }
      <form className={styles.writeForm}>
        <div className={styles.writeFormGroup}>
          <label htmlFor="fileInput">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.writeIcon}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
            </svg>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
          <input className={styles.writeInput} id='writeInput' value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" autoFocus={true} />
        </div>
        <div className={styles.writeFormGroup} id='writeForm'>
          <div className={styles.writeCheckboxs}>
            <label>Categories : </label>
            <span className={styles.writeCheckboxItem}><input className={styles.writeCheckbox} type='checkbox' />Life</span>
            <span className={styles.writeCheckboxItem}><input className={styles.writeCheckbox} type='checkbox' />Tech</span>
            <span className={styles.writeCheckboxItem}><input className={styles.writeCheckbox} type='checkbox' />Car</span>
            <span className={styles.writeCheckboxItem}><input className={styles.writeCheckbox} type='checkbox' />Space</span>
            <span className={styles.writeCheckboxItem}><input className={styles.writeCheckbox} type='checkbox' />Car</span>
            <span className={styles.writeCheckboxItem}><input className={styles.writeCheckbox} type='checkbox' />Music</span>
          </div>
        </div>
        <div className={styles.writeFormGroup}>
          <textarea
            className={`${styles.writeInput} ${styles.writeText}`}
            id='writeInput'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tell your story..."
            type="text"
          ></textarea>
        </div>
        <button className={`${styles.writeSubmit} ${styles.publishBtn}`} onClick={(e) => e.preventDefault()}>Publish</button>
        <button className={`${styles.writeSubmit} ${styles.resetBtn}`} onClick={resetHandler}>Reset</button>
      </form>
    </WriteDiv>
  );
};

export default Write;

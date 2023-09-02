import { styled } from 'styled-components';  

//Icons
import { IconSearch } from '@tabler/icons-react';

//Styles
import styles from '../Styles/SearchSwitch.module.css'

//Components
import DarkModeBtn from './DarkModeBtn';


const Div = styled.div `
  
  & #searchIcon {
    color: ${({theme}) => theme.text};
  }
`


export default function SearchSwitch() {



  return (
    <Div className={styles.container}>
        <DarkModeBtn />
      <IconSearch className={styles.searchIcon} id='searchIcon' size={30}/>
    </Div>
  );
}
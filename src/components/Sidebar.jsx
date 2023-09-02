import { styled } from 'styled-components';
import styles from '../Styles/Sidebar.module.css';

import image from '../assets/images/history-in-hd-e5eDHbmHprg-unsplash.jpg'
import Social from './Social';

const SidebarDiv = styled.div `
    background-color:  ${({theme}) => theme.sidebar};
    color: ${({theme}) => theme.text};

    & a {
        color: ${({theme}) => theme.text};
    }
`

const Sidebar = () => {
    return (
        <SidebarDiv className={styles.sidebar}>
            <div className={styles.sidebarItem}>
                <span className={styles.sidebarTitle}>About Me</span>
                <img className={styles.sidebarImg} src={image} alt="Astronaut Image" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quo voluptas iusto eos provident.</p>
            </div>
            <div className={styles.sidebarItem}>
                <span className={styles.sidebarTitle}>Categories</span>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>Life</li>
                    <li className={styles.sidebarListItem}>Tech</li>
                    <li className={styles.sidebarListItem}>Sport</li>
                    <li className={styles.sidebarListItem}>Music</li>
                    <li className={styles.sidebarListItem}>Space</li>
                    <li className={styles.sidebarListItem}>Car</li>
                </ul>
            </div>
            <div className={styles.sidebarItem}>
                <span className={styles.sidebarTitle}>Follow Us</span>
                <div className={styles.sidebarSocial}>
                    <Social/>
                </div>
            </div>
        </SidebarDiv>
    );
};

export default Sidebar;
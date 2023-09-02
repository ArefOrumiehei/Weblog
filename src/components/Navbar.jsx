import { Link } from 'react-router-dom'

//Styles
import styles from "../Styles/Navbar.module.css"
import { styled } from "styled-components";

//Components
import Social from "./Social";
import UserAvatar from './UserAvatar'
import SearchSwitch from './SearchSwitch'


const NavbarDiv = styled.div `
    background-color: ${({theme}) => theme.navbar};

    & a {
        color: ${({theme}) => theme.text};
    }
`


const Navbar = () => {

    const isUserLogin = true
    return (
        <NavbarDiv className={styles.navbar}>
            <div className={styles.navbarRight}>
                <Social/>
                <div className={styles.verticalLine}></div>
                <SearchSwitch/>
            </div>
            <div className={styles.navbarCenter}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarListItem}><Link to='/'>Home</Link></li>
                    <li className={styles.navbarListItem}><Link to='/'>About</Link></li>
                    <li className={styles.navbarListItem}><Link to='/'>Contact</Link></li>
                    <li className={styles.navbarListItem}><Link to='/write'>Write</Link></li>
                    {/* <li className={styles.navbarListItem}><SearchIcon className={styles.searchIcon} sx={{ fontSize: 28 }}/></li> */}
                </ul>
                
            </div>
            <div className={styles.navbarLeft}>
                {isUserLogin ? 
                <UserAvatar/>
                :
                <>
                    <Link className={styles.loginLink} to='/login'>Login</Link>
                    <Link className={styles.registerLink} to='/register'>Register</Link>
                </>
                }
            </div>
        </NavbarDiv>
    );
};

export default Navbar;
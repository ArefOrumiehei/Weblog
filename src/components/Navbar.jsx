import styles from "../Styles/Navbar.module.css"
import { Link } from 'react-router-dom'

import Social from "./Social";

import DashboardMenu from './DashboardMenu'
import SearchSwitch from './SearchSwitch'


const Navbar = () => {

    const isUserLogin = true
    return (
        <div className={styles.navbar}>
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
                <DashboardMenu/>
                :
                <>
                    <Link className={styles.loginLink} to='/login'>Login</Link>
                    <Link className={styles.registerLink} to='/register'>Register</Link>
                </>
                }
            </div>
        </div>
    );
};

export default Navbar;
import styles from "../Styles/Navbar.module.css"
import { Link } from 'react-router-dom'


import search from "../assets/svgs/search.svg"
import profile from "../assets/images/profilePic.jpg"
import Social from "./Social";

const Navbar = () => {

    const isUserLogin = true
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarRight}>
                <Social/>
            </div>
            <div className={styles.navbarCenter}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarListItem}><Link to='/'>Home</Link></li>
                    <li className={styles.navbarListItem}><Link to='/'>About</Link></li>
                    <li className={styles.navbarListItem}><Link to='/'>Contact</Link></li>
                    <li className={styles.navbarListItem}><Link to='/write'>Write</Link></li>
                    {isUserLogin && <li className={styles.navbarListItem}><Link to='/'>LogOut</Link></li> }
                </ul>
            </div>
            <div className={styles.navbarLeft}>
                {isUserLogin ? 
                <Link to='/settings'><img className={styles.profileImg} src={profile} alt="Profile Image" /></Link>
                :
                <>
                    <Link className={styles.loginLink} to='/login'>Login</Link>
                    <Link className={styles.registerLink} to='/register'>Register</Link>
                </>
                }
                <img className={styles.search} src={search} alt="Search Icon"/>
            </div>
        </div>
    );
};

export default Navbar;
import styles from '../Styles/Login.module.css';

import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className={styles.login}>
            <span className={styles.loginTitle}>Login</span>
            <form className={styles.loginForm}>
                <label>Email</label>
                <input className={styles.loginInput} type="text" placeholder='Enter yoir email...' />
                <label>Password</label>
                <input className={styles.loginInput} type="password" placeholder='Enter yoir password...' />
                <button className={styles.loginBtn}>Login</button>
            </form>
            <button className={styles.loginRegisterBtn}>
                <Link to='/register'>Register</Link>
            </button>
        </div>
    );
};

export default Login;
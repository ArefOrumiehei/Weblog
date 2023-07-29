import { Link } from 'react-router-dom';
import styles from '../Styles/Register.module.css';

const Register = () => {
    return (
        <div className={styles.register}>
            <span className={styles.registerTitle}>Register</span>
            <form className={styles.registerForm}>
                <label>Username</label>
                <input className={styles.registerInput} type="text" placeholder='Enter yoir username...' />
                <label>Email</label>
                <input className={styles.registerInput} type="text" placeholder='Enter yoir email...' />
                <label>Password</label>
                <input className={styles.registerInput} type="password" placeholder='Enter yoir password...' />
                <button className={styles.registerBtn}>Register</button>
            </form>
            <button className={styles.registerLoginBtn}>
                <Link to='/login'>Login</Link>
            </button>
        </div>
    );
};

export default Register;
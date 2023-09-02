//Styles
import styles from '../Styles/Social.module.css';


//Icons
import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandTwitter } from '@tabler/icons-react';


const Social = () => {
    return (
        <div>
            <ul className={styles.socialList}>
                    <li>
                        <a className={styles.facebook} href="#">
                            <IconBrandFacebook className={styles.social}/>
                        </a>
                    </li>
                    <li>
                        <a className={styles.instagram} href="#">
                            <IconBrandInstagram className={styles.social}/>
                        </a>
                    </li>
                    <li>
                        <a className={styles.telegram} href="#">
                            <IconBrandTelegram className={styles.social}/>
                        </a>
                    </li>
                    <li>
                        <a className={styles.twitter} href="#">
                            <IconBrandTwitter className={styles.social}/>
                        </a>
                    </li>
                </ul>
        </div>
    );
};

export default Social;
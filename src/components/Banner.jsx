import styles from '../Styles/Banner.module.css';

import bannerImage from "../assets/images/niklas-priddat-kqJJqamhZMg-unsplash.jpg"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerTitles}>
                <span className={styles.bannerTitleSm}><span className={styles.reactSpan}>React</span> & <span className={styles.nodeSpan}>Node</span></span>
                <span className={styles.bannerTitleLg}>Blog Website</span>
            </div>
            <img className={styles.bannerImg} src={bannerImage} alt="Banner Image" />
        </div>
    );
};

export default Banner;
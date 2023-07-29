import styles from '../Styles/Home.module.css';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';


const Home = () => {
    return (
        <>
            <Banner />
            <div className={styles.home}>
                <Posts />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;

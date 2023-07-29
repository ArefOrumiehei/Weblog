import styles from '../Styles/SinglePost.module.css';

import Blog from '../components/Blog';
import Sidebar from '../components/Sidebar'

const SinglePost = () => {
    return (
        <div className={styles.singlePost}>
            <Blog/>
            <Sidebar/>
        </div>
    );
};

export default SinglePost;
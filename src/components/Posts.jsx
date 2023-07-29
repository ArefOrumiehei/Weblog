import styles from '../Styles/Posts.module.css';
import Post from './Post';

const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Posts;
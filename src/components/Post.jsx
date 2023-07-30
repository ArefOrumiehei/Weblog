import { Link } from 'react-router-dom';
import styles from '../Styles/Post.module.css';

import coverImg from "../assets/images/moon.avif"

const Post = () => {
    return (
        <div className={styles.post}>
            <img className={styles.postImg} src={coverImg} alt="Post Image" />
            <div className={styles.postInfo}>
                <div className={styles.postCategories}>
                    <span className={styles.postCategory}>Life</span>
                    <span className={styles.postCategory}>Space</span>
                </div>
                <span className={styles.postTitle}><Link to='/post/'>Lorem ipsum quisquam sed laborum</Link></span>
                <div className={styles.postData}>
                    <span className={styles.postAuthor}>Aref Orumiehei</span>
                    <span className={styles.postDate}>1 hour ago</span>
                </div>
                <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dignissimos enim impedit quis, iure aspernatur ipsam doloremque, expedita consequatur, quasi perferendis odio eos provident. Sed veritatis dolores sequi omnis nam.</p>
            </div>
        </div>
    );
};

export default Post;
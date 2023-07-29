import { Link } from 'react-router-dom';
import styles from '../Styles/Post.module.css';

const Post = () => {
    return (
        <div className={styles.post}>
            <img className={styles.postImg} src="https://images.unsplash.com/photo-1600695580162-cb0fa319067a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="Post Image" />
            <div className={styles.postInfo}>
                <div className={styles.postCategories}>
                    <span className={styles.postCategory}>Life</span>
                    <span className={styles.postCategory}>Space</span>
                </div>
                <span className={styles.postTitle}><Link to='/post/'>Lorem ipsum quisquam sed laborum</Link></span>
                <span className={styles.postData}>1 hour ago</span>
            </div>
            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dignissimos enim impedit quis, iure aspernatur ipsam doloremque, expedita consequatur, quasi perferendis odio eos provident. Sed veritatis dolores sequi omnis nam.</p>
        </div>
    );
};

export default Post;
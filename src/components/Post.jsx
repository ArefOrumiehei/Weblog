import { Link } from 'react-router-dom';
import styles from '../Styles/Post.module.css';

import coverImg from "../assets/images/moon.avif"
import { styled } from 'styled-components';

const PostDiv = styled.div `
    background-color:  ${({theme}) => theme.bgLighter};

    & #link {
        color: ${({theme}) => theme.text};
    }

    & #postData {
        color: ${({theme}) => theme.textSoft};
    }

    & #postDesc {
        color: ${({theme}) => theme.textSoft};
    }
`

const Post = () => {
    return (
        <PostDiv className={styles.post}>
            <img className={styles.postImg} src={coverImg} alt="Post Image" />
            <div className={styles.postInfo}>
                <div className={styles.postCategories}>
                    <span className={styles.postCategory}>Life</span>
                    <span className={styles.postCategory}>Space</span>
                </div>
                <span className={styles.postTitle}><Link id='link' to='/post/'>Lorem ipsum quisquam sed laborum</Link></span>
                <div className={styles.postData} id='postData'>
                    <span className={styles.postAuthor}>Aref Orumiehei</span>
                    <span className={styles.postDate}>1 hour ago</span>
                </div>
                <p className={styles.postDescription} id='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dignissimos enim impedit quis, iure aspernatur ipsam doloremque, expedita consequatur, quasi perferendis odio eos provident. Sed veritatis dolores sequi omnis nam.</p>
            </div>
        </PostDiv>
    );
};

export default Post;
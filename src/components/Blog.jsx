import styles from '../Styles/Blog.module.css';

import blogImg from '../assets/images/blogImg.avif'

const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className={styles.blogWrapper}>
                <img className={styles.blogImg} src={blogImg} alt="Blog Image" />
                <h1 className={styles.blogTitle}>Lorem ipsum dolor sit amet consectetur
                    <div className={styles.blogEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.blogIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                            <path d="M16 5l3 3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.blogIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 7l16 0"></path>
                            <path d="M10 11l0 6"></path>
                            <path d="M14 11l0 6"></path>
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                    </div>
                </h1>
                <div className={styles.blogInfo}>
                    <span className={styles.blogAuthor}><b>Aref Orumiehei</b></span>
                    <span className={styles.blogDate}>1 hour ago</span>
                </div>
                <p className={styles.blogDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo saepe aliquam possimus illo delectus veniam sapiente obcaecati adipisci quaerat quia mollitia aliquid nobis, cumque ad cupiditate. Expedita voluptatum natus esse. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos ipsum ex debitis laudantium magni. Soluta, debitis nam omnis officiis dolores dolorem recusandae asperiores! Quis, non? Reiciendis voluptates reprehenderit dolorem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos ullam repudiandae sunt quibusdam? Dolores aperiam harum dicta, consequuntur magni aut ea, cupiditate omnis illo possimus maiores rem. Expedita, doloribus!
                </p>
            </div>
        </div>
    );
};

export default Blog;
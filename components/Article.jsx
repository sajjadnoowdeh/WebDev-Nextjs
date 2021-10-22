import Link from "next/link"
import styles from "../styles/Articles.module.css"
const Article = ({article}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
             <a className={styles.card}>
                 <h3>{article.title}</h3>
             </a>
        </Link>
    )
}

export default Article

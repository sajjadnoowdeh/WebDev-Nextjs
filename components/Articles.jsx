import styles from "../styles/Articles.module.css";
import Article from "./Article";
const Articls = ({ articls }) => {
  return (
    <div className={styles.grid}>
      {articls.map((article) => (
       <Article 
         article={article}
       />
      ))}
    </div>
  );
};

export default Articls;

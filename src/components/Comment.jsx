import { ThumbsUp, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";

export const comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandas</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:00:51">
                Cerca de 2h atrás
              </time>{" "}
            </div>
            <button title="Deletar comentário">
              <TrashSimple size={20} />
            </button>
          </header>
          <p>Muito bom! Parabéns</p>
        </div>
        <footer>
          Aplaudir{" "}
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

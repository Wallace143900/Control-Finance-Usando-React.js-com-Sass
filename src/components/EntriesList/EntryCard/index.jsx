import styles from "./styles.module.scss";
import TrashImg from "../../../assets/trash.svg";

export const EntryCard = () => {
  return (
    <li className={styles.card}>
      <p>R$ 00,00</p>
      <div>
        <span>Entrada</span>
        <button>
          <img src={TrashImg} alt="Imagem de lixeira" />
        </button>
      </div>
    </li>
  );
};
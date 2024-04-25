import styles from "./styles.module.scss";
import TrashImg from "../../../assets/trash.svg";

export const EntryCard = ({entry, setEntries, deleteEntry}) => {
    const handleDelete = () => {
        deleteEntry(entry.id);
      };

  return (
    <li className={styles.card}>
      <p>{
        entry.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })
        }</p>
      <div>
        <span>{entry.categoryID === 0 ? "Entrada" : "Saída"}</span>
        <button onClick={handleDelete}> 
          <img src={TrashImg} alt="Imagem de lixeira" />
        </button>
      </div>
    </li>
  );
};
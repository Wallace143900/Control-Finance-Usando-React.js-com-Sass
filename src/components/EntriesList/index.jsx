import { EntryCard } from "./EntryCard";
import styles from "./styles.module.scss";

export const EntriesList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.totalInfo}>
        <p>Soma dos valores</p>
        <p>R$ 00,00</p>
      </div>
      <ul>
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
      </ul>
    </section>
  );
};
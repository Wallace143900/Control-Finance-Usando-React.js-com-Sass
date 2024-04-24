import { EntryCard } from "./EntryCard";
import styles from "./styles.module.scss";

export const EntriesList = ({entries, type}) => {
  return (
    <section className={styles.container}>
      <div className={styles.totalInfo}>
        <p>Soma dos valores</p>
        <p>
            {type === "Todos" 
                ?entries
                    .reduce(
                        (acc, cur) => 
                            cur.categoryID === 0 ? acc + cur.value : acc - cur.value,
                             0
                            )
                            .toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                            }) 
                            : type === "Entradas"
                             ?
                            entries
                                .reduce(
                                    (acc, cur) => (cur.categoryID === 0 ? acc + cur.value : acc),
                                     0
                                    ).toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                    })
                                : entries
                                    .reduce(
                                        (acc, cur) => (cur.categoryID === 1 ? acc - cur.value : acc), 
                                        0
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
        </p>
      </div>
      <ul>
        {
            type === "Todos" ?
            entries.map((entry) => <EntryCard key={entry.id} entry={entry}/>) : type === "Entradas" 
            ? entries.filter((entry) => entry.categoryID === 0).map((entry) => (<EntryCard key={entry.id} entry={entry}/>)) 
            : entries.filter((entry) => entry.categoryID === 1).map((entry) => (<EntryCard key={entry.id} entry={entry}/>))
        }
      </ul>
    </section>
  );
};
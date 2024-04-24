import styles from "./styles.module.scss";

export const ResumeSection = ({setType}) => {
  return (
    <section className={styles.resume}>
      <h2 className="title2">Resumo financeiro</h2>
      <div>
        <button onClick={() => setType("Todos")} className="text2">Todos</button>
        <button onClick={() => setType("Entradas")} className="text2">Entradas</button>
        <button onClick={() => setType("Saídas")} className="text2">Saídas</button>
      </div>
    </section>
  );
};
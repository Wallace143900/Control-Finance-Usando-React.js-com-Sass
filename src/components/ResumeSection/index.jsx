import styles from "./styles.module.scss";

export const ResumeSection = () => {
  return (
    <section className={styles.resume}>
      <h2 className="title2">Resumo financeiro</h2>
      <div>
        <button className="text2">Todos</button>
        <button className="text2">Entradas</button>
        <button className="text2">Saídas</button>
      </div>
    </section>
  );
};
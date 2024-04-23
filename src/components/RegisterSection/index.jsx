import styles from "./styles.module.scss";

export const RegisterSection = () => {
  return (
    <section className={styles.register}>
      <h1 className="title2">Registro de valor</h1>
      <p className="text1">
        Digite o valor e em seguida aperte no botão referente ao tipo do valor
      </p>
      <div>
        <p>Valor</p>
        <input type="number" placeholder="R$ 00,00" />
      </div>
      <div className={styles.typeInfo}>
        <p>Tipo de valor</p>
        <div>
          <button className="text2">Entrada</button>
          <button className="text2">Saída</button>
        </div>
      </div>
      <button className="text2">Inserir valor</button>
    </section>
  );
};
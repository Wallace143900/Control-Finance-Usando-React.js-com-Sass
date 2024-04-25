import { useState } from "react";
import styles from "./styles.module.scss";

export const RegisterSection = ({entries,setEntries}) => {
    const [value, setValue] = useState("");
    const [type, setType] = useState(null);

    const register = () => {
        const newEntry = {
            id: crypto.randomUUID(),
            value: value,
            categoryID: type
        }

        if(type !== null && value !== ""  && value !== 0){
            setEntries([...entries, newEntry]);
            setValue("")
            setType(null)
        }
    }

  return (
    <section className={styles.register}>
      <h1 className="title2">Registro de valor</h1>
      <p className="text1">
        Digite o valor e em seguida aperte no botão referente ao tipo do valor
      </p>
      <div>
        <p>Valor</p>
        <input required type="number" placeholder="R$ 00,00" min={0} value={value} onChange={(e) => setValue(Number(e.target.value))} />
      </div>
      <div className={styles.typeInfo}>
        <p>Tipo de valor</p>
        <div>
          <button id={styles.entrada} onClick={() => setType(0)} className="text2">Entrada</button>
          <button id={styles.saida} onClick={() => setType(1)} className="text2">Saída</button>
        </div>
      </div>
      <button onClick={register} className="text2">Inserir valor</button>
    </section>
  );
};
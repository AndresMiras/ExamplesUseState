import { useState } from 'react';
import styles from './UnitTransfer.module.scss';

export const UnitTransfer = ({name}) => {

    const cf = "cf";
    const ck = "ck";
    const fc = "fc";
    const fk = "fk";
    const kc = "kc";
    const kf = "kf";

    const [result, setResult] = useState("");
    const [operator, setOperator] = useState(ck);
    const [val1, setVal1] = useState(0);

    const clear = () => {
        document.getElementById(styles.val1).value = "";
        setVal1(0);
        setResult("");
    }

    const resolveOperation = () => {
        val1 > 0 && setResult (
            operator == cf ? (val1 * 9/5) + 32:
            operator == ck ? val1 + 273.15:
            operator == fc ? (val1 + 459.67) * 5/9:
            operator == fk ? (val1 - 32) * 5/9 + 273.15:
            operator == kc ? val1 - 273.15:
            operator == kf && (val1 - 273.15) * 9/5 + 32
        );
    }

    const operatorStyleChangue = (operatorAsigned) => {
        return operator == operatorAsigned ? `${styles.operator} ${styles.operator_active}` : styles.operator;
    }

    return (
        <>
            <section className={styles.container}>
                <h2>{name}</h2>
                <hr />
                <article className={styles.subcontainer}>
                    <div className={styles.inputVal}>
                        <label htmlFor="val1">Input - {operator} :</label>
                        <input type="number" id={styles.val1} onChange={({target})=> setVal1(parseInt(target.value))}/>
                    </div>
                    <div className={styles['container_operators']}>
                        <button className={styles.operator} onClick={()=>resolveOperation()}>Calcular</button>
                        <button className={styles.operator} onClick={()=>clear()}>Limpiar</button>
                        <button className={operatorStyleChangue(cf)} onClick={()=>setOperator(cf)}>ºC a ºF</button>
                        <button className={operatorStyleChangue(ck)} onClick={()=>setOperator(ck)}>ºC a ºK</button>
                        <button className={operatorStyleChangue(fc)} onClick={()=>setOperator(fc)}>ºF a ºC</button>
                        <button className={operatorStyleChangue(fk)} onClick={()=>setOperator(fk)}>ºF a ºK</button>
                        <button className={operatorStyleChangue(kc)} onClick={()=>setOperator(kc)}>ºK a ºC</button>
                        <button className={operatorStyleChangue(kf)} onClick={()=>setOperator(kf)}>ºK a ºF</button>
                    </div>
                    <hr />
                    <h4>Resultado: {result}</h4>
                </article>
    
            </section>
        </>
    )
}
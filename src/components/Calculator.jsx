import { useState } from 'react';
import styles from './Calculator.module.scss';

export const Calculator = ({name}) => {

    const suma = "+";
    const resta = "-";
    const multi = "*";
    const divi = "/";

    const [result, setResult] = useState("");
    const [operator, setOperator] = useState(suma);
    const [val1, setVal1] = useState(0);
    const [val2, setVals2] = useState(0);

    const resolveOperation = () => {
        setResult (
            operator == suma ? val1 + val2 :
            operator == resta ? val1 - val2 :
            operator == multi ? val1 * val2 :
            operator == divi && val1 / val2
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
                <label htmlFor="operSlector">Select Operator: </label>
                <select name="" id="operSlector" onChange={({target}) => setOperator(target.value)}>
                    <option value={suma}>suma</option>
                    <option value={resta}>resta</option>
                    <option value={multi}>multiplicación</option>
                    <option value={divi}>división</option>
                </select>
                <div className={styles['container_operators']}>
                    <p className={operatorStyleChangue(suma)} onClick={()=>setOperator(suma)}>+</p>
                    <p className={operatorStyleChangue(resta)} onClick={()=>setOperator(resta)}>-</p>
                    <p className={operatorStyleChangue(multi)} onClick={()=>setOperator(multi)}>x</p>
                    <p className={operatorStyleChangue(divi)} onClick={()=>setOperator(divi)}>/</p>
                </div>
                <div className={styles.inputVal}>
                    <label htmlFor="val1">Value 1: </label>
                    <input type="text" id="val1" onChange={({target})=> setVal1(parseInt(target.value))}/>
                </div>
                <div className={styles['container_operator']}>
                    <p className={styles.operator}>{operator}</p>
                </div>
                <div className={styles.inputVal}>
                    <label htmlFor="val2">Value 2: </label>
                    <input type="text" id="val2" onChange={({target})=> setVals2(parseInt(target.value))}/>
                </div>
                <button onClick={() => resolveOperation()}>Calculate</button>
                <hr />
                <h4>Resultado: {result}</h4>
    
            </section>
        </>
    )
}
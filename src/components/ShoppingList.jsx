import { useState } from "react";
import styles from './ShoppingList.module.scss';

/** No es necesario importar React en nuestros componentes mientras esté configurado Babel para que lo haga automáticamente*/

export const ShoppingList = (props) => {
    const [item, setItem] = useState("");
    const [listItems, setListItems] = useState([]);
    const [deleteError, setDeleteError] = useState(false);
    
    const inpHandleChangue = ({target}) => {
        let {value} = target;
        setItem(value);
    }

    const inpHandleClick = () => {
        setDeleteError(false);
    }

    const butAdd = () => {
        let newId = listItems.length;
        item != "" && setListItems([...listItems, {
            id: newId < 10 ? '0' + newId : newId,
            name: item,
        }]);
        setDeleteError(false);
    }

    const butDeleteItemsWithName = () => {
        setDeleteError(true)
        let aux = true;
        for (let index = 0; index < listItems.length && aux; index++) {
            if(listItems[index].name == item){
                setDeleteError(false)
            }
        }

        !deleteError && setListItems(listItems.filter(elm => elm.name != item));
    }

    const butDeleteItemsWithid = (str) => {
        setListItems(listItems.filter(elm => elm.id != str));
    }

    return(
        <>
            <section className={styles.container}>
                <h2>{props.name}</h2>
                <hr />
                <article className={styles.inputs}>
                    <input type="text" onClick={()=>inpHandleClick()} onChange={event => inpHandleChangue(event)}/>
                    <button onClick={() => butAdd()}>Add product</button>
                    <button onClick={() => butDeleteItemsWithName()}>Delete products</button>
                    {
                        deleteError && <p className={styles.deleteError}> ¡Product not found! </p>
                    }
                    
                </article>
                <section className={styles.container2}> 
                    {
                        listItems[0] !== undefined && listItems.map( elm => {
                            return(
                                <article key={elm.id}>
                                    <p> Article Nº:{elm.id} {elm.name} </p>
                                    <button onClick={() => butDeleteItemsWithid(elm.id)}><p>Delete</p></button>
                                </article>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )
}

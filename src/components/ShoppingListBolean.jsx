import { useState } from "react";
import styles from './ShoppingListBolean.module.scss';

/** No es necesario importar React en nuestros componentes mientras esté configurado Babel para que lo haga automáticamente*/

export const ShoppingListBolean = (props) => {
    const [item, setItem] = useState(null);
    const [listItems, setListItems] = useState([]);
    const [butStat, setButStat] = useState(false);

    const inpArticle = ({target}) => {
        let {value} = target;
        setItem(value);
    };

    const butAdd = () => {
        let newId = listItems.length;
        item !== "" && setListItems([...listItems, {
            id: newId < 10 ? '0' + newId : newId,
            state: true,
            name: item,
        }]);
    };

    const butLogicDelete = (id) => {
        setListItems(listItems.map(elm => {
            if(elm.id == id) elm.state = false;
            return elm;
        }));
    };

    const showMenu = () => setButStat(!butStat);

    return(
        <>
            <section className={styles.container}>
                <h2>{props.name}</h2>
                <hr />
                <button style={{margin: '0 0 2vh 0'}} onClick={() => showMenu(butStat)}>Open Menu</button>
                
                {
                    butStat && <> 
                    <article className={styles.inputs}>
                        <input type="text" onChange={event => inpArticle(event)}/>
                        <button onClick={() => butAdd()}>Add product</button>
                    </article>
                    <section className={styles.container2}> 
                    {
                        listItems[0] !== undefined && listItems.filter(elm => elm.state).map( elm => {
                            return(
                                <article key={elm.id}>
                                    <p> Article Nº:{elm.id} {elm.name} </p>
                                    <button onClick={() => butLogicDelete(elm.id)}><p>Delete</p></button>
                                </article>
                            )
                        })
                    }
                    </section>
                    </>
                }
                
            </section>
        </>
    )
}

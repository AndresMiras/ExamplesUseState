import React, { useState, useEffect } from 'react';
import { ShoppingList } from './ShoppingList';
import { ShoppingListBolean } from './ShoppingListBolean';
import { Calculator } from './Calculator';
import { UnitTransfer } from './UnitTransfer';
import { call } from '../utils/calls';
import * as util from '../utils/utils';
import styles from './App.module.scss';

const App = () => {
    const [stat, setStat] = useState(null);

    const sendIP = () => {
        /** its an example to use one custom call */
        call(`http://ipwho.is/${inputloc}`, setLocations);
    }

    return (
        <>
            <main className={styles.container}>
                <ShoppingList name={'ListaCompraApp'} listName={'la superlista'}/>
                <ShoppingListBolean name={'EjerArrayBoleano'} listName={'la superlista'}/>
                <Calculator name={'EjercicioCalculadora'}/>
                <UnitTransfer name={'CampoConversor'}/>
            </main>
        </>
    )
}

export default App;
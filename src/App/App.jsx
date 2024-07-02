import React, { useState } from "react"; // Importa React y el hook useState desde 'react'
import classNames from "classnames"; // Importa la librería 'classnames' para manejar clases de forma dinámica
import "./App.css"; // Importa el archivo de estilos CSS para este componente
import WishInput from "./WhisInput";
import WishList from "./WhisList";

// Estado inicial de los deseos, cada deseo es un objeto con texto y un estado (hecho o no hecho)
const initialWishes = [
    { text: "Un nuevo coche", done: false },
    { text: "Una nueva casa", done: false },
    { text: "Un nuevo trabajo", done: false },
    { text: "Un nuevo teléfono", done: false },
    { text: "Un nuevo ordenador", done: false },
    { text: "Una nueva bicicleta", done: true },
];

const App = () => {
    const [wishes, setWishes] = useState(initialWishes); // Inicializa el estado de los deseos con el estado inicial

    return (
        <div>
            <h1>Mi lista de deseos</h1>
            <h1>hecha con React</h1>
            <div className='container'>
                <WishInput onNewWish={wish => setWishes([wish, ...wishes])} />
                <WishList wishes={wishes} onWishesChange={setWishes} />
                <button
                    type="button"
                    className="wish-clear"
                    onClick={() => setWishes(wishes.filter(wish => !wish.done))}>
                    Archivar deseo
                </button>
            </div>
        </div>
    );
};

export default App; // Exporta el componente App para su uso en otros archivos
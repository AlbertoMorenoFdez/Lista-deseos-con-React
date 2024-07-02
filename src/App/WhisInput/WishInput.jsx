import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState(''); // Inicializa el estado de newWishText con un string vacío
    return (
        <fieldset className="wish-input">
            <legend className="wish-input__label">Quiero...</legend>
            <input className='wish-input__fields' placeholder="Introduce aquí tu deseo..."
                value={newWishText}
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter' && newWishText.length) {
                        onNewWish({ done: false, text: newWishText });
                        setNewWishText('');
                    }
                }} />
        </fieldset>
    );
}

WishInput.propTypes = {
    onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
    onNewWish: () => { },
};

export default WishInput; // Exporta el componente WishInput para su uso en otros archivos
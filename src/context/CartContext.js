import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {


    const [modalOnOff, setModalOnOff] = useState(false)
    const [btng4, setBtng4] = useState(1)

    const changeBtng = (n) => {
        setBtng4(n)
        console.log("esto es n", n)
        console.log("esto es btng4", btng4)
    }


    
    let [textoParaFoto, setTextoParaFoto]= useState(" Living")

    ////////////////////////
    
     

    /////////////////////


    // PARTE EXTERNA

    const data = {
        modalOnOff,
        setModalOnOff,
        btng4,
        setBtng4,
        changeBtng,
        setTextoParaFoto,
        textoParaFoto

    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider

export { CartContext }
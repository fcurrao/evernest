import { createContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const CartContext = createContext()

const CartProvider = ({ children }) => {

     
    const [pageofthis, setPageofthis] = useState(1)
    const [modalOnOff, setModalOnOff] = useState(false)
    const [btng4, setBtng4] = useState(1)
 

    const changeBtng = (n) => {
        setBtng4(n)
        console.log("esto es n", n)
        console.log("esto es btng4", btng4)
    }


    
    let [textoParaFoto, setTextoParaFoto]= useState(" Living")

    ////////////////////////
    
     










/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////// filters 

    // {
    //     "updated_after": "2020-03-01T23:26:53.402Z",
    //     "updated_before": "2025-03-01T23:26:53.402Z",
    //     "operation_type": "sale",
    //     "min_price": 500000,
    //     "max_price": 3000000,
    //     "min_bedrooms": 1,
    //     "min_bathrooms": 1,
    //     "min_parking_spaces": 1,
    //     "min_construction_size": 100,
    //     "max_construction_size": 1000,
    //     "min_lot_size": 100,
    //     "max_lot_size": 1000
    //   }


// // esto se filtra (busqueda)
// {title}
//     {nombre}
//       {price}
//       {bedrooms}
//       {bathrooms}
//       {parking}
//       {location}
//       {type}

//       // esto no se filtra
//       {arrayDeFotos}
//       {descripcion}
//       {arrayDeCaracteristicas}
//       {oficina}
//       {metros}
//       {beneficios}
//       {brochure}
//       {planos}





/////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////
    // ACA TRAIGO EL API ???
 


    ////////////////////////////////////////////////////////////////////////////////////
    // PARTE EXTERNA

    const data = {
        modalOnOff,
        setModalOnOff,
        btng4,
        setBtng4,
        changeBtng,
        setTextoParaFoto,
        textoParaFoto,
        setPageofthis,
        pageofthis
     


    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider

export { CartContext }
import { useState } from "react";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "../../pages/pages.css"

const Modal = ({ children }) => {

    const { textoParaFoto, setTextoParaFoto, modalOnOff, setModalOnOff, btng4, setBtng4,  changeBtng } = useContext(CartContext)
 

    // document.querySelector("#cajadetexto").onKeyUp = function(event){
    //     alert(event.keyCode);
    //     }

   const checkKey = (e) => {
        console.log("e", e.key)


        // if (e.key == 'ArrowLeft') {
        //     e.preventDefault();
        //     console.log("tocaste izquierda y anda")

        //     if (btng4 > 0) {
        //         setBtng4(btng4--)
        //         // left arrow
        //     } else { }
        // }
        // else if (e.key == 'ArrowRight') {
        //     e.preventDefault();
        //     console.log("tocaste derecha y anda")
        //     if (btng4 < 4) {
        //         setBtng4(btng4++)
        //         // right arrow
        //     } else { }

        // }


        switch (e.key) { 
            case "ArrowLeft":
                // Left pressed
                break;
            case "ArrowRight":
                // Right pressed
                break;
        }
    }




    const cambiarfotomenos = () => {
        // limite de fotos ( PONER EL LENGHT DE ARRAY DE FOTOS)
         
     

        if (btng4 > 1) {
            let counter = btng4
            console.log("counter", counter)
            console.log("btgn4 ", btng4)
            counter--
            setBtng4(counter)
            console.log("counter", counter)
            console.log("btgn4", btng4)
        } else { }

        
        if(btng4==1){
            setTextoParaFoto("Living")
        }if( btng4==2){
            setTextoParaFoto("Living")
        } if(btng4==3){
            setTextoParaFoto("Habitacion")
        } if(btng4==4){
            setTextoParaFoto("Patio")
        }

        console.log("XXXXXXXXXXXX",textoParaFoto )

    }


    const cambiarfotomas = () => {
        // limite de fotos ( PONER EL LENGHT DE ARRAY DE FOTOS)
        if (btng4 < 4) {
            let counter = btng4
            console.log("counter", counter)
            console.log("btgn4 ", btng4)
            counter++
            setBtng4(counter)
            console.log("counter", counter)
            console.log("btgn4", btng4)
        } else { }

        if(btng4==1){
            setTextoParaFoto("Habitacion")
        }if( btng4==2){
            setTextoParaFoto("Patio")
        } if(btng4==3){
            setTextoParaFoto("Living")
                } if(btng4==4){
            setTextoParaFoto("Living")
                }

        console.log("XXXXXXXXXXXX",textoParaFoto )
    }

    ///////////////////////////////////

        return (<>
        <section id="cajadetexto">
            <div className="oscurecer">.</div>
            <div className="contenedordeModal" >
               <div className="sectionArriba"> 

                <div  className="modalbutton">
                    <button className="bttt aaa"  onClick={() =>  cambiarfotomenos()}> Anterior </button> <h1 className="sinmarginmodal">{textoParaFoto}</h1>   <button className="bttt aaa"  onClick={() =>  cambiarfotomas()}> Siguiente </button>
                    </div>                <button className="botonX btbt" onClick={() => setModalOnOff(false)}>X</button>
                    </div>
 <div className="childrenmodal"  > {children} </div> 
                {/* onKeyDown={() => checkKey()} */}
            </div>
            </section>

        </>
        )
    }



    export default Modal


import "./pages.css"
import swal from 'sweetalert';
import { useState } from "react";
import Modal from '../components/Modal/Modal'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Carousel } from "bootstrap";    
// import Carousel from 'react-bootstrap/Carousel'
import Carrousel from "../components/Carrousel/Carrousel"

const Details = () => {



    const { textoParaFoto, setTextoParaFoto, modalOnOff, setModalOnOff, btng4, setBtng4, changeBtng } = useContext(CartContext)


    const rangechange = () => {
        const putrange = document.getElementById('lbrange').value
        const put = document.getElementById('lbrangev')
        console.log("putrange", putrange)
        put.innerHTML = `$ ${putrange}`;
    }




    const consoleLog = () => {
        console.log("aca voy a details")
    }



    const functionpic = (n) => {

        setModalOnOff(true);
        changeBtng(n);
    }




    //////////////////////////////////


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


        if (btng4 == 1) {
            setTextoParaFoto("Living")
        } if (btng4 == 2) {
            setTextoParaFoto("Living")
        } if (btng4 == 3) {
            setTextoParaFoto("Habitacion")
        } if (btng4 == 4) {
            setTextoParaFoto("Patio")
        }

        console.log("XXXXXXXXXXXX", textoParaFoto)

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

        if (btng4 == 1) {
            setTextoParaFoto("Habitacion")
        } if (btng4 == 2) {
            setTextoParaFoto("Patio")
        } if (btng4 == 3) {
            setTextoParaFoto("Living")
        } if (btng4 == 4) {
            setTextoParaFoto("Living")
        }

        console.log("XXXXXXXXXXXX", textoParaFoto)
    }

    ///////////////////////////////////



    return (<>

        <section className="divtitulo">

            <h1 className="titulo"> De los Encinos </h1>

        </section>




        <section className="propiedad">
            <div className="treintaporc">
                <section className=" center total">


                    <section className="mmrr62 center lefttotal">
                        <div className="titlfilt"> <h4 className="center ptext3" > </h4> </div>

                        <form className="boxyellow3 ifilters">
                            <div className="containerinput">
                                <input placeholder="Buscar por nombre.." className=" sss form-control inputt sbsb" /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></div>
                            <div className="containerinput">
                                <select className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                                    <option >Todas las locaciones</option>
                                    <option >Ciudad de Mexico</option>
                                    <option type="submit" >Toluca</option>
                                </select><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </div>

                            <div className="containerinput">
                                <select placeholder="tipo" className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                                    <option >Todos los tipos</option>
                                    <option>Premium</option>
                                    <option type="submit" >Plus</option>
                                </select>
                            </div>
                            <div className="containerinput">
                                <div className="rangess sss form-control inputt" >  <input onChange={() => rangechange()} id="lbrange" type="range" min="000000" max="25000000" step="1000000" />  <div id="lbrangev"> $ 3000000 </div>  </div>
                            </div>
                            <button className="buttonsearch2"><p className="text5">Buscar</p></button>
                        </form>
                    </section>

                </section>


            </div>

            <div className="setentaporc">



                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
<div className="galeryprop">
<Carrousel/>
</div>

{/* <div onClick={() => functionpic(1)} class="ww95 carousel-item active"> */}


{/* <button className="bttt aaa footer15imp footer15impc" onClick={() => cambiarfotomenos()}> Anterior </button>
                            <h1 className="sinmarginmodal">{textoParaFoto}</h1>
                            <button className="bttt aaa footer15imp footer15impc" onClick={() => cambiarfotomas()}> Siguiente </button>
 */}

                
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}



{/* /////////////////////////// ACA ESTA LA GALERIA VIEJA /////////////////////// */}



                <div className="infoproppp">
                    <div className="flexh">
                        <h1 className="tittt sinmargin"> De los Encinos</h1>
                        <div className="priceandheart " > <a onClick={() => consoleLog()} className="hearticon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></a>



                            <p className="price"> $ 14,900,000</p></div></div>


 

                    <h4 className="ggg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>  Toluca / Mexico</h4>





                    <p className="aaa footer15imp footer15impc">Descripcion</p>
                    <p className="bbb footer15imp ptextn">

                        Ubicada en la zona más exclusiva de Lerma, México. Este punto es el lugar ideal y perfecto para quien gusta y requiere vivir con cercanía a la Ciudad de México ya que está a tan solo 25 minutos de Santa Fe.

                        Rincón de los Encinos en un fraccionamiento residencial de calidad premium por su diseño, arquitectura en sus residencias.

                        Esta residencia cuenta con un diseño de vanguardista, moderno y funcional, que te permitirá ofrecer a tu familia, disfrutar de una vida tranquila y sana, rodeada de paisajes naturales y aire puro.
                    </p>
                    <p className="bbb footer15imp ptextn"> INVERTIR EN ESTA PROPIEDAD TE GARANTIZA UNA GRAN RENTABILIDAD POR SU PLUSVALÍA SIN IGUAL</p>





                    <p className="aaa footer15imp footer15impc">Detalles</p>
                    <div className="listadetalles">




                        <div>
                            <li> <ul className="listadetalles2"> <p className="margrigh blbl">Nombre:</p> <p className="margrigh2">De los encinos</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Precio:</p> <p className="margrigh2">$ 14,900,000</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Baños:</p> <p className="margrigh2">3</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Habitaciones:</p> <p className="margrigh2">3</p></ul>
                            </li>
                        </div>

                        <div className="divml10">
                            <li> <ul className="listadetalles2"> <p className="margrigh blbl">Estacionamiento:</p> <p className="margrigh2">1</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Metros:</p> <p className="margrigh2">600</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Tipo:</p> <p className="margrigh2">Premium</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Oficina:</p> <p className="margrigh2">1</p></ul>
                            </li>
                        </div>






                    </div>



                    <p className="aaa footer15imp footer15impc">Caracteristicas</p>
                    <div className="listadetallescarac">




                        <div>
                            <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Aire condicionado
                                    </p></ul>  </div>
                                </li>
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Alarma
                                    </p></ul>  </div>
                                </li>
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Vestidor
                                    </p></ul>  </div>
                                </li> 
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Patio / Jardin
                                    </p></ul>  </div>
                                </li> 
 
                        </div>


                        <div>
                        <li className="licheckbox">
                        <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Calefaccion central
                                    </p></ul>  </div>
                                </li>
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Vista de la ciudad
                                    </p></ul>  </div>
                                </li>
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Mascotas permitidas     
                                    </p></ul>  </div>
                                </li> 
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Estacionamiento
                                    </p></ul>  </div>
                                </li> 
                             

 
                        </div>

                 
                        <div>
                        
       
                        <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Gimnasio
                                    </p></ul>  </div>
                                </li>
                                <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Cuardo de lavado
                                    </p></ul>  </div>
                                </li>


 
                        <li className="licheckbox">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check" viewBox="3 0.2 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg> </div>
                                <div> <ul className="listadetalles22"> <p className="caractext">
                                    Piscina
                                    </p></ul>  </div>
                                </li>



 
                        </div>





                    </div>



                    <p className="aaa footer15imp footer15impc">Beneficios </p>
                    <p className="bbb footer15imp ptextn">

                         - Un recibidor que integra a la sala de doble altura con iluminación natural que te permitirá vivir momentos de convivencia inolvidables.<br></br> 
                        <br></br>  - Integración estratégica al comedor y cocina funcional diseñada con acabados de alta calidad que comunica a su zona de servicio.<br></br> 
                        <br></br>  - Tres amplias habitaciones con baño integrado y vestidor que te permitirán privacidad y confort. Medio baño que ofrece servicio para tus visitas.<br></br> 
                        <br></br>  - Oficina que permite el acceso al garage con gran ventanal y cubo de escaleras con iluminación natural.<br></br> 







                    </p>


                    <p className="aaa footer15imp footer15impc">Mapas y planos</p>
                    <p className="bbb footer15imp ptextn">

                        Mapas y Planos a disposicion.
                    </p>



                </div>













                <section className="textocont2"> 
<br></br><br></br>
                    <div className="imagen">
                        <p className="margrigh33 footer15imp ptextn" >Quiero conocer más esta propiedad  </p>
                        <p className="footer15imp footer15impc" >DESCARGA EL BROCHURE </p>


                        <form action="https://formsubmit.co/contacto@ankararealestate.com.mx" method="POST">
                            {/* <form id="formulario1" onSubmit={enviarcontacto} className=" formulario"> */}

                            <div className="div1" >


                                <div className="divflex1">
                                    <input id="name" className='form-control3 inputt' type='text'
                                        name='name'
                                        placeholder='Nombre'
                                        //  value={formDataUser.name}
                                        //     onChange={handleChange}
                                        required />


                                    <input id="phone" className='form-control3 inputt' type='number'
                                        name='phone'
                                        placeholder='Telefono'
                                    //  value={formDataUser.phone}
                                    //     onChange={handleChange}
                                    />
                                </div>



                                <div className="divflex2">


                                    <input id="email" className='form-control3' type='email'
                                        name='email'
                                        placeholder='email'
                                        //      value={formDataUser.email}
                                        //     onChange={handleChange}
                                        required />

                                </div>
                            </div>

                            <div className="div2" >




                                <button type="submit" className="buttonsearch2"> <p className="xd text5">Descargar BROCHURE</p></button>

                            </div>


                        </form>

                    </div>
                </section>

            </div>





        </section>




    </>
    )


}

export default Details
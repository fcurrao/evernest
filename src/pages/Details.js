

import "./pages.css"
import swal from 'sweetalert';
import { useState } from "react";
import Modal from '../components/Modal/Modal'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
// import { Carousel } from "bootstrap";    
import Carousel from 'react-bootstrap/Carousel'
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

            <h1 className="titulo"> Detalles de Propiedades</h1>

        </section>




        <section className="propiedad">
            <div className="treintaporc">
                <section className=" center total">


                    <section className="mmrr62 center lefttotal">
                        <div className="titlfilt"> <h4 className="center ptext3" > </h4> </div>

                        <div className="boxyellow ifilters">
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
                        </div>
                    </section>

                </section>


            </div>

            <div className="setentaporc">



                <div className="galeryprop">


                    <section className="morepicture center">

                        <div id="ww95 carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="ww95 carousel-inner">

                                {btng4 == 1 ? <>


                                    <div onClick={() => functionpic(1)} class="ww95 carousel-item active">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="mmmm childrenmodal d-block w-100" alt="..." />
                                    </div>
                                </> : <></>}

                                {btng4 == 2 ? <>

                                    <div onClick={() => functionpic(2)} class="ww95 carousel-item active">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-09-670x417.jpg" class="mmmm childrenmodal d-block w-100" alt="..." />
                                    </div>
                                </> : <></>}

                                {btng4 == 3 ? <>


                                    <div onClick={() => functionpic(3)} class="ww95 carousel-item active">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM-670x417.jpeg" class="mmmm childrenmodal d-block w-100" alt="..." />
                                    </div>

                                </> : <></>}

                                {btng4 == 4 ? <>


                                    <div onClick={() => functionpic(4)} class="ww95 carousel-item active">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="mmmm childrenmodal d-block w-100" alt="..." />
                                    </div>

                                </> : <></>}




                            </div >
                        </div>



                        <div className="gallerias">
                            <button className="bttt aaa footer15imp footer15impc" onClick={() => cambiarfotomenos()}> Anterior </button>
                            <h1 className="sinmarginmodal">{textoParaFoto}</h1>
                            <button className="bttt aaa footer15imp footer15impc" onClick={() => cambiarfotomas()}> Siguiente </button>


                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">

                                    {btng4 == 1 && modalOnOff == true ? <>
                                        <Modal textoParaFoto={<p className="sinmarginmodal">{textoParaFoto}</p>}>
                                            <div class="carousel-item active">
                                                <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="childrenmodal d-block w-100" alt="..." />
                                            </div>
                                        </Modal>
                                    </> : <></>}

                                    {btng4 == 2 && modalOnOff == true ? <>
                                        <Modal textoParaFoto={<p className="sinmarginmodal">{textoParaFoto}</p>}>
                                            <div class="carousel-item active">
                                                <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-09-670x417.jpg" class="childrenmodal d-block w-100" alt="..." />
                                            </div>
                                        </Modal>
                                    </> : <></>}

                                    {btng4 == 3 && modalOnOff == true ? <>
                                        <Modal textoParaFoto={<p className="sinmarginmodal">{textoParaFoto}</p>}>
                                            <div class="carousel-item active">
                                                <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM-670x417.jpeg" class="childrenmodal d-block w-100" alt="..." />
                                            </div>
                                        </Modal>
                                    </> : <></>}

                                    {btng4 == 4 && modalOnOff == true ? <>
                                        <Modal textoParaFoto={<p className="sinmarginmodal">{textoParaFoto}</p>}>
                                            <div class="carousel-item active">
                                                <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="childrenmodal d-block w-100" alt="..." />
                                            </div>
                                        </Modal>
                                    </> : <></>}


                                </div>


                            </div >
                        </div>




                    </section >



                </div>


                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}

                {/* PASARLO A UNA GALERIA */}


                {/* ////////////////////////////////////////////// 

esto volver a verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrR


*/}


                {/*    <div className="bottongallery">
                                <div onClick={() => changeBtng(1)} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="imgchiq d-block w-100" alt="..." />
                                    </span>
                                </div>
                                <div onClick={() => changeBtng(2)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">

                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-09-670x417.jpg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>
                                <div onClick={() => changeBtng(3)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM-670x417.jpeg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>


                                <div onClick={() => changeBtng(4)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>

                            </div>

                            <div className="bottongallery">
                                <div onClick={() => changeBtng(1)} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="imgchiq d-block w-100" alt="..." />
                                    </span>
                                </div>
                                <div onClick={() => changeBtng(2)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">

                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-09-670x417.jpg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>
                                <div onClick={() => changeBtng(3)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM-670x417.jpeg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>


                                <div onClick={() => changeBtng(4)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>
                            </div>

                            <div className="bottongallery">
                                <div onClick={() => changeBtng(1)} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="imgchiq d-block w-100" alt="..." />
                                    </span>
                                </div>
                                <div onClick={() => changeBtng(2)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">

                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-09-670x417.jpg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>
                                <div onClick={() => changeBtng(3)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM-670x417.jpeg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>


                                <div onClick={() => changeBtng(4)} class="espacing carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">
                                        <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="imgchiq d-block w-100" alt="..." />

                                    </span>
                                </div>
                            </div>
 */}





                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}





                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}



                {/* ////////////////////////////////////////////// 

esto volver a verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrR


*/}





                {/* <div className="sectionArriba">

                                <div className="modalbutton">

                                </div>                <button className="botonX btbt" onClick={() => setModalOnOff(false)}>X</button>
                            </div> */}
                {/* <div className="childrenmodal"  >
                                <div class="carousel-item active">
                                    <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-01-670x417.jpg" class="childrenmodal d-block w-100" alt="..." />
                                </div>
                            </div>

                            <div className="sectionArriba">

                                <div className="modalbutton">
                                    <button className=" btbt buttonsearch2" onClick={() => cambiarfotomenos()}> Anterior </button> <h1 className="sinmarginmodal">textoParaFoto</h1>   <button className="btbt buttonsearch2" onClick={() => cambiarfotomas()}> Siguiente </button>
                                </div>                <button className="botonX btbt" onClick={() => setModalOnOff(false)}>X</button>
                            </div>
                            <div className="childrenmodal"  >
                                <div class="carousel-item active">
                                    <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="childrenmodal d-block w-100" alt="..." />
                                </div>
                            </div>

                            <div className="sectionArriba">

                                <div className="modalbutton">
                                    <button className=" btbt buttonsearch2" onClick={() => cambiarfotomenos()}> Anterior </button> <h1 className="sinmarginmodal">textoParaFoto</h1>   <button className="btbt buttonsearch2" onClick={() => cambiarfotomas()}> Siguiente </button>
                                </div>                <button className="botonX btbt" onClick={() => setModalOnOff(false)}>X</button>
                            </div>
                            <div className="childrenmodal"  >
                                <div class="carousel-item active">
                                    <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="childrenmodal d-block w-100" alt="..." />
                                </div>
                            </div> */}



                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////// */}







                <div className="infoproppp">
                    <h2 className="sinmargin"> Casa Rincón</h2>
                    <div className="flexh">
                        <h1 className="tittt sinmargin"> DE LOS ENCINOS</h1>
                        <div className="priceandheart " > <a onClick={() => consoleLog()} className="hearticon"> <i class='fas fa-heart'></i></a>



                            <p className="price"> $ 14,900,000</p></div></div>


                    <h4 className="ggg"> Toluca / Mexico</h4>





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
                            <li> <ul className="listadetalles2"> <p className="margrigh blbl">Nombre</p> <p className="margrigh2">De los encinos</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Precio</p> <p className="margrigh2">$ 14,900,000</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Baños</p> <p className="margrigh2">3</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Habitaciones</p> <p className="margrigh2">3</p></ul>
                            </li>
                        </div>

                        <div>
                            <li> <ul className="listadetalles2"> <p className="margrigh blbl">Estacionamiento</p> <p className="margrigh2">1</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Metros</p> <p className="margrigh2">600</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Tipo</p> <p className="margrigh2">Premium</p></ul>
                                <ul className="listadetalles2"> <p className="margrigh blbl">Oficina</p> <p className="margrigh2">1</p></ul>
                            </li>
                        </div>






                    </div>
 


                    <p className="aaa footer15imp footer15impc">Caracteristicas</p>
                    <p className="bbb footer15imp ptextn">

                        <br></br> -Un recibidor que integra a la sala de doble altura con iluminación natural que te permitirá vivir momentos de convivencia inolvidables.
                        <br></br>  -Integración estratégica al comedor y cocina funcional diseñada con acabados de alta calidad que comunica a su zona de servicio.
                        <br></br>  -Tres amplias habitaciones con baño integrado y vestidor que te permitirán privacidad y confort. Medio baño que ofrece servicio para tus visitas.
                        <br></br>  -Oficina que permite el acceso al garage con gran ventanal y cubo de escaleras con iluminación natural.







                    </p>


                    <p className="aaa footer15imp footer15impc">Mapas y planos</p>
                    <p className="bbb footer15imp ptextn">

                        Mapas y Planos a disposicion.
                    </p>



                </div>













                <section className="textocont2">
                    <br />
                    <br />


                    <div className="imagen">
                        <p className="footer15imp ptextn" >Quiero conocer más esta propiedad  </p>
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
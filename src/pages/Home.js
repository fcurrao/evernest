import { useEffect, useState } from "react";
import OurTeam from './OurTeam'; 
import './pages.css'
import { Link } from "react-router-dom";

const Home = () => {



    const [propiedadesTodas, setPropiedadesTodas] = useState([])
    const [pagestate, setPagestate] = useState()
    let arrayPropAMostrar = []
    let arrayProp = []




    const componentGetMount = async (page = 1) => {


        const propiedadesTotales = await fetch(` https://api-easybroker.onrender.com/properties?page=${page}&limit=50`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                console.log("PROPIEDADES :", data)
                setPropiedadesTodas(data.content)
                setPagestate(data.pagination)
                arrayProp.push(data.content)
            })
        console.log("arrayProp", arrayProp)

    }






    useEffect(() => {
        componentGetMount()



    }, [])




    const botonBuscar = (e) => {

        //     // si se busco por nombre
        //     if (document.getElementById('inputBuscarNombre').value != "") {
        //         // busco por nombre en la BD
        //    } 
        //    // si no busco se busco por nombre , REALIZAR EL FILTRO CON TODAS ESTAS OPCIONES
        //      document.getElementById('inputBuscarLocacion').value  == "Todas las locaciones"
        //      document.getElementById('inputBuscarType').value  == "Todos los tipos"
        //      document.getElementById('inputBuscarBedroom').value  == "Habitaciones"
        //      document.getElementById('inputBuscarBathroom').value == "Baños"
        //      document.getElementById('inputBuscarParking').value  == "estacionamiento"
        //      document.getElementById('lbrange').value == 0



        console.log("nombre ", (document.getElementById('inputBuscarNombre').value))
        console.log("locacion ", (document.getElementById('inputBuscarLocacion').value))
        console.log("tipo ", (document.getElementById('inputBuscarType').value))
        console.log("bedroom ", (document.getElementById('inputBuscarBedroom').value))
        console.log("bathroom ", (document.getElementById('inputBuscarBathroom').value))
        console.log("parking ", (document.getElementById('inputBuscarParking').value))
        console.log("lbrange ", (document.getElementById('lbrange').value))
        e.preventDefault()

    }





    const rangechange = () => {
        const putrange = document.getElementById('lbrange').value
        const put = document.getElementById('lbrangev')
        console.log("putrange", putrange)
        put.innerHTML = `$ ${putrange}`;
    }


    const consoleLog = () => {
        console.log("aca voy a details")
    }





    return (
        <>












            <section className="homeclass">
                <section className="baners">
                    <section className="bannerosc">   </section>
                    <section className="banner">
                        <div className="containerS">
                            <h1 className="sliderh1">Encuentra la casa de tus sueños</h1>
                            <h3 className="sbt text2">Tu hogar debe contar la historia de quién eres y ser una colección de lo que amas</h3>

                        </div>

                        <form className="formbanner">
                            <div className="formbannerback">
                                <div className="divinputform">
                                    <input id="inputBuscarNombre" className="inputform" placeholder="Busca por nombre.." ></input>
                                </div>
                                <div className="divinputform">
                                    <select id="inputBuscarLocacion" className="inputform" name="favoriteOnly"  >
                                        <option >Todas las locaciones</option>
                                        <option >Ciudad de Mexico</option>
                                        <option type="submit" >Toluca</option>
                                    </select>
                                </div>
                                <div className="divinputform">
                                    <select id="inputBuscarType" placeholder="tipo" className="inputform" name="favoriteOnly" >
                                        <option >Todos los tipos</option>
                                        <option>Premium</option>
                                        <option type="submit" >Casa</option>
                                        <option type="submit" >Departamento</option>
                                        <option type="submit" >Terreno</option>
                                    </select>
                                </div>


                                <div className="divinputform ">
                                    <button id="BotonBuscar" onClick={() => botonBuscar()} className="btban buttonsearch abababa">    <p className="kkppk text1 xdxdbb kkppk2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg> Buscar
                                    </p> </button>
                                </div>

                                <div className="divinputform">
                                    <select id="inputBuscarBedroom" placeholder="tipo" className="inputform" name="favoriteOnly"  >
                                        <option >Habitaciones</option>
                                        <option>1</option>
                                        <option >2</option>
                                        <option>3</option>
                                        <option >4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select>
                                </div>
                                <div className="divinputform">
                                    <select id="inputBuscarBathroom" placeholder="tipo" className="inputform" name="favoriteOnly"  >
                                        <option >Baños</option>
                                        <option>1</option>
                                        <option >2</option>
                                        <option>3</option>
                                        <option >4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select>
                                </div>
                                <div className="divinputform">
                                    <select id="inputBuscarParking" placeholder="tipo" className="inputform" name="favoriteOnly" >
                                        <option >Estacionamiento</option>
                                        <option>1</option>
                                        <option >2</option>
                                        <option>3</option>
                                        <option >4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>

                                </div>

                                {/* // un div vacio */}
                                {/* <div className="divinputform">
                                <div className="transss buttonsearch">    <p className="transss text1">  </p> </div>
                            </div> */}
                                <div className="divinputform rrgg">
                                    <div className="rangess sss form-control inputt22 corrigiendo2" >  <input className="rangoo corrigiendo3" onChange={() => rangechange()} id="lbrange" type="range" min="3000000" max="25000000" step="1000000" />  <div id="lbrangev"> $ 3000000 </div>  </div>
                                </div>


                                <div className="divinputform displaynonex">
                                    <button id="BotonBuscar2" onClick={() => botonBuscar()} className="btban buttonsearch corrigiendo4">    <p className="kkppk text1 xdxdbb kkppk2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg> Buscar
                                    </p> </button>
                                </div>

                            </div>
                        </form>
                        {/* boton de prueba */}
                        {/* <button  onClick={()=>botonBuscar()}  className="btban buttonsearch"> buscaaar </button> */}

                    </section>
                </section>


                <section className="featuredprop">

                    <div className="featuredproptext"> <h1 className="titletext">Propiedades destacadas</h1>

                        <h3 className="text2">Nuestros clientes son lo mas importante para nosotros.</h3> </div>
                    <div className="leftotra2" >
    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/828155/12491650/EB-CD8155.jpg?version=1537234270" ></img>
    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/865066/13037766/EB-CH5066.jpg?version=1540964482" ></img>
    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/753530/11433685/EB-BW3530.jpg?version=1530304048" ></img>
         <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/865026/13037367/EB-CH5026.jpg?version=1540961126" ></img>
                  

                        {propiedadesTodas.filter(cadaUna => cadaUna.public_id == 'EB-DQ9333' ||
                            cadaUna.public_id == 'EB-GD1708' ||
                            cadaUna.public_id == 'EB-DA4580').map((cadaUna, index) => (<>

                               



                        
                                <ul className="listabox spspc quito">
                                    <li className="ml2 listaclassbox2 lbxx">
                                    <Link className="sindecoration" to="/propiedades" >
                                        <div className="margintop5 mgt55"> ID: {cadaUna.public_id}<img className="pictureProp" src={cadaUna.title_image_full}  alt="pictureProp" /></div>
                                        <div className="divsubtitle"> <p className="ssss subtitle" onClick={() => consoleLog()}>{cadaUna.title}</p> </div>
                                        <div className="location"> <a className="location" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>  {cadaUna.location}</a></div>
                                        <div className="priceandheart" > <a onClick={() => consoleLog()} className="hearticon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>  </a> 
                                            <p className="price">{cadaUna.operations[0].formatted_amount}</p></div>
                                        <div className="divproperinfot">

                                            <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bedroom_icon.png"></img>Habitaciones <p className="textt"> {(cadaUna.bedrooms) ? cadaUna.bedrooms : 0}  </p></div>
                                            <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bathroom_icon.png"></img>Baños<p className="textt"> {(cadaUna.bathrooms) ? cadaUna.bathrooms : 0}</p></div>
                                            <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/garage_icon.png"></img> Garage<p className="textt"> {(cadaUna.parking_spaces) ? cadaUna.parking_spaces : 0} </p></div>
                                            <div className=" properinfo" > <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="hh bi bi-house-door" viewBox="0 0 16 16">
                                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                            </svg> Metros <p className="textt">{(cadaUna.lot_size) ? cadaUna.lot_size : 0} </p></div>





                                        </div>

                                        <div className="buttonb" onClick={() => consoleLog()}>

                                        <button className="ff2 stylebutton1 buttonsearch2">   
                                            <a className="tx twhite txtxtx">{cadaUna.property_type}  </a>  
                                            </button>
                                            <button className="ff2 stylebutton2 buttonsearch2">  
                                            <a className="tx twhite txtxtx"> {(cadaUna.operations[0].type) =='rental' ? 'Renta' : 'Venta'}  </a>
                                             </button>
                                        </div>
                                        </Link>
                                    </li>


                                   </ul>
                                   
                                </>))}
                            </div>
            </section>


                <section className="buyorsell">
                    <h1 className="sliderh2 bckblack">En decoración coloca siempre una pieza controvertida. </h1>
                    <h1 className="sliderh2 bckblack">Dará tema de conversación a tus invitados </h1>

                    <br></br>  <br></br>
                    <p className="textwhite bckblack">     Total de propiedades vendidas en los últimos 6 meses:
                    </p>
                    <div className="dflex bckblack ">

                        <div className="circll">  25 </div>
                        <p className="mleft">  PROPIEDADES PREMIUM</p>
                    </div>


                </section>





                <section className="sold">
                    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/753530/11433685/EB-BW3530.jpg?version=1530304048" ></img>
                    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/828155/12491650/EB-CD8155.jpg?version=1537234270" ></img>
                    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/865026/13037367/EB-CH5026.jpg?version=1540961126" ></img>
                    <img className="imggg imghovdiag" src="https://assets.easybroker.com/property_images/865066/13037766/EB-CH5066.jpg?version=1540964482" ></img>

                </section>





                <section className="meetouragents">








                    <OurTeam />



                </section>





            </section>

        </>
    )
}



export default Home

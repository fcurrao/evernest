
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useEffect } from "react"
import Details from "./Details"
import { Link } from "react-router-dom"


const Properties = () => {

    const [btng4, setBtng4] = useState(1)
    const [propiedadesTodas, setPropiedadesTodas] = useState([])
    const [pagestate, setPagestate] = useState()





    const componentGetMount = async (page = 1) => {


        const propiedadesTotales = await fetch(` https://api-easybroker.onrender.com/properties?page=${page}&limit=20`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                console.log("PROPIEDADES :", data)
                setPropiedadesTodas(data.content)
                setPagestate(data.pagination)
                // setLocations(data.content.location)
                // query||
            })


    }


    useEffect(() => {
        componentGetMount()




    }, [])





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

            <section className="divtitulo">

                <h1 className="titulo" id="proppppp"> Propiedades</h1>

            </section>



            <section className="tttx center ">

                <section className="mmrr6 center lefttotal">
                    <div className="titlfilt"> <h4 className="center ptext3" > </h4> </div>

                    <form className="boxyellow ifilters">
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
                                <option type="submit" >Casa</option>
                                <option type="submit" >Departamento</option>
                                <option type="submit" >Terreno</option>
                            </select>
                        </div>
                        <div className=" lbrangeclass containerinput">
                            <div className="rangess sss form-control inputt" >  <input onChange={() => rangechange()} classname="lbrangeclass2" id="lbrange" type="range" min="3000000" max="25000000" step="1000000" />  <div id="lbrangev"> $ 3000000 </div>  </div>
                        </div>
                        <button className="buttonsearch2"><p className="text5">Buscar</p></button>
                    </form>
                </section>


                <section className="bothtog center">

                    <section className="toptotal center">
                        <div className="boxyellow2">
                            <form className="center ff2" method="get" action="#">

                                <p className="df">
                                    <label for="favoriteOnly"><h4 className="txtx center ptext3">Ordenar por:</h4></label>
                                </p>
                                <p className="mf">
                                    <select className="xxxxi inputt " name="favoriteOnly" id="favoriteOnly">
                                        <option>Precio mas bajo</option>
                                        <option type="submit" >Precio mas alto</option>
                                    </select>
                                </p>
                                <p>
                                    <input className="bblp bbt text5 buttonsearch2 " type="submit" value="Buscar" />
                                </p>
                            </form>
                        </div>

                    </section>





                    <section className="righttotal">
                    {propiedadesTodas.map((cadaUna, index) => (<>













                        


                            <div className="leftotra" >
                                <div className="listabox2">
                                    <div className="listaclassbox2">
                                        {/* {pagestate.limit * (pagestate.page - 1) + index} */}
                                        <div className="margintop5 mgt55"> ID: {cadaUna.public_id} <img className="pictureProp altpic" src={cadaUna.title_image_full} alt="pictureProp" />
                                        </div>
 
                                        {console.log ("cadaUna", cadaUna)}
                                       
                                        <Link  to={`/productos/${cadaUna.public_id}`}  estapropiedad={cadaUna}><div className="divsubtitle"> <p className="subtitle ssss" onClick={() => consoleLog()}>  {cadaUna.title}  </p> </div>
                                        
                                        </Link>

                                        <div className="location"> <a className="location" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg> {cadaUna.location} </a>
                                        </div>
                                        <div className="priceandheart" > <a onClick={() => consoleLog()} className="hearticon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg></a> <p className="price"> {cadaUna.operations[0].formatted_amount}</p></div> 
                                       

                                        <div className="divproperinfot">

                                            <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bedroom_icon.png"></img>Habitaciones <p className="textt"> {(cadaUna.bedrooms) ? cadaUna.bedrooms : 0} </p></div>
                                            <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bathroom_icon.png"></img>Baños<p className="textt"> {(cadaUna.bathrooms) ? cadaUna.bathrooms : 0} </p></div>
                                            <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/garage_icon.png"></img> Garage<p className="textt">{(cadaUna.parking_spaces) ? cadaUna.parking_spaces : 0} </p></div>
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
                                    </div>
                                </div>
                            </div>
                       






                    
                        </> ))}
                        </section>
                        </section>

          

                <div className="pages"> 
                    <a className="wwwl center circlepages" onClick={() => componentGetMount(pagestate.page-1)}> ˂˂ </a>
                    <a className=" center circlepages" onClick={() => componentGetMount(1)} >01</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(2)} >02 </a>
                    <a className=" center circlepages" onClick={() => componentGetMount(3)} >03</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(4)} >04</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(5)} >05</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(6)} >06</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(7)} >07</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(8)} >08</a>
                    <a className=" center circlepages" onClick={() => componentGetMount(9)} >09</a>
                    <a className="wwwl center circlepages" onClick={() => componentGetMount(pagestate.page+1)} >  ˃˃</a>
                </div>

            </section>



            {/* <Contactbar /> */}
        </>
    )
}



export default Properties
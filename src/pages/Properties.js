
import { useState } from "react"
import { Link } from "react-router-dom"


const Properties = () => {



    const [btng4, setBtng4] = useState(1)

    const changeBtng = (n) => {
        setBtng4(n)
        console.log("esto es n", n)
        console.log("esto es btng4", btng4)
    }

    const rangechange = () => {
        const putrange = document.getElementById('lbrange').value
        const put = document.getElementById('lbrangev')
        console.log("putrange", putrange)
        put.innerHTML = `$ ${putrange}`;
    }

    const consoleLog =()=>{
        console.log("aca voy a details")
    }

    return (
        <>
            <section className=" center total">


                <section className="center lefttotal">
                    <div className="titlfilt"> <h4 className="center ptext3" > Filtrar por:</h4> </div>
                    
                    <div className="boxyellow ifilters">
                    <input placeholder="Buscar por nombre.." className="sss form-control inputt" />
                        <select  className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                        <option >Todas las locaciones</option>
                            <option >Ciudad de Mexico</option>
                            <option type="submit" >Toluca</option>
                        </select>
                        <select placeholder="tipo" className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                        <option >Todos los tipos</option>
                            <option>Premium</option>
                            <option type="submit" >Plus</option>
                        </select>

                        
                        <div className="rangess sss form-control inputt" >  <input onChange={() => rangechange()} id="lbrange" type="range" min="3000000" max="50000000" step="1000000" />  <div id="lbrangev"> $ 3000000 </div>  </div>

                        <button className="buttonsearch2"><p className="text5">Buscar</p></button>
                    </div>
                </section>
                <section className="bothtog center">

                    <section className="toptotal center">

                        <form className="center ff2" method="get" action="#">

                            <p className="df">
                                <label for="favoriteOnly"><h4 className="center ptext3">Ordenar por:</h4></label>
                                </p>
                                <p className="mf">
                                <select className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                                    <option>Precio mas bajo</option>
                                    <option type="submit" >Precio mas alto</option>
                                </select>
                            </p>
                            <p>
                                <input  className="bbt text5 buttonsearch2 " type="submit" value="Buscar" />
                            </p>
                        </form>

                    </section>
                    <section className="righttotal">
                        <div >
                            <ul className="listabox2">
                                <li className="listaclassbox2">
                                    <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg01.jpg" alt="pictureProp" /></div>
                                   
            <Link to="/productos/details" ><div className="divsubtitle"> <p className="subtitle ssss" onClick={()=>consoleLog()}> CASA DE LOS ARBOLES</p> </div>  </Link>
           
                                    <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Toluca / Mexico </a></div>
                                    <div className="priceandheart" > <a  onClick={()=>consoleLog()} className="hearticon"> <i class='fas fa-heart'></i></a> 
                                     {/* <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>   */}
                                     <p className="price"> $ 14,900,000</p></div>
                                    <div className="divproperinfot"> 
                                        
                                    <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bedroom_icon.png"></img>Habitaciones <p className="textt"> 3 </p></div>
                                    <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bathroom_icon.png"></img>Baños<p className="textt"> 3</p></div>
                                    <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/garage_icon.png"></img> Garage<p className="textt"> 4 </p></div>
                                    <div className=" properinfo" > <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="hh bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg> Metros <p className="textt">600 M2</p></div>
                                         
                                         
                                         
                                       
                
                                         </div>

                                    <div className="buttonb"   onClick={()=>consoleLog()}>
                                    
                                        <button className="ff2 stylebutton1 buttonsearch2">   </button>
                                           <a className="tx twhite"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Casa -   en venta  </a> 
                                        <button className="ff2 stylebutton2 buttonsearch2">   </button>
                 
                                    </div>
                                </li>

                                <li className="listaclassbox2">
                                    <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg01.jpg" alt="pictureProp" /></div>
                                    <div className="divsubtitle"> <p className="subtitle" onClick={()=>consoleLog()}> CASA DE LOS ARBOLES</p> </div>
                                    <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Toluca / Mexico </a></div>
                                    <div className="priceandheart" > <a  onClick={()=>consoleLog()} className="hearticon"> <i class='fas fa-heart'></i></a> 
                                     {/* <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>   */}
                                     <p className="price"> $ 14,900,000</p></div>
                                    <div className="divproperinfot"> 
                                        
                                    <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bedroom_icon.png"></img>Habitaciones <p className="textt"> 3 </p></div>
                                    <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/bathroom_icon.png"></img>Baños<p className="textt"> 3</p></div>
                                    <div className=" properinfo" > <img src="http://malikhassan.com/html/evernest/images/garage_icon.png"></img> Garage<p className="textt"> 4 </p></div>
                                    <div className=" properinfo" > <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="hh bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg> Metros <p className="textt">600 M2</p></div>
                                         
                                         
                                         
                                       
                
                                         </div>

                                    <div className="buttonb"   onClick={()=>consoleLog()}>
                                    
                                        <button className="ff2 stylebutton1 buttonsearch2">   </button>
                                           <a className="tx twhite"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Casa -   en venta  </a> 
                                        <button className="ff2 stylebutton2 buttonsearch2">   </button>
                 
                                    </div>
                                </li>

                            </ul>
                            <div className="pages"> <a className=" center circlepages">˂˂</a> <a className=" center circlepages">01</a>    <a className=" center circlepages">02</a>    <a className=" center circlepages">03</a>  <a className=" center circlepages">  ˃˃</a>         </div>
                        </div>
                    </section>
                </section>
            </section>



 
            {/* <Contactbar /> */}
        </>
    )
}



export default Properties
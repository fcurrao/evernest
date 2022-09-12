import { useEffect, useState } from "react";
import OurTeam from './OurTeam';
import './pages.css'
import { Link } from "react-router-dom";

const Home = () => {





    /////////////////////////////////// API ///////////////////////////////////////////
    // const url = 
    // 'https://api.easybroker.com/v1/properties?page=1&limit=20&search%5Bstatuses%5D%5B%5D=published'


    // const componentGetMount = async () => {

    //     // const response = await fetch(url)
    //     // .then(response => response.json())
    //     //     .then(json => console.log(json))
    //     // console.log(response)
    //     const api = await fetch(url , {
    //             method: 'GET',
    //             headers: ({
    //                'X-Authorization': '4x8o4k30c7ut2nj3d8fxx320bk8qaa',

    //          }),
    //             mode: 'no-cors'
    //         })
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //            console.log(api)
    // }




    // useEffect(() => {
    //     componentGetMount()
    // }, [])

    /////////////////////////////////// API ///////////////////////////////////////////








    const consoleLog =()=>{
        console.log("aca voy a details")
    }


    return (
        <>
            <section className="homeclass">
                <section className="banner">

                    <div className="containerS">
                        <h1 className="sliderh1">Encontra la casa de tus sueños</h1>
                    </div>



                    <form className="formbanner">
                        <div className="divinputform">
                            <input className="inputform" placeholder="Busca por nombre, ciudad o casa.." ></input>
                        </div>
                        <div className="divinputform">
                        <select  className="inputform" name="favoriteOnly" id="favoriteOnly">
                        <option >Todas las locaciones</option>
                            <option >Ciudad de Mexico</option>
                            <option type="submit" >Toluca</option>
                        </select>
                        </div>
                        <div className="divinputform">
                        <select placeholder="tipo" className="inputform" name="favoriteOnly" id="favoriteOnly">
                        <option >Todos los tipos</option>
                            <option>Premium</option>
                            <option type="submit" >Plus</option>
                        </select>
                        </div>

                        <div className="divinputform">
                            <button className="buttonsearch">    <p className="text1"> SEARCH </p> </button>
                        </div>
                    </form>


                </section>


                <section className="featuredprop">

                    <div className="featuredproptext"> <h1 className="titletext">Propiedades destacadas</h1>

                        <h3 className="text2">Nuestros clientes son lo mas importante para nosotros.</h3> </div>
                    <div >
                        <ul className="listabox">
                        <li className="ml2 listaclassbox2">
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
                                <li className="ml2 listaclassbox2">
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
                                <li className="ml2 listaclassbox2">
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

                    </div>
                </section>


                <section className="buyorsell">
                    <h1 className="sliderh2">Compre o Venda su casa</h1>
                    <p className="textwhite">
                        Disfruta de comprar o vender, ahora mucho mas facil.<br></br>
                        Tu hogar debe contar la historia de quién eres
                        y ser una colección de lo que amas
                    </p>

                    <div className="divbuttonsbuyorsell">

                        <Link to="/propiedades" className='ptextfooter'>  <button className="buttonsearch4">    <p className="text44"> Propiedades  </p></button> </Link>
                        <Link to="/contacto" className='ptextfooter'> <button className="buttonsearch4">    <p className="text44"> Contactenos </p> </button></Link>
                    </div>

                </section>





                <section className="popularplaces">

                    <div className="featuredproptext"> <h1 className="titletext">Los mas populares</h1>

                        <h3 className="text2">El hogar que siempre soñaste esta en Ankara</h3> </div>




                    <section className="threeparts" >
                        <section className="p12" >
                            <div className="t1">

                                <div className="mask ">
                                    <img className="imgbig imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Cascada-del-Angel-11-1.jpg" ></img>
                                </div>

                            </div>


                            <div className="t2">


                                <div className="mask ">
                                    <img className="imglit2 imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Cascada-del-Angel-05-1.jpg" ></img>
                                </div>
                                <div className="mask ">
                                    <img className="imglit3 imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM.jpeg" ></img>
                                </div>


                            </div>
                        </section>
                        <section className="p3" >

                            <div className="t3">

                                <div className="mask ">
                                    <img className="imglit imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-04-at-12.35.45-PM-1.jpeg" ></img>
                                </div>
                                <div className="mask ">
                                    <img className="imglit imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/07/EB-KT0353-10.jpeg" ></img>
                                </div>
                                <div className="mask ">
                                    <img className="imglit imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Rincon-de-los-Encinos-04.jpg" ></img>
                                </div>


                            </div>
                        </section>
                    </section>


                </section>

                <section className="proptorent">

                    <div className="featuredproptext"> <h1 className="titletext">Propiedades disponibles</h1>

                        <h3 className="text2">Encontra tu hogar de tus sueños en Ankara</h3> </div>
                    <div >
                        <ul className="listabox">
                        <li className="ml2 listaclassbox2">
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

                                <li className="ml2 listaclassbox2">
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


                                <li className="ml2 listaclassbox2">
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


                    </div>
                </section>






                <section className="meetouragents">




 



                <OurTeam/>



                </section>





            </section>

        </>
    )
}



export default Home
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











    return (
        <>
            <section className="homeclass">
                <section className="banner">

                    <div className="containerS">
                        <h1 className="sliderh1">FIND YOUR DREAM HOME</h1>
                    </div>



                    <form className="formbanner">
                        <div className="divinputform">
                            <input className="inputform" placeholder="Enter Property, Location, Landmark ..." ></input>
                        </div>
                        <div>
                            <input className="inputform" placeholder="City" ></input>
                        </div>
                        <div>
                            <input className="inputform" placeholder="City" ></input>
                        </div>
                        <div>
                            <input className="inputform" placeholder="City" ></input>
                        </div>
                        <div className="divinputform">
                            <button className="buttonsearch">    <p className="text1"> SEARCH </p> </button>
                        </div>
                    </form>


                </section>


                <section className="featuredprop">

                    <div className="featuredproptext"> <h1 className="titletext">Featured Properties</h1>

                        <h3 className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> </div>
                    <div >
                        <ul className="listabox">
                            <li className="listaclassbox">
                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg01.jpg" alt="pictureProp" /></div>
                                <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    {/* <div className="diagonalstyle"> a </div> */}
                                </div>
                            </li>

                            <li className="listaclassbox">
                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg02.jpg" alt="pictureProp" /></div>
                                <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    {/* <div className="diagonalstyle"> a </div> */}
                                </div>
                            </li>

                            <li className="listaclassbox">
                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg03.jpg" alt="pictureProp" /></div>
                                <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    {/* <div className="diagonalstyle"> a </div> */}
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

                        <Link to="/propiedades" className='ptextfooter'>  <button className="buttonsearch4">    <p className="text44"> Buscar Propiedades  </p></button> </Link>
                        <Link to="/contacto" className='ptextfooter'> <button className="buttonsearch4">    <p className="text44"> Contactenos </p> </button></Link>
                    </div>

                </section>





                <section className="popularplaces">

                    <div className="featuredproptext"> <h1 className="titletext">POPULAR PLACES</h1>

                        <h3 className="text2">Lorem ipsum dolor sit amet consectetur</h3> </div>




                    <section className="threeparts" >
                        <section className="p12" >
                            <div className="t1">

                                <div className="mask ">
                                    <img className="imgbig imghovdiag" src="http://malikhassan.com/html/evernest/images/california.jpg" ></img>
                                </div>

                            </div>


                            <div className="t2">


                                <div className="mask ">
                                    <img className="imglit2 imghovdiag" src="http://malikhassan.com/html/evernest/images/san_francisco.jpg" ></img>
                                </div>
                                <div className="mask ">
                                    <img className="imglit2 imghovdiag" src="http://malikhassan.com/html/evernest/images/dubai.jpg" ></img>
                                </div>


                            </div>
                        </section>
                        <section className="p3" >

                            <div className="t3">

                                <div className="mask ">
                                    <img className="imglit imghovdiag" src="http://malikhassan.com/html/evernest/images/new_york.jpg" ></img>
                                </div>
                                <div className="mask ">
                                    <img className="imglit imghovdiag" src="http://malikhassan.com/html/evernest/images/miami.jpg" ></img>
                                </div>
                                <div className="mask ">
                                    <img className="imglit imghovdiag" src="http://malikhassan.com/html/evernest/images/australia.jpg" ></img>
                                </div>


                            </div>
                        </section>
                    </section>


                </section>

                <section className="proptorent">

                    <div className="featuredproptext"> <h1 className="titletext">Properties For Rent</h1>

                        <h3 className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> </div>
                    <div >
                        <ul className="listabox">
                            <li className="listaclassbox">
                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg01.jpg" alt="pictureProp" /></div>
                                <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    {/* <div className="diagonalstyle"> a </div> */}
                                </div>
                            </li>


                            <li className="listaclassbox">
                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg02.jpg" alt="pictureProp" /></div>
                                <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    {/* <div className="diagonalstyle"> a </div> */}
                                </div>
                            </li>


                            <li className="listaclassbox">
                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg03.jpg" alt="pictureProp" /></div>
                                <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    {/* <div className="diagonalstyle"> a </div> */}
                                </div>
                            </li>
                        </ul>


                    </div>
                </section>






                <section className="meetouragents">





                    ********************  aCA VA OUR TEAM DE ABOUT US ***************************








                </section>





            </section>

        </>
    )
}



export default Home
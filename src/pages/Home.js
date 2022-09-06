import { useEffect, useState } from "react";


import './pages.css'

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
                                <div> Upper portion Apartment for sale </div>
                                <div>  Staten Island / Queens</div>
                                <div> $ 488.00 </div>
                                <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
                                <div> a </div>
                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    <div className="diagonalstyle"> a </div>

                                </div>
                            </li>


                            <li className="listaclassbox">


                                <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg02.jpg" alt="pictureProp" /></div>
                                <div> Upper portion Apartment for sale </div>
                                <div>  Staten Island / Queens</div>
                                <div> $ 488.00 </div>
                                <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
                                <div> a </div>
                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    <div className="diagonalstyle"> a </div>

                                </div>
                            </li>

                            <li className="listaclassbox">


                                <div className="margintop5">  <img className="pictureProp" src="./assets/img/others/propertyImg03.jpg" alt="pictureProp" /></div>
                                <div> Upper portion Apartment for sale </div>
                                <div>  Staten Island / Queens</div>
                                <div> $ 488.00 </div>
                                <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
                                <div> a </div>
                                <div className="buttonb">
                                    <div className="stylebutton1"> a </div>
                                    <div className="diagonalstyle"> a </div>

                                </div>
                            </li>


                        </ul>

                    </div>
                </section>


                <section className="buyorsell">
                <h1 className="sliderh1">Buy or sell your house</h1>
<p>Donec placerat dolor id neque pretium placerat. Donec in facilisis risus.
 In sollicitudin magna luctus sem ultrices convallis. Sed quis ex vel tellus ullamcorper malesuada. 
 Aenean facilisis ex dolor, id vehicula nisl consectetur dapibus. Phasellus mollis mauris semper placerat convallis. 
 Morbi varius facilisis dignissim. Donec eu sollicitudin nunc. 
Aliquam in nisi id arcu gravida vehicula quis nec sapien. Fusce at dolor ex.</p>

<div className="divbuttonsbuyorsell">
                            <button className="buttonsearch">    <p className="text4"> Start Search Now  </p> </button> <button className="buttonsearch">    <p className="text4"> Browse Properties </p> </button>
                        </div>

                </section>





                <section className="popularplaces">

                <div className="featuredproptext"> <h1 className="titletext">POPULAR PLACES</h1>

<h3 className="text2">Lorem ipsum dolor sit amet consectetur</h3> </div>
<div >
    <ul className="listabox">
        <li className="listaclassbox">

            <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg01.jpg" alt="pictureProp" /></div>
            <div> Upper portion Apartment for sale </div>
            <div>  Staten Island / Queens</div>
            <div> $ 488.00 </div>
            <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
            <div> a </div>
            <div className="buttonb">
                <div className="stylebutton1"> a </div>
                <div className="diagonalstyle"> a </div>

            </div>
        </li>


        <li className="listaclassbox">


            <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg02.jpg" alt="pictureProp" /></div>
            <div> Upper portion Apartment for sale </div>
            <div>  Staten Island / Queens</div>
            <div> $ 488.00 </div>
            <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
            <div> a </div>
            <div className="buttonb">
                <div className="stylebutton1"> a </div>
                <div className="diagonalstyle"> a </div>

            </div>
        </li>

        <li className="listaclassbox">


            <div className="margintop5">  <img className="pictureProp" src="./assets/img/others/propertyImg03.jpg" alt="pictureProp" /></div>
            <div> Upper portion Apartment for sale </div>
            <div>  Staten Island / Queens</div>
            <div> $ 488.00 </div>
            <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
            <div> a </div>
            <div className="buttonb">
                <div className="stylebutton1"> a </div>
                <div className="diagonalstyle"> a </div>

            </div>
        </li>


    </ul>

</div>
</section>









 <section className="proptorent">

<div className="featuredproptext"> <h1 className="titletext">Properties For Rent</h1>

    <h3 className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3> </div>
<div >
    <ul className="listabox">
        <li className="listaclassbox">

            <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg01.jpg" alt="pictureProp" /></div>
            <div> Upper portion Apartment for sale </div>
            <div>  Staten Island / Queens</div>
            <div> $ 488.00 </div>
            <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
            <div> a </div>
            <div className="buttonb">
                <div className="stylebutton1"> a </div>
                <div className="diagonalstyle"> a </div>

            </div>
        </li>


        <li className="listaclassbox">


            <div className="margintop5"> <img className="pictureProp" src="./assets/img/others/propertyImg02.jpg" alt="pictureProp" /></div>
            <div> Upper portion Apartment for sale </div>
            <div>  Staten Island / Queens</div>
            <div> $ 488.00 </div>
            <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
            <div> a </div>
            <div className="buttonb">
                <div className="stylebutton1"> a </div>
                <div className="diagonalstyle"> a </div>

            </div>
        </li>

        <li className="listaclassbox">


            <div className="margintop5">  <img className="pictureProp" src="./assets/img/others/propertyImg03.jpg" alt="pictureProp" /></div>
            <div> Upper portion Apartment for sale </div>
            <div>  Staten Island / Queens</div>
            <div> $ 488.00 </div>
            <div> Bedrooms 3 - Bathrooms 2 - Garage 1</div>
            <div> a </div>
            <div className="buttonb">
                <div className="stylebutton1"> a </div>
                <div className="diagonalstyle"> a </div>

            </div>
        </li>


    </ul>

</div>
</section>






                <section className="meetouragents">
                    meetouragents
                </section>

                



            </section>

        </>
    )
}



export default Home
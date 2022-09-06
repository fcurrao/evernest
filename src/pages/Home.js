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
                <h1   className="sliderh1">FIND YOUR DREAM HOME</h1>
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
                <button className="buttonsearch">    <p  className="text1"> SEARCH </p> </button>
                </div>
                </form>

             
            </section>


            <section className="featuredprop">
                <div> x </div> 
                <div> x </div> 
            </section>


            <section className="other"> 

            </section>







            </section>

        </>
    )
}



export default Home
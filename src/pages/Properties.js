
import { useState } from "react"


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

    return (
        <>
            <section className=" center total">


                <section className="center lefttotal">
                    <div className="titlfilt"> <h4 className="center ptext3" > Filtrar por:</h4> </div>
                    <div className="boxyellow ifilters">
                        <select placecholder="location" className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                            <option >Ciudad de Mexico</option>
                            <option type="submit" >Tolica</option>
                        </select>
                        <select placeholder="tipo" className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                            <option>Premium</option>
                            <option type="submit" >Plus</option>
                        </select>

                        <input className="sss form-control inputt" />
                        <div className="rangess sss form-control inputt" >  <input onChange={() => rangechange()} id="lbrange" type="range" min="100000" max="90000000" step="100000" />  <div id="lbrangev"> $ 100000 </div>  </div>

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
                                    <div className="divsubtitle"> <p className="subtitle" > Upper portion Apartment for sale</p> </div>
                                    <div className="location"> <a className="location" ><i class='fas fa-map-marker-alt'></i> Staten Island / Queens </a></div>
                                    <div className="priceandheart" > <a className="hearticon"> <i class='fas fa-heart'></i></a>  <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>  <p className="price"> $ 488.00 </p></div>
                                    <div> <p className="properinfo" > Bedrooms 3 - Bathrooms 2 - Garage 1 </p></div>

                                    <div className="buttonb">
                                        <div className="stylebutton1"> a </div>
                                        {/* <div className="diagonalstyle"> a </div> */}
                                    </div>
                                </li>

                                <li className="listaclassbox2">
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
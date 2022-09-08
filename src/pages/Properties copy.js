import Contactbar from "./Contactbar"
import { useState } from "react"


const Properties = () => {


    const [btng4, setBtng4] = useState(1)

    const changeBtng = (n) => {
        setBtng4(n)
        console.log("esto es n" ,n)
        console.log("esto es btng4" ,btng4)
    }


    return (
        <>

            <section className="galleryimg">

                <section className="barvertical">
                    <div className="bvlogo"> <img className=" width120 zoom120 logo" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/logo-ankara.png" alt="pictureProp" /></div>
                    <div className="bvtitle"> Casa de los Árboles, Club de Golf, Los Encinos</div>
                    <div className="bvdesc">
                        3 HABITACIONES
                        3 BAÑOS
                        600 M2
                        4 ESTACIONAMIENTOS

                    </div>
                    <div className="bvprice">

                        Precio:
                        <h2>$ 14,900,000</h2>

                    </div>
                </section>





            </section>

            <section className="descriptiongraltotal">
                <section className="imgprop">
                    <div className="divimgprop">

                        <img className="imgpropimag2" src="https://www.ankararealestate.mx/wp-content/themes/apartvilla/img/resources/image-holder-bg.png" alt="pictureProp" />

                        <img className="imgpropimag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-18-scaled-e1642197574887.jpg" alt="pictureProp" />

                    </div>
                </section>
                <section className="descriptiongral">
                    CLUB DE GOLF LOS ENCINOS LERMA
                    CASA DE LOS ARBOLES
                    Dentro del Club de Golf “Los Encinos” a pocos minutos de la ciudad se encuentra nuestra “Casa de los Árboles” Lerma, única y privilegiada en su arquitectura.

                    Esta residencia te permitirá tener un contacto directo con la naturaleza y un equilibrio con tus sentidos y emociones ya que dentro de su construcción conservaron 4 espectaculares árboles de Encino Centenarios que le dan personalidad y majestuosidad a la propiedad. Al frente de la casa el mayor de los árboles, el guardián y protector; en el corazón de la casa justo al centro y rodeado de cristales que permiten disfrutarlo en todo momento el segundo y los 2 restantes en el patio trasero.

                    Además del deleite y la frescura de los Encinos, el diseño combina a la perfección la comodidad y elegancia, donde podrás disfrutar de cada espacio en armonía desde tu oficina independiente hasta una terraza a la sombra de los árboles

                    Casa con un diseño exclusivo, acabados de lujo, cuenta con vigas de acero y
                    madera.

                </section>



            </section>

            <section className="iconspropr">
                <ul className="uliconprop">
                    <il className="liicon">
                        <img className="iconprop" src="./assets/img/others/toilet.png" alt="iconprop" />
                        <h4 className="center">BAÑOS</h4>
                        <h4 className="center">3</h4>
                    </il>
                    <il className="liicon">
                        <img className="iconprop" src="./assets/img/others/bed.png" alt="iconprop" />
                        <h4 className="center">HABITACIONES</h4>
                        <h4 className="center">3</h4>
                    </il>
                    <il className="liicon">
                        <img className="iconprop" src="./assets/img/others/car.png" alt="iconprop" />
                        <h4 className="center">ESTACIONAMIENTOS</h4>
                        <h4 className="center">4</h4>
                    </il>
                    <il className="liicon">
                        <img className="iconprop" src="./assets/img/others/home.png" alt="iconprop" />
                        <h4 className="center" >METROS DE CONSTRUCCION</h4>
                        <h4 className="center">540m</h4>
                    </il>
                </ul>
            </section>

            <section className=" center margin10 videoonl">
                <iframe src="https://www.youtube.com/embed/zYAFIVzhQo8?feature=oembed"> </iframe>
            </section>






            <section className=" center margin10">
                <h3 className="textitalic center"> "Tu hogar debe contar la historia de quién eres
                    y ser una colección de lo que amas." </h3>
            </section>


            <section className="exclusive center">
                Que hace exclusiva y funcional a la

            </section>




            <section className="morepicture center">
                Más fotos de


                <div className="bottongallery">
                    <button onClick={() => changeBtng(1)} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">car</span>
                    </button>
                    <button onClick={() => changeBtng(2)} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">cama</span>
                    </button>
                    <button onClick={() => changeBtng(3)} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">baño</span>
                    </button>
                    <button onClick={() => changeBtng(4)} class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">home</span>
                    </button>
                    </div>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        {btng4 == 1 ? <>    <div class="carousel-item active">
                            <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-03-670x417.jpg" class="d-block w-100" alt="..." />
                        </div>
                        </> : <></>}

                        {btng4 == 2 ? <>    <div class="carousel-item active">
                            <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-09-670x417.jpg" class="d-block w-100" alt="..." />
                        </div>
                        </> : <></>}

                        {btng4 == 3 ? <>    <div class="carousel-item active">
                            <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-06-28-at-1.27.58-PM-670x417.jpeg" class="d-block w-100" alt="..." />
                        </div>
                        </> : <></>}

                        {btng4 == 4 ? <>    <div class="carousel-item active">
                            <img src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/Casa_Los-Arboles-06-670x417.jpg" class="d-block w-100" alt="..." />
                        </div>
                        </> : <></>}


                    </div>


                </div >

                {




}



            </section >


            <section className=" center margin10">
                <h3 className="textitalic center"> "En decoración coloca siempre una pieza controvertida.
                    Dará tema de conversación a tus invitados." </h3>
            </section>


            <section className="psold center">
                Total de propiedades vendidas en los últimos 6 meses:
            </section>




            <section className="brochure center margin10">
                DESCARGA EL BROCHURE

            </section>







            {/* <Contactbar /> */}
        </>
    )
}



export default Properties
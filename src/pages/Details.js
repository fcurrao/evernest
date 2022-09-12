

import "./pages.css"
import swal from 'sweetalert';

const Details = () => {

    const rangechange = () => {
        const putrange = document.getElementById('lbrange').value
        const put = document.getElementById('lbrangev')
        console.log("putrange", putrange)
        put.innerHTML = `$ ${putrange}`;
    }




    const consoleLog = () => {
        console.log("aca voy a details")
    }







    return (<>

        <section className="divtitulo">

            <h1 className="titulo"> Detalles de Propiedades</h1>

        </section>




        <section className="propiedad">
            <div className="treintaporc">
                <section className=" center total">


                    <section className="center lefttotal">

                        <div className="titlfilt">
                            <h4 className="center ptext3" > Filtrar por:</h4> </div>
                        <div className="boxyellow ifilters">
                            <input placeholder="Buscar por nombre.." className="sss form-control inputt" />
                            <select className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                                <option >Todas las locaciones</option>
                                <option >Ciudad de Mexico</option>
                                <option type="submit" >Toluca</option>
                            </select>
                            <select placeholder="tipo" className="form-control inputt" name="favoriteOnly" id="favoriteOnly">
                                <option >Todos los tipos</option>
                                <option>Premium</option>
                                <option type="submit" >Plus</option>
                            </select>

                            <div className="rangess sss form-control2 inputt" >  <input onChange={() => rangechange()} id="lbrange" type="range" min="3000000" max="50000000" step="1000000" />  <div id="lbrangev"> $ 3000000 </div>  </div>

                            <button className="buttonsearch2"><p className="text5">Buscar</p></button>
                        </div>
                    </section>
                </section>


            </div>

            <div className="setentaporc">
                <div className="galeryprop">
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}


                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://malikhassan.com/html/evernest/images/propertyImg01.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://malikhassan.com/html/evernest/images/propertyImg02.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://malikhassan.com/html/evernest/images/propertyImg03.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}
                    {/* {/* ////////////////////////////////////////////////////////// */}

                    <img className="imgadd" src="http://malikhassan.com/html/evernest/images/slide1.jpg"></img>


                </div>

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
                        <div><li>
                            <ul className="listadetalles2"> <p className="margrigh blbl">Estacionamiento</p> <p className="margrigh2">1</p></ul>
                            <ul className="listadetalles2"> <p className="margrigh blbl">Metros</p> <p className="margrigh2">600 M2</p></ul>
                            <ul className="listadetalles2"> <p className="margrigh blbl">Tipo</p><p className="margrigh2">Premium</p></ul>
                            <ul className="listadetalles2"> <p className="margrigh blbl">Oficina</p> <p className="margrigh2">1</p></ul>
                        </li></div>

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
                                    <input id="name" className='form-control inputt' type='text'
                                        name='name'
                                        placeholder='name'
                                        //  value={formDataUser.name}
                                        //     onChange={handleChange}
                                        required />


                                    <input id="phone" className='form-control inputt' type='number'
                                        name='phone'
                                        placeholder='phone'
                                    //  value={formDataUser.phone}
                                    //     onChange={handleChange}
                                    />
                                </div>



                                <div className="divflex2">


                                    <input id="email" className='form-control' type='email'
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
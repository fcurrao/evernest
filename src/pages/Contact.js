
import "./pages.css"
import swal from 'sweetalert';

const contact = () => {

 

    return ( <>


<section className="divtitulo">

<h1 className="titulo"> Contacto</h1>

</section>

    



        <section className="center contactcontainer">


 

            <section className="textocont">
                <br />
                <br />


                <div className="imagen">
                    <p className="titt footer15imp footer15impc" >Contactanos</p>


                    <form action="https://formsubmit.co/contacto@ankararealestate.com.mx" method="POST">
                    {/* <form id="formulario1" onSubmit={enviarcontacto} className=" formulario"> */}

                        <div className="div1" >


                        <div className="divflex1">
                              <input id="name" className='form-control3 inputt' type='text'
                                name='name'
                                placeholder='Nombre'
                            //  value={formDataUser.name}
                            //     onChange={handleChange}
                            required />
                            

                             <input id="phone" className='form-control3 inputt' type='number'
                                name='phone'
                                placeholder='Telefono'
                            //  value={formDataUser.phone}
                            //     onChange={handleChange}
                            />
                            </div>



                            <div className="divflex2">
                             <input id="asunto" className='form-control3 inputt' type='text'
                                name='asunto'
                                placeholder='Asunto'
                            //  value={formDataUser.adress}
                            //     onChange={handleChange}
                            />
                             
                             <input id="email" className='form-control3' type='email'
                                name='email'
                                placeholder='email'
                            //      value={formDataUser.email}
                            //     onChange={handleChange}
                            required />
                             
                        </div>
                        </div>

                        <div className="div2" >

                             <textarea  id="descripcion" className='form-control3 inputtbig ' type='texto'
                                name='descripcion'
                                placeholder='Mensaje'
                            //      value={formDataUser.email}
                            //     onChange={handleChange}
                            />
                             


                            <button type="submit" className="buttonsearch2"> <p className="text5">Enviar</p></button>
                          
                        </div>


                    </form>

                </div>
            </section>






            <section className="fqfq footer2 footer2c">
                <div className='footer15 footer15c'>
                    <h4 className='footer15imp footer15impc' >Info de Contacto</h4>
                </div>

                <p className="psm">Ankara Real Estate</p>
                <div className="divemail">
                    <svg className="iconblanco svgspacing" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg> <p className="psm  "> contacto@ankararealestate.com.mx</p>
                </div>


                <div className="divphone"> 
                    <i class='pl fas fa-phone-alt' style={{ fontSize: "18px" }} ></i> <p className="psm w100 ml">(+52 ) 55 1510 8737</p>
                </div>

                

                <section className=" sm3 socialmedia">
                    <div className='z125 w100'>
                        <a href="https://www.facebook.com/AnkraRealEstate/" target="_blank" className='ablack smc smpc  fab fa-facebook-f' style={{ fontSize: "16px" }} ></a>
                        <a href="https://www.instagram.com/ankrarealestate/" target="_blank" className=' ablack smc smpc fab fa-instagram' style={{ fontSize: "17px" }} ></a>
                        <a href="https://www.youtube.com/channel/UCVwCSszh8_MTmZ55k5fztqg" target="_blank" className='ablack smc smpc fab fa-youtube' style={{ fontSize: "16px" }} ></a>



                    </div>
                </section>



            </section>




        </section> 

        </>
    )


}

export default contact
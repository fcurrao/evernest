import OurTeam from './OurTeam'
import { Link } from 'react-router-dom'

const Aboutus = () => {



    return (
        <>



            <section className="divtitulo">

                <h1 className="titulo"> Nosotros</h1>

            </section>



            <section className="aboutus">


                <div className="infoaboutus">
                    <p className=" font titt"> Nuestra experiencia</p>
                    <h3 className="italic stitt font">Hacemos lo que amamos de una manera diferente</h3>
                    <p>
                        Ankara es una empresa que nace de la necesidad de crear una experiencia exclusiva al cliente en una búsqueda de un hogar único,
                        exclusivo y prestigioso.
                        El nombre está inspirado en la ciudad capital de Turquía, por la belleza y delicadez en su arquitectura.
                    </p>
                    <h3 className=" stitt italic">La experiencia de venta de las casas, es con base a la esencia y personalidad de la misma.</h3>

                    <p>
                        Creamos una historia detrás de las propiedades con el acompañamiento de las vivencias de los dueños en los hogares.
                        Nuestras visitas a las propiedades consideran una experiencia del entorno, los compradores pueden conocer las áreas
                        comerciales, de diversión y esparcimiento para tener una idea completa del ambiente en el que vivirán.
                    </p>

                </div>



                <div className="divimgab">
                    <img className="imgab" src="http://malikhassan.com/html/evernest/images/aboutImg.jpg"></img>
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



            {/* ////////////////////////////////////////////
///
//////////////////////////////////////
/////////////////////////
//////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////*/   }

            <section className="ott">
                <section className='qone'>
                    <div className='fyd1'>
                        <div className='f1'>
                            <div className="divmargin">
                                <img className="picagent" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-16-at-8.16.04-PM.jpeg" ></img>
                                <div className="agent1"></div>
                                <section className='nameagent'>
                                    <h2 className="namea">  NORMA ANGÉLICA ARTEAGA RUIZ</h2>
                                </section>
                            </div>
                        </div>
                        <div className='r1'>
                            <section className="socialmedia2">
                                <div>
                                    <a href="https://wa.me/+525519539803" target="_blank" class='bb sm fas fa-phone' style={{ fontSize: "16px" }} ></a>
                                    <a href="mailto:angelicaarteaga@ankararealestate.com.mx" target="_blank" class='bb sm  fa fa-envelope' style={{ fontSize: "16px" }} ></a>
                                    <a href="https://www.instagram.com/ankrarealestate/" target="_blank" class='bb sm fab fa-instagram' style={{ fontSize: "17px" }} ></a>
                                </div>
                            </section>
                        </div>


                        <div className='d1'>
                            Co Autora Best Seller en Amazon de 2 libros y Asesora Certificada.
                            10 años de éxitos en Bienes Raíces. Fundadora de una Oficina Inmobiliaria, miembro de la Asociación Mexicana de Profesionales Inmobiliarios.
                            Actualmente es Directora de Inmobilaria Quality Arteaga, ofreciendo servicios de alto valor en la promoción y venta de las propiedades que sus clientes le confían para venderlos en el menor tiempo posible al mejor precio.
                        </div>
                    </div>
                </section>



                <section className='qtwo'>
                    <div className='fyd2'>
                        <div className='f2'>
                            <div className="divmargin2">
                                <img className="picagent" src="https://www.ankararealestate.mx/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-10-at-9.25.41-AM.jpeg" ></img>
                                <div className="agent1"></div>
                                <section className='nameagent'>
                                    <h2 className="namea"> CLAUDIA GRISEL CANCHOLA GRANADOS</h2>
                                </section>
                            </div>
                        </div>
                        <div className='r2'>
                            <section className="socialmedia2">
                                <div>
                                    <a href="https://wa.me/+525515108737" target="_blank" class='bb sm fas fa-phone' style={{ fontSize: "16px" }} ></a>
                                    <a href="mailto:claudiacanchola@ankararealestate.com.mx" target="_blank" class='bb sm  fa fa-envelope' style={{ fontSize: "16px" }} ></a>
                                    <a href="https://www.instagram.com/ankrarealestate/" target="_blank" class='bb sm fab fa-instagram' style={{ fontSize: "17px" }} ></a>
                                </div>
                            </section>
                        </div>
                        <div className='d2'>
                            LAE con Maestría en Innovación para el desarrollo empresarial en el ITESM.
                            20 años de experiencia en el sector comercial. Desempeñó puestos directivos en el área de ventas, atención al cliente y desarrollo de experiencias de compra al cliente en Sony Comercio de México. 6 años de éxitos en Bienes Raíces.
                            Actualmente socia directora de Ankara Bienes Raices, donde su mayor reto es lograr que sus clientes tengan una experiencia de compra extraordinaria.
                        </div>
                    </div>
                </section>



                <section className='qthree'>
                    <div className='fyd3'>
                        <div className='f3'>
                            <div className="divmargin3">

                                <img className="picagent" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-21-at-2.48.19-PM.jpeg" ></img>

                                <div className="agent1"></div>

                                <section className='nameagent'>
                                    <h2 className="namea">EDGAR MONTIEL</h2>
                                </section>
                            </div>
                        </div>

                        <div className='r3'>
                            <section className="socialmedia2">
                                <div>
                                    <a href="https://wa.me/+527222407608" target="_blank" class='bb sm fas fa-phone' style={{ fontSize: "16px" }} ></a>
                                    <a href="mailto:edgarmontiel@ankararealestate.com.mx" target="_blank" class='bb sm  fa fa-envelope' style={{ fontSize: "16px" }} ></a>
                                    <a href="https://www.instagram.com/ankrarealestate/" target="_blank" class='bb sm fab fa-instagram' style={{ fontSize: "17px" }} ></a>
                                </div>
                            </section>
                        </div>
                        <div className='d3'>
                            Empresario mexicano con más de 18 años de experiencia en negocios en el giro de salud, alimentos, financieros y bienes raíces.
                            Por esa razón a lo largo de su vida como empresario e inversionista se ha destacado como speaker con mas de 8,000 horas hablando en público en temas de negocios, ventas, conducta humana y educación financiera.
                        </div>
                        <div className='d3'>
                            Certificado en Estados Unidos con personas de la talla de John Maxwell, Blair Singer, Daniel Goleman y Tony Robbins, logró romper un récord de la Lección de Educación Financiera más grande del Mundo de la mano del escritor del libro Padre Rico Padre Pobre Robert kiyosaki, ha escrito artículos en Forbes en temas de educacion financiera y ha compartido escenario con diferentes personalidades del mundo de los negocios como Carños Muñoz, Diego Dreyfus, entre otros.
                        </div>

                    </div>
                </section>
            </section>









            {/* ////////////////////////////////////////////
///
//////////////////////////////////////
/////////////////////////
//////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////*/   }




            {/* ////////////////////////////////////////////
///
//////////////////////////////////////
/////////////////////////
//////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////*/   }




        </>
    )
}



export default Aboutus

import './pages.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    

    return (
        <>
<section className="footerclass">


<section className="footer1">
<div className="margintop5"> <img className="logo" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/logo-ankara.png" alt="pictureProp" /></div>
<p className='pfoot'>Ankara es una empresa que nace de la necesidad de crear una experiencia exclusiva al cliente en una búsqueda de un hogar único, exclusivo y prestigioso.
</p>
<Link to="/nosotros"  className='ptextfooter'>    <button className="buttonsearch2">    <p className="text5"> NOSOTROS </p> </button> </Link>
 
</section>


<section className="footer15">
<h3 className='linkfooter2' >Quick Links</h3>
<div className='linkfooter22'>
    <Link to="/home"  className='ptextfooter'> ► HOME </Link>
    <Link to="/propiedades"  className='ptextfooter'> ► PROPIEDADES </Link> 
    <Link to="/nosotros"  className='ptextfooter'> ► NOSOTROS </Link> 
    <Link to="/contacto"  className='ptextfooter'> ► CONTACTO </Link>
    </div>
</section>






<section className="footer2">
<div className='footer15'>
    <h3  className='footer15imp' >Contact Info</h3>
    </div>
 
<p className="psm">Ankara Real Estate</p>
<div className="divemail">
   <svg  className="iconblanco svgspacing" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> <p  className="psm  "> contacto@ankararealestate.com.mx</p>
</div>

    
<div className="divphone">

                        <i class='smp fas fa-phone-alt' style={{ fontSize: "18px" }} ></i> <p className="psm">(+52 ) 55 1510 8737</p>
                        </div>

            <section className="socialmedia">
                    <div className='z125'>
                    <a href="https://www.facebook.com/AnkraRealEstate/"  target="_blank" class='sm fab fa-facebook-f' style={{ fontSize: "16px" }} ></a> 
                    <a href="https://www.instagram.com/ankrarealestate/" target="_blank" class='sm fab fa-instagram' style={{ fontSize: "17px" }} ></a>
                    <a href="https://www.youtube.com/channel/UCVwCSszh8_MTmZ55k5fztqg" target="_blank" class='sm fab fa-youtube' style={{ fontSize: "16px" }} ></a>
                    
                     

                    </div>
                    </section>




                    
</section>
 




</section>


{/* <h4 className="footer3">
<a  className="footer3" href='https://www.github.com/fcurrao'  target="_blank">  Sitio desarrollado by GQUE 
<img className="githubimag" src="https://www.svgrepo.com/show/343674/github.svg"></img></a>
</h4> */}
 
        </>
    )
}



export default Footer
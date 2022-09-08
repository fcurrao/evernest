
import './pages.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    

    return (
        <>
<section className="footerclass">


<section className="footer1">
<div className="margintop5"> <img className="logo" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/logo-ankara.png" alt="pictureProp" /></div>

 
</section>


<section className="footer2">
 <div className='linkfooter'>
    <Link to="/home"  className='textlinkbar'>  HOME </Link>
    <Link to="/nosotros"  className='textlinkbar'>  NOSOTROS </Link> 
    <Link to="/contacto"  className='textlinkbar'>  CONTACTO </Link>
    </div>
<section className="footer3">


Copyright © Ankara 2022. Todos los derechos reservados.

<h4 className="footer3">
<a  className="footer3" href='https://www.github.com/fcurrao'  target="_blank">  Sitio desarrollado by GQUE 
<img className="githubimag" src="https://www.svgrepo.com/show/343674/github.svg"></img></a>
</h4>
 
</section>
</section>
 




</section>
        </>
    )
}



export default Footer
import './Navigationbar.css'
import { Link } from 'react-router-dom'

const Navigationbar = () => {

    

    return (
        <>
        <section className="navbar">

<div className='divlogobar'>
<Link to="/home"> <img  className='logobar' src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/logo-ankara-1.png" alt="logo"></img> </Link>
</div>   
        

<div className='optionbar'>
<Link to="/home"  className='textlinkbar'>  HOME </Link>
    <Link to="/nosotros"  className='textlinkbar'>  NOSOTROS </Link>
    <Link to="/propiedades"  className='textlinkbar'>  PROPIEDADES </Link>
    <Link to="/contacto"  className='textlinkbar'>  CONTACTO </Link>

    </div>  
        
        
        
</section></>
    )
}



export default Navigationbar
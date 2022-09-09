import { Link } from "react-router-dom"

const Error404 = () => {

    

    return (
        <>
 <h1 className="error404h1"> 404 </h1>
  <h2 className="error404h2">Pagina no encontrada</h2>
  <p className="errorp">La página que está buscando no está disponible o ha sido eliminada. Intente ir a la página de inicio usando el botón de abajo.</p>
  <Link to="/home"  className='ptextfooter'>   <div className="center flex"><button className="buttonsearch2"> <p className="text5"> Ir a Home</p></button></div></Link>

        </>
    )
}



export default Error404
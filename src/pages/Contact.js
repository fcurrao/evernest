
import "./pages.css"
import swal from 'sweetalert';

const contact = () => {


const enviarcontacto = (e) =>{
      const descripcionN = document.getElementById("descripcion").value
      const emailN =  document.getElementById("email").value
      const nameN =  document.getElementById("name").value 
      console.log("nameN", nameN)

      if(emailN != "" && descripcionN != "" && nameN != ""){
      console.log("envio comentario y contacto")
      e.preventDefault() 
      document.getElementById("descripcion").value = ""
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("phone").value = ""
      document.getElementById("adress").value = ""
      swal("EXCELENTE! ,  Su comentario se envio con exito, Proximamente le responderemos")
} else{
swal("Debes poner si o si email , nombre y descripcion..")
e.preventDefault() 
}
}



      return (
 
           

<section className="center contactcontainer">
 
<h1 className="titulo center">Contacto</h1>

¿Te interesa alguna propiedad premium?
NOS COMUNICAMOS CONTIGO
Completa con tus datos y nos comunicaremos lo antes posible

<div className="mediapag">
<div className="texto">
<h2 >Ankara Real Estate
</h2>
<h3 className="subtexto"><br/>
Phone : <br/>
 +52 55 1510 8737
<br/><br/>
 
Email: <br/>
contacto@ankararealestate.com.mx
<br/>
</h3>
<br/>

 
<br/> 
</div>
<br/>
<div className="imagen">
<p className="subtexto" >Formulario</p> 

<form  id="formulario1" onSubmit={enviarcontacto}  className=" formulario"> 
      
     <div className="div1" >
     
    

                          name<br /><input id="name" className='inputt' type='text' 
                            name='name' 
                            placeholder='name'
                            //  value={formDataUser.name}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />

                            phone<br /><input id="phone" className='inputt' type='number' 
                            name='phone' 
                            placeholder='phone'
                            //  value={formDataUser.phone}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />

                             adress<br /><input id="adress" className='inputt' type='text' 
                            name='adress' 
                            placeholder='adress'
                            //  value={formDataUser.adress}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />
                            email<br /><input id="email" className='inputt' type='email' 
                            name='email' 
                            placeholder='email'
                        //      value={formDataUser.email}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />
                            </div>
                            <div className="div2" >

                        descripcion <br /><textarea id="descripcion" className='inputtbig' type='texto' 
                            name='descripcion' 
                            placeholder='descripcion'
                        //      value={formDataUser.email}
                        //     onChange={handleChange}
                            />
                                                          <br />
                                                          <br />


                            <button type="submit"> Enviar Consulta</button>
                            <br />
                            </div>


</form>

</div>
</div>

      </section>



      )


}

export default contact
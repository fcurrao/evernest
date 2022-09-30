import { useEffect } from "react"





const GeneralContainer = () => {




    /////////////////////////////////// API ///////////////////////////////////////////




    // const componentGetMount = async () => {

      
        // try {
        //     const response = await fetch(' https://api-easybroker.onrender.com/properties', {

        //         mode: 'no-cors',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Acces-Control-Allow-Origin': '*',
        //             'X-Authorization': 'febj7tgu8e2667ubmz80qetgkmezwy'
        //         }
        //     });

        //     const data = await response.json()
        //     console.log("aca esta la data:" , data)
        //     console.log(data)
        // }
        // catch (error) {
        //     console.log(error)
        // }



        const componentGetMount = async () => {

        fetch(' https://api-easybroker.onrender.com/properties')
        .then((response)=>{
        return response.json()
        })
        .then((data)=>{
        console.log("PROPIEDADES :", data)
        })
        
        








    }








    useEffect(() => {
        componentGetMount()
    }, [])




    /////////////////////////////////// API ///////////////////////////////////////////


    /////////////////////////////////////   URLs //////////////////////////////

    //     API
    // https://api.easybroker.com/playground#/Properties/get_properties


    // help
    // https://ayuda.easybroker.com/article/330-api-de-easybroker-beta





    // API KEY:
    //  febj7tgu8e2667ubmz80qetgkmezwy




    ///////////////////////////////// URLs ///////////////////////////////////////////







































    return (

        <>
            {console.log("Cargando el General Container (api) (Base de datos de Ankara) ")}


        </>
    )

}



export default GeneralContainer 

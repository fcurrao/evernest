import { useEffect } from "react"






const GeneralContainer = () => {




    /////////////////////////////////// API ///////////////////////////////////////////




    const componentGetMount = async () => {

        const response = await fetch('https://api.easybroker.com/playground#/Properties/get_properties', {

            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Acces-Control-Allow-Origin': '*',
                'X-Authorization': 'febj7tgu8e2667ubmz80qetgkmezwy'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

            })
    }





    //     const componentGetMount = async () => { 

    //      const response = await fetch('https://api.easybroker.com/playground#/Properties/get_properties'
    //         mode: 'no-cors',
    //         headers: {
    //                     'Content-Type': 'application/json',
    //                     'Acces-Control-Allow-Origin': '*',
    //                     'X-Authorization': 'febj7tgu8e2667ubmz80qetgkmezwy'
    //                 } })
    //     .then((response) => response.json())
    //     .then((data)=> {
    //         console.log(data)

    //     })
    // }   





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

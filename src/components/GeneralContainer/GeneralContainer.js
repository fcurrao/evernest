



const GeneralContainer = () => {




    /////////////////////////////////// API ///////////////////////////////////////////

    const url = 
    'https://api.easybroker.com/v1/properties?page=1&limit=20&search%5Bupdated_after%5D=2020-03-01T23%3A26%3A53.402Z&search%5Bupdated_before%5D=2025-03-01T23%3A26%3A53.402Z&search%5Boperation_type%5D=sale&search%5Bmin_price%5D=500000&search%5Bmax_price%5D=3000000&search%5Bmin_bedrooms%5D=1&search%5Bmin_bathrooms%5D=1&search%5Bmin_parking_spaces%5D=1&search%5Bmin_construction_size%5D=100&search%5Bmax_construction_size%5D=1000&search%5Bmin_lot_size%5D=100&search%5Bmax_lot_size%5D=1000&search%5Bstatuses%5D%5B%5D=published'



    const componentGetMount = async () => {

        const response = await fetch(url)
        console.group(response)
        // const api = await fetch(url , {
        //         method: 'GET',
        //         headers: new Headers({ 'Content-type': 'application/json' }),
        //         mode: 'no-cors'
        //     })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }

    useEffect(() => {
        componentGetMount()
    }, [])

/////////////////////////////////// API ///////////////////////////////////////////



    // const componentGetMount = async () => {
    //     const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         
    //         console.log(respuesta)
    // }



    // { componentGetMount() }





    return (
        <><h1>hola</h1></>
    )
}



export default  GeneralContainer 

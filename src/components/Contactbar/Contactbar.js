import './Contactbar.css';

const Contactbar = () => {



    return (
        <>


            <section className="Contactbar">



                <section className="socialmedia">
                    <div>
                    <a href="https://www.facebook.com/AnkraRealEstate/"  target="_blank" class='sm fab fa-facebook-f' style={{ fontSize: "16px" }} ></a> 
                    <a href="https://www.instagram.com/ankrarealestate/" target="_blank" class='sm fab fa-instagram' style={{ fontSize: "17px" }} ></a>
                    <a href="https://www.youtube.com/channel/UCVwCSszh8_MTmZ55k5fztqg" target="_blank" class='sm fab fa-youtube' style={{ fontSize: "16px" }} ></a>
                    
                     

                    </div>

                  
                </section>
                <section className="bothtogether">
                    <section className="phone">
                     
                    </section>
                    <section className="submitprop">
                    <div className="divphone">
                    <p>  <i class='smp fas fa-phone-alt cbl' style={{ fontSize: "18px"}} ></i> (+52 ) 55 1510 8737</p>
                        </div>

                    </section>
                </section>
            </section>
        </>
    )
}



export default Contactbar
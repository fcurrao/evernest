import './Contactbar.css';

const Contactbar = () => {



    return (
        <>


            <section className="Contactbar">



                <section className="socialmedia">
                    <div>
                    <i class='sm fab fa-facebook-f' style={{ fontSize: "16px" }} ></i>
                    <i class='sm fab fa-twitter' style={{ fontSize: "16px" }} ></i>
                    <i class='sm fab fa-linkedin-in' style={{ fontSize: "16px" }} ></i>
                    <i class='sm fab fa-youtube' style={{ fontSize: "16px" }} ></i>
                    
                     

                    </div>

                  
                </section>
                <section className="bothtogether">
                    <section className="phone">
                        <div className="divphone">
                        <i class='smp fas fa-phone-alt' style={{ fontSize: "18px" }} ></i> <p>(770) 123 4657</p>
                        </div>
                    </section>
                    <section className="submitprop">
                        <div>

                            <p >Submit Property</p>
                        </div>

                    </section>
                </section>
            </section>
        </>
    )
}



export default Contactbar
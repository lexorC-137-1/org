import { useState } from "react"
import "./mi-org.css"


const MiOrg = (props) =>{
    /*
    Estado-hoks
    useState
    const [nombreVariable, funcionActualiza] = useState(valorInicial);
    
   console.log(props);
    const [mostrar, actualizarMostrar] = useState(true);
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar);
    }
    */
    
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;
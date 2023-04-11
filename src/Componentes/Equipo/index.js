import "./equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.4)
    }
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id);
                        }
                    }                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    { 
                    colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;

/*
http://github.com/harlandlohora.png
http://github.com/genesysaluralatam.png
http://github.com/jeanmariesaluralatam.png
http://github.com/christianpva.png
http://github.com/josedariogonzalezcha.png
*/
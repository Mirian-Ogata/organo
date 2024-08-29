
import './campo-texto.css'

const CampoTexto = (props) => {
    //props(parâmetro) -> propriedades = podemos alterar as propriedades reutilizando esta função
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
        // setValor(evento.target.value)
        //target: evento do JavaScript
        // console.log(valor)

    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
            {/*onChange: toda vez que algo é alteado uma determinada função é executada. -- required: não permite que um campo fique vazio */}
        </div>
    )
}
export default CampoTexto
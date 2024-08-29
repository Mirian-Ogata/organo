import './colaborador.css'
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    // outra forma de utilizar a props. Aqui o JavaScript separou pegou o props.nome e separou em uma variável sozinha.
    return(<div className='colaborador'>
                <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                    <img src={imagem} alt={nome}/>
                </div>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>
            </div>
    )
}

export default Colaborador
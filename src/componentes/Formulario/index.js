import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { useState } from 'react'
//useState: é uma hook(gancho) que possibilita manter um estado dentro de uma função.

const Formulario = (props) => {
const times = [
    '',
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    //('')=string vazia -- String: é um valor digitado no input.
    //set=setter é uma função que permite que o estado seja alterado
    //nesta sintaxe, destruturamos nosso array e pegamos a primeira e a segunda posição do array.

const aoSalvar = (evento) => {
    evento.preventDefault()
    // na linha 18: é um método para que o JavaScript não siga as funções padrões do próprio.
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    // linhas 37 a 40 serve para que o formulário fique limpo depois que o submetermos 
}

return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto 
                obrigatorio={true} 
                /*este componente genérico é uma validação de que o componente será orbigtório ou não.*/
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
            />
            <CampoTexto
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={imagem} aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label= "Time" 
                itens = {props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao texto = "Criar card"/>
        </form>
    </section>
)
}
export default Formulario
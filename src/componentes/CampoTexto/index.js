import './CampoTexto.css'

const CampoTexto = (props) => {

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.valor} 
                    onChange={(evento) => props.alteracao(evento.target.value)}
                    required={props.obrigatório} 
                    placeholder={props.placeholder}/>
        </div>
    )
}

//Para componentes reutilizáveis, como o input, para alterar o estado de forma diferente para cada tipo de input é necessário realizar
//o useState no componente pai, nesse caso, no formulário.
//Dessa forma, como o evento ocorre dentro do input, vamos passar uma função para onChange por props, essa função recebrá como parâmetro
//o valor digitado no input

//quando temos um valor pré-definido modificações não são renderizadas na tela, isso porque precisamos alterar o estado
//do componente e renderizar novamente

export default CampoTexto;
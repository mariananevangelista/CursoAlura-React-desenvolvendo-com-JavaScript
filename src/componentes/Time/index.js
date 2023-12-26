import Card from '../Card';
import './Time.css'

const Time = (props) => {
    return(
        props.colaboradores.length > 0 && <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => <Card key={colaborador.nome} 
                                                                nome={colaborador.nome} 
                                                                cargo={colaborador.cargo} 
                                                                imagem={colaborador.imagem}
                                                                corPrimaria={props.corPrimaria} />)}
            </div>
            

        </section>
    )
}

export default Time;

//para trabalhar com cores dinâmicas utilizamos css inline, para ter acesso à variável
//Ao usar o atributo style com variáveis, é aberta a primeira chave para indicar o uso mde JavaScript e uma segunda
//para digitar as propriedades css (objeto), não sendo necessário abrir outra chaves para chamar a variável
//css com javascript deve ter nomenclaturas em camel case
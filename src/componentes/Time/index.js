import Card from '../Card';
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({colaboradores, time, deletar, mudarCor}) => {
    return(
        colaboradores.length > 0 && <section className="time" style={{backgroundColor: hexToRgba(time.cor, '0.2')}}>
            <input value={time.cor} type='color' className='input-cor' onChange={(evento) => mudarCor(evento.target.value, time.nome)}/>
            <h3>{time.nome}</h3>
            <hr style={{borderColor: time.cor}}/>
            <div className="colaboradores">
                {colaboradores.map((colaborador) => <Card key={colaborador.nome} colaborador = {colaborador} 
                                                    cor = {time.cor}
                                                    deletar = {deletar}
                                                    />)}
            </div>
        </section>
    )
}

export default Time;

//para trabalhar com cores dinâmicas utilizamos css inline, para ter acesso à variável
//Ao usar o atributo style com variáveis, é aberta a primeira chave para indicar o uso mde JavaScript e uma segunda
//para digitar as propriedades css (objeto), não sendo necessário abrir outra chaves para chamar a variável
//css com javascript deve ter nomenclaturas em camel case
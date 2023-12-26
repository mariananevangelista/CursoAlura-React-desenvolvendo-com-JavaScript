import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatório}
                    value={props.valor}
                    onChange={(evento) => props.alteracao(evento.target.value)} >
                    
                <option value=""></option>
                {
                    props.items.map(item => <option key={item.nome}>{item.nome}</option>)
                }
            </select>
        </div>
    )
}
//Podemos passar um array como props, no exemplo acima props.items é um array, percorremos ela criando uma option para cada elemento
//Lembrando que para cada option renderizado é necessário ter uma chave única, nesse caso utilizamos o próprio nome do item
export default ListaSuspensa;
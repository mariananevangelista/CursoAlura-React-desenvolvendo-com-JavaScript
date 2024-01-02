import './Card.css'
import { AiFillCloseCircle } from "react-icons/ai";

const Card = ({colaborador, cor, deletar}) => {
    return(
        <div className='card'>
            <div className='delete-button' onClick={() => deletar(colaborador.id)}>
                <AiFillCloseCircle />
            </div>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Card
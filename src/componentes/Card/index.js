import './Card.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Card = ({colaborador, cor, deletar, favoritar}) => {
    return(
        <div className='card'>
            <div className='delete-button' onClick={() => deletar(colaborador.id)}>
                <AiFillCloseCircle />
            </div>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            
            <div className='rodape' onClick={() => favoritar(colaborador.id)}>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar' >
                    {colaborador.favorito ? <IoMdStar /> : <IoMdStarOutline  />}
                </div>
            </div>
        </div>
    )
}

export default Card
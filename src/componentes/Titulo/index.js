import './Titulo.css'

const Titulo = ({showForm}) => {
    return (
        <div className='container'>
            <div className='titulo'>
                <h1>Minha Organização:</h1> 
                <hr/>
            </div>
            
            <div className='button' onClick={() => showForm()}>
                <img src='/imagens/Botão add-01 1.svg' alt='Botão adicionar'/>
            </div>
            
        </div>
    )
}

export default Titulo
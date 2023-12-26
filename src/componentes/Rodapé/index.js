import './Rodapé.css'

const Rodapé = () => {
    return(
        <footer className='footer'>
            <ul>
                <li>
                    <img src="/imagens/fb.png" alt="Facebook" />
                </li>

                <li>
                    <img src="/imagens/tw.png" alt="Twitter" />
                </li>

                <li>
                    <img src="/imagens/ig.png" alt="Instagram" />
                </li>
            </ul>

    
            <img src="/imagens/logo.png" alt="logo" className='logo' />
            
            

            <h6>Desenvolvido por Alura.</h6>

        </footer>
    )
}

export default Rodapé
import './Organizacao.css'

const Organizacao = (props) =>{

    return(
        <section className='organizacao'>
            <h2 className='organizacao-titulo'>Minha Organizacao:</h2>
            <div onClick={props.exibirForm} className='organizacao-botao'>
                <img src='/imagens/botao.png' alt='botao' />
            </div>
        </section>
    )
}

export default Organizacao
import './Colaborador.css'
import { GrClose } from 'react-icons/gr'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Colaborador = (props) =>{

    function favoritar() {
        props.aoFavoritar(props.id)
    }   

    const propsFavorito ={
        size: 25,
        onClick: favoritar
    }

    console.log(props)

    return(
        <div className='colaborador'>
            <GrClose 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.id)}
            />
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar'>
                    {props.favorito
                        ? <AiFillHeart {...propsFavorito} color='red'/> 
                        : <AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador
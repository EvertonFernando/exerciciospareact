import './styles.css';

const Produto = ({nome,imgproduto}) => {

    
    return(
        <div className='container'>
            <img src={imgproduto} alt="Celulares"></img>
            <p>{nome}</p>
        </div>
    );
}


export default Produto;
import Produto from '../../components/Produto';
import img_G53 from '../../img/motoG53.png';
import img_G62 from '../../img/motoG62.png';
import img_G573 from '../../img/motoG73.png';
import img_Edge30 from '../../img/Edge30.jpg';
import img_Edge30Neo from '../../img/edge30Neo.jpg';
import img_G582 from '../../img/motoG82.png';
import './styles.css';

const ListaProdutos = () => {
    return(
        <main className='main-produtos'>
            <Produto nome="Moto G53" imgproduto={img_G53} />
            <Produto nome='Moto G62' imgproduto={img_G62} />
            <Produto nome='Moto G73' imgproduto={img_G573} />
            <Produto nome='Edge 30 Pro' imgproduto={img_Edge30} />
            <Produto nome='Edge 30 Neo' imgproduto={img_Edge30Neo} />
            <Produto nome='Moto G82' imgproduto={img_G582} />
        </main>
    );
}

export default ListaProdutos;
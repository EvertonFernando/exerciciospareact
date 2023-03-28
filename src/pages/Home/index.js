import {Link} from 'react-router-dom';
import imagem5g from '../../img/motoG53.png';
import './styles.css';

const Home = () => {
    return(
        <main className='main-home'>
            <img alt='Imagem' src={imagem5g} />
            <div>
                <h1>Conheça alguns de nossos aparelhos com tecnologia 5Gd</h1>
                <p>A tecnologia 5G proporciona muitas vantagens, como: conexões ainda mais rápidas para navegar na internet, fazer downloads, baixa latência que garantirá uma comunicação em tempo real.</p>
                <Link to='/produtos'><button>Confira nossos produtos!</button></Link>
            </div>
        </main>
    );
}

export default Home;
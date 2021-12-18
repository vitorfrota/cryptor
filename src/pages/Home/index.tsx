import Cryptor from '../../components/Cryptor';
import Header from '../../components/Header';
import Result from '../../components/Result';

import { CryptorProvider } from '../../contexts/CryptorContext';

import './styles.scss';

function Home(){
    return (
        <main className='wrapper'>
            <Header />
            <CryptorProvider>
                <div>
                    <Cryptor />
                    <Result />
                </div>
            </CryptorProvider>
            <footer>
                <p>Created by <a href="https://github.com/vitorfrota" target="_blank" rel="noreferrer">Vitor Frota.</a></p>
            </footer>
        </main>
    )
}

export default Home;
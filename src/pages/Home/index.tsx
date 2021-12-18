import { useContext } from 'react';

import Cryptor from '../../components/Cryptor';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Result from '../../components/Result';

import { CryptorContext } from '../../contexts/CryptorContext';

import './styles.scss';

function Home(){
    const { result } = useContext(CryptorContext);

    return (
        <main className='wrapper'>
            <Header />
            <div>
                <Cryptor />
                {
                    result === 'invalidKey' 
                    ? <Error message="Invalid key, try again!!! 🤔" />
                    : <Result />
                }
            </div>
            <footer>
                <p>Created by <a href="https://github.com/vitorfrota" target="_blank" rel="noreferrer">Vitor Frota.</a></p>
            </footer>
        </main>
    )
}

export default Home;
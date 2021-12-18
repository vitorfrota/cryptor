import { useContext } from 'react';
import { FiCopy } from 'react-icons/fi';

import { CryptorContext} from '../../contexts/CryptorContext';

import './styles.scss';

function Result(){
    const { result } = useContext(CryptorContext);

    return (
        <div className="container" style={{ display: result ? 'flex' : 'none'}}>
            <p>{result}</p>
            <button>
                <FiCopy /> 
                Copiar
            </button>
        </div>
    )
}

export default Result;
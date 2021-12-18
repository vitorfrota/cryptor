import { useCallback, useContext } from 'react';
import { FiCopy } from 'react-icons/fi';

import { CryptorContext} from '../../contexts/CryptorContext';

import './styles.scss';

function Result(){
    const { result } = useContext(CryptorContext);

    const handleCopyResult = useCallback(async ()=> {
        await navigator.clipboard.writeText(result);
    }, [result]);

    return (
        <div className="container" style={{ display: result ? 'flex' : 'none'}}>
            <p>{result}</p>
            <button onClick={handleCopyResult}>
                <FiCopy /> 
                Copiar
            </button>
        </div>
    )
}

export default Result;
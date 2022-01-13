import { useCallback, useContext } from 'react';
import { FiCopy } from 'react-icons/fi';

import { CryptorContext} from '../../contexts/CryptorContext';

import './styles.scss';

export function Result(){
    const { result } = useContext(CryptorContext);

    const handleCopyResult = useCallback(async ()=> {
        await navigator.clipboard.writeText(result);
    }, [result]);

    return (
        <div className="container" style={{ display: result ? 'flex' : 'none'}}>
            <p>{result}</p>
            <button onClick={handleCopyResult}>
                <FiCopy /> 
                Copy
            </button>
        </div>
    )
};
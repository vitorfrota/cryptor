import { useContext, useState } from 'react';
import { FiKey } from 'react-icons/fi';

import { CryptorContext } from '../../contexts/CryptorContext';

import './styles.scss';

function Cryptor(){
    const { selectedOption, handleChangeOption, handleSubmit } = useContext(CryptorContext);

    const [canConvert, setCanConvert] = useState(false);

    return (
        <div className='box'>
            <ul>
                <li 
                    className={selectedOption === 'encrypt' ? 'active' : ''}
                    onClick={()=> handleChangeOption('encrypt')}
                >Encrypt</li>
                <li 
                    className={selectedOption === 'decrypt' ? 'active' : ''}
                    onClick={()=> handleChangeOption('decrypt')}
                    >Decrypt</li>
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder={`Put your text to ${selectedOption} here...`}
                    name="text"
                    rows={4}
                />
                <div className="boxFooterContainer">
                    <div className="keyContainer">
                        <FiKey />
                        <input 
                            type="text" 
                            name="key"
                            placeholder="Your secret key here..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={canConvert}
                    >{selectedOption}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Cryptor;
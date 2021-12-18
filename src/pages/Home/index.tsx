import { useEffect, useState } from 'react';
import { FiKey, FiCopy } from 'react-icons/fi';
import { AES, enc } from 'crypto-js';

import './styles.scss';

function Home(){
    const [selectedOption, setSelectedOption] = useState('encrypt');
    const [canConvert, setCanConvert] = useState(false);
    const [text, setText] = useState('');
    const [result, setResult] = useState(''); 
    const [key, setKey] = useState('');

    useEffect(()=> {
        if(text !== '' && key !== ''){
            setCanConvert(true)
        }else {
            setCanConvert(false);
        }
    }, [key, text, canConvert]);

    function handleChangeOption(): void{
        setText('');
        setResult('');

        selectedOption === 'encrypt' 
        ? setSelectedOption('decrypt') 
        : setSelectedOption('encrypt')
    }

    function handleConvertText(){
        if(selectedOption === 'encrypt'){
            const convertedText = AES.encrypt(text, key);
            setResult(convertedText.toString());
        }else{
            const decrypted = AES.decrypt(text, key);
            setResult(decrypted.toString(enc.Utf8)); 
        }
    }
    return (
        <main className='wrapper'>
            <header>
                <h1>Cryptor<strong>.</strong></h1>
                <p>Encrypt/Decrypt your text with a password.</p>
            </header>
            <div className="content">
                <div className='box'>
                    <ul>
                        <li 
                            className={selectedOption === 'encrypt' ? 'active' : ''}
                            onClick={handleChangeOption}
                        >Encrypt</li>
                        <li 
                            className={selectedOption === 'decrypt' ? 'active' : ''}
                            onClick={handleChangeOption}
                            >Decrypt</li>
                    </ul>
                    <textarea
                        placeholder={`Put your text to ${selectedOption} here...`}
                        onChange={e => setText(e.target.value)}
                        value={text}
                        rows={4}
                    />
                    <div className="boxFooterContainer">
                        <div className="keyContainer">
                            <FiKey />
                            <input 
                                type="text" 
                                placeholder="Your secret key here..."
                                onChange={e => setKey(e.target.value)}
                                value={key}
                            />
                        </div>
                        <button 
                            disabled={!canConvert}
                            onClick={handleConvertText}
                        >{selectedOption}
                        </button>
                    </div>
                </div>
                {
                    result !== '' && ( 
                    <div className='result'>
                       <div>
                            <p>{result}</p>
                       </div>
                       <button>
                           <FiCopy />
                           Copiar
                       </button>
                    </div>)
                }
            </div>
            <footer>
                <p>Created by <a href="https://github.com/vitorfrota" target="_blank" rel="noreferrer">Vitor Frota.</a></p>
            </footer>
        </main>
    )
}

export default Home;
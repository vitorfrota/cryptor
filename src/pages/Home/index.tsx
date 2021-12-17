import { useEffect, useState } from 'react';
import { FiKey } from 'react-icons/fi';
import './styles.scss';

function Home(){
    const [selectedOption, setSelectedOption] = useState('encrypt');
    const [canConvert, setCanConvert] = useState(false);
    const [text, setText] = useState('');
    const [key, setKey] = useState('');

    useEffect(()=> {
        if(text !== '' && key !== ''){
            setCanConvert(true)
        }else {
            setCanConvert(false);
        }
    }, [key, text, canConvert]);

    function handleChangeOption(){
        setText('');

        selectedOption === 'encrypt' 
        ? setSelectedOption('decrypt') 
        : setSelectedOption('encrypt')
    }
    return (
        <main className='wrapper'>
            <header>
                <h1>Cryptor<strong>.</strong></h1>
                <p>Encrypt/Decrypt your text with a password.</p>
            </header>
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
                            placeholder="Put your secret key here..."
                            onChange={e => setKey(e.target.value)}
                            value={key}
                        />
                    </div>
                    <button disabled={!canConvert}>{selectedOption}</button>
                </div>
            </div>
            <footer>Created by Vitor Frota.</footer>
        </main>
    )
}

export default Home;
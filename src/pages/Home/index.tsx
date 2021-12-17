import './styles.scss';

function Home(){
    return (
        <main className='wrapper'>
            <header>
                <h1>Cryptor<strong>.</strong></h1>
                <p>Encrypt/Decrypt your text with a password.</p>
            </header>
            <div className='box'>
                <ul>
                    <li>Encrypt</li>
                    <li>Decrypt</li>
                </ul>
                <textarea
                    placeholder="Put your text to encrypt here..."
                    rows={4}
                />
                <div className="boxFooterContainer">
                    <div className="keyContainer">
                        <input 
                            type="text" 
                            placeholder="Put your secret key here..."
                        />
                    </div>
                    <button>Encrypt</button>
                </div>
            </div>
            <footer>Created by Vitor Frota.</footer>
        </main>
    )
}

export default Home;
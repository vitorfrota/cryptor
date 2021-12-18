import { useContext } from 'react';
import { Formik } from 'formik';

import { FiKey } from 'react-icons/fi';

import { CryptorContext } from '../../contexts/CryptorContext';

import './styles.scss';

function Cryptor(){
    const { selectedOption, handleChangeOption, handleSubmit } = useContext(CryptorContext);

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
                >Decrypt
                </li>
            </ul>
            <Formik 
                initialValues={{ text: '', key: '' }}
                onSubmit={(values)=> handleSubmit(values)}
            >
            {
                ({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <textarea
                            placeholder={`Put your text to ${selectedOption} here...`}
                            name="text"
                            onChange={handleChange}
                            value={values.text}
                            rows={4}
                        />
                        <div className="boxFooterContainer">
                            <div className="keyContainer">
                                <FiKey />
                                <input 
                                    type="text" 
                                    name="key"
                                    placeholder="Your secret key here..."
                                    onChange={handleChange}
                                    value={values.key}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!(values.text !== '' && values.key !== '')}
                            >{selectedOption}
                            </button>
                        </div>
                    </form>
                )
            }
            </Formik>
        </div>
    )
}

export default Cryptor;
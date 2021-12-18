import { useContext, useEffect, useRef } from 'react';
import { FormHandles, useField } from '@unform/core';
import { Form } from '@unform/web';

import { FiKey } from 'react-icons/fi';

import { CryptorContext } from '../../contexts/CryptorContext';

import './styles.scss';

function KeyInput(){
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField('key');

    const { handleInputChange } = useContext(CryptorContext);

    useEffect(()=> {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return (
        <div className="keyContainer">
            <FiKey />
            <input 
                name="key"
                ref={inputRef}
                defaultValue={defaultValue}
                type="text"
                onChange={handleInputChange} 
                placeholder="Your secret key here..."
            />
        </div>
    )
}

function TextInput(){
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField('text');

    const { selectedOption, handleInputChange } = useContext(CryptorContext);

    useEffect(()=> {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return (
        <textarea 
            name="text"
            ref={inputRef}
            defaultValue={defaultValue}
            onChange={handleInputChange}
            placeholder={`Put your text to ${selectedOption} here...`}
            rows={4}
        />
    )
}

function Cryptor(){
    const formRef = useRef<FormHandles>(null);

    const { 
        canSubmit,
        formData,
        selectedOption, 
        handleChangeOption, 
        handleSubmit 
    } = useContext(CryptorContext);

    function handleSelectOption(option: 'encrypt' | 'decrypt'){
        formRef.current?.reset();

        handleChangeOption(option);
    }

    return (
        <div className='box'>
            <ul>
                <li 
                    className={selectedOption === 'encrypt' ? 'active' : ''}
                    onClick={()=> handleSelectOption('encrypt')}
                >Encrypt</li>
                <li 
                    className={selectedOption === 'decrypt' ? 'active' : ''}
                    onClick={()=> handleSelectOption('decrypt')}
                >Decrypt
                </li>
            </ul>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={formData}>
                <TextInput />
                <div className="boxFooterContainer">
                    <KeyInput />
                    <button
                        type="submit"
                        disabled={!canSubmit}
                    >{selectedOption}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default Cryptor;
import { createContext, useState } from "react";
import { decryptText, encryptText } from "../util/cryptUtil";

interface IFormData {
    text: string;
    key: string;
}

interface ICryptorContext {
    selectedOption: string;
    handleChangeOption(option: 'encrypt' | 'decrypt'): void;
    handleSubmit(content: any): void;
    result: string;
}

export const CryptorContext = createContext({} as ICryptorContext);

export const CryptorProvider: React.FC = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState<'encrypt'|'decrypt'>('encrypt');
    const [result, setResult] = useState('');

    function handleChangeOption(option: 'encrypt' | 'decrypt'){
        setResult('');
        setSelectedOption(option);
    }

    function handleSubmit(formData: IFormData){
        convertText(formData);
    }

    function convertText({ text, key }: IFormData){
        selectedOption === 'encrypt' 
        ? setResult(encryptText(text, key))
        : setResult(decryptText(text, key))
    }

    return (
        <CryptorContext.Provider 
            value={{
                handleSubmit,
                selectedOption,
                handleChangeOption,
                result
            }}
        >
            {children}
        </CryptorContext.Provider>
    )
}
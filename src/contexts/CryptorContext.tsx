import { ChangeEvent, createContext, useEffect, useState } from "react";
import { decryptText, encryptText } from "../util/cryptUtil";

interface IFormData {
    text: string;
    key: string;
}

interface ICryptorContext {
    canSubmit: boolean;
    formData: IFormData;
    selectedOption: string;
    handleChangeOption(option: 'encrypt' | 'decrypt'): void;
    handleInputChange(event: ChangeEvent): void;
    handleSubmit({ text, key }: IFormData): void;
    result: string;
}

export const CryptorContext = createContext({} as ICryptorContext);

export const CryptorProvider: React.FC = ({ children }) => {
    const [canSubmit, setCanSubmit] = useState(false);
    const [selectedOption, setSelectedOption] = useState<'encrypt'|'decrypt'>('encrypt');

    const [formData, setFormData] = useState({ text: '', key: '' });
    const [result, setResult] = useState('');

    useEffect(()=> {
        formData.key !== '' && formData.text !== ''
        ? setCanSubmit(true)
        : setCanSubmit(false)
    }, [formData]);

    function handleChangeOption(option: 'encrypt' | 'decrypt'){
        setFormData({ text: '', key: '' });
        setResult('');
        setSelectedOption(option);
    }

    function handleInputChange(event: any){
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit({ text, key }: IFormData){
        selectedOption === 'encrypt' 
        ? setResult(encryptText(text, key))
        : setResult(decryptText(text, key))
    }

    return (
        <CryptorContext.Provider 
            value={{
                canSubmit,
                formData,
                handleInputChange,
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
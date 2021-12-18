import { ChangeEvent, createContext, useCallback, useEffect, useState } from "react";
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
        formData.key !== '' && formData.key.length >= 5 && formData.text !== ''
        ? setCanSubmit(true)
        : setCanSubmit(false)
    }, [formData]);

    const handleChangeOption = useCallback((option: 'encrypt' | 'decrypt') => {
        setFormData({ text: '', key: '' });
        setResult('');
        setSelectedOption(option);
    }, []);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }, [formData]);

    const handleSubmit = useCallback(({ text, key }: IFormData) => {
        selectedOption === 'encrypt' 
        ? setResult(encryptText(text, key))
        : setResult(decryptText(text, key))
    }, [selectedOption]);

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
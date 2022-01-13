import './styles.scss';

interface IErrorProps {
    message: string;
}

export function Error({ message }: IErrorProps){
    return (
        <div className="containerError">
            <p>{message}</p>
        </div>
    )
};
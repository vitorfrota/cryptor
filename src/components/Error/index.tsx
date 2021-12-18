import './styles.scss';

interface IErrorProps {
    message: string;
}

function Error({ message }: IErrorProps){
    return (
        <div className="containerError">
            <p>{message}</p>
        </div>
    )
}

export default Error;
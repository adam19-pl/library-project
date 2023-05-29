import React from "react";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "./createBook.styles";
import MyImage from "../image/image";
import CreateForm from "./CreateForm/createform";


const CreateBook = ({ dataBooks, userEmail }) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <div className="imageContainer">
                <MyImage src={"/book.png"} alt={"Book Image"} width={180} />
            </div>
            <h2>Dodaj książkę</h2>
            <CreateForm dataBooks={dataBooks} />
            <button onClick={handleGoBack} className="back-button">Wróć</button>
        </Wrapper >
    );
};

export default CreateBook;
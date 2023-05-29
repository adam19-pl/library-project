import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from './borrowBook.styles';
import { Link } from "react-router-dom";
import MyImage from "../image/image";
import axiosInstance from "../../axios";

const BorrowBook = ({ userEmail }) => {

    const [backendError, setBackendError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const values = location.state.values;

    const handleSubmit = () => {
        const bookUrl = `books/${values.id}/`;
        values.status = 1;
        values.borrowed_by = userEmail;
        axiosInstance.put(bookUrl, values).then((res) => {
            navigate('/');
        }).catch((error) => {
            if (error.response.status === 400) {
                setBackendError(error.response.data.Error);
            }
        });
    }
    return (
        <Wrapper>
            <div className="imageContainer">
                <MyImage src={"/book.png"} alt={"Book Image"} width={180} />
            </div>
            <h2>Czy chcesz wypożyczyć książkę : "{location.state.values.title}" ?</h2>
            {backendError === '' ? null : <div className="backend-error">{backendError}</div>}
            <p>Opis : {location.state.values.description}</p>
            <h3>Autor : {location.state.values.author}</h3>
            <h2>Status : Możesz Wypożyczyć</h2>
            <button className="button-submit" onClick={handleSubmit}>Wypożycz</button>
            <button className="button-back" onClick={() => navigate(-1)}>Wróć</button>
        </Wrapper>
    )
}

export default BorrowBook;
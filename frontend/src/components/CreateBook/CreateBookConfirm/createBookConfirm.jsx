import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from './createBookConfirm.styles';
import { Link } from "react-router-dom";
import axiosInstance from "../../../axios";

const CreateBookConfirm = () => {

    const [backendError, setBackendError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const values = location.state.values;
    const handleSubmit = () => {
        axiosInstance.post('books/', values).then((res) => {
            navigate('/');
        }).catch((error) => {
            if (error.response.status === 400) {
                setBackendError(error.response.data.Error);
            }
        });
    }
    console.log('to są values', values);
    return (
        <Wrapper>
            {backendError === '' ? null : <div className="backend-error">{backendError}</div>}
            <h2>Title : {location.state.values.title}</h2>
            <h2>Description : {location.state.values.description}</h2>
            <h2>Status : {location.state.values.status === 0 ? 'New' : 'Old'}</h2>
            <Link to="/">Cancel</Link>
            <button className="button-back" onClick={() => navigate(-1)}>Go back</button>
            <button className="button-submit" onClick={handleSubmit}>Create</button>
        </Wrapper>
    )
}

export default CreateBookConfirm;
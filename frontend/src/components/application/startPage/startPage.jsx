import React from "react";
import { Wrapper } from "./startPage.styles";
import { Link } from "react-router-dom";
import MyImage from "../../image/image";

const StartApp = () => {
    return (
        <Wrapper>
            <div>
                <MyImage src={"/book.png"} alt={"Book Image"} width={180} />
            </div>
            <h2>Witaj w bibliotece</h2>
            <h4>Zarejestruj się lub zaloguj</h4>
            <div>
                <Link to="/login" className="login">Zaloguj</Link>
                <Link to="/register" className="register">Zarejestruj</Link>
            </div>
        </Wrapper>
    )
}

export default StartApp;
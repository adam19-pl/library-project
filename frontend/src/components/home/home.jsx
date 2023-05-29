import React, { useState, useEffect } from "react";
import { Wrapper } from "./home.styles";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import { Table } from 'reactstrap';
import Moment from 'moment';
import MyImage from "../image/image";

const Home = ({ userEmail, }) => {
    const [mounted, setMounted] = useState(false);
    const [dataBooks, setDataBooks] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!mounted) {
        axiosInstance.get('books/').then((res) => {
            setIsAuthenticated(true);
            setDataBooks(res.data);

        }).catch((error) => {
            if (error.response?.status === 401) {
                console.log(error.response);
            }
            console.log(error.response);
        });
    }

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <Wrapper>
            <div className="imageContainer">
                <MyImage src={"/book.png"} alt={"Book Image"} width={180} />
            </div>
            <div>
                <h2>Książki w bibliotece</h2>
            </div>
            {dataBooks.length === 0 ? <h3>Aktualnie nie posiadamy żadnej ksiązki w naszej bibliotece</h3> :
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                Tytuł
                            </th>
                            <th>
                                Autor
                            </th>
                            <th>
                                Dodane
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Akcje
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataBooks.map(book =>

                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{Moment(book.add_date).format('DD-MM-YYYY')}</td>
                                <td>{book.status === 0 ? <MyImage src={"/tick-mark-icon.png"} alt={"Book Image"} width={20} /> :
                                    <MyImage src={"/incorrect-icon.png"} alt={"Book Image"} width={20} />}
                                </td>
                                <td>{book.borrowed_by === null ? <Link to="/borrow" className="borrow-link" state={{ values: book }}>Wypożycz</Link> : book.borrowed_by === userEmail ? <Link to="/return" state={{ values: book }}>Oddaj</Link> : null}</td>
                            </tr>)}
                    </tbody>
                </Table>
            }
        </Wrapper>
    )
}

export default Home;
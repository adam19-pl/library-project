import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MyImage from '../image/image';
import { Link } from "react-router-dom";
import { Wrapper } from './searchBook.styles';
import { Table } from 'reactstrap';
import Moment from 'moment';
const SearchBook = ({ dataBooks, userEmail }) => {
    const navigate = useNavigate();
    const [state, setstate] = useState({
        query: '',
        list: dataBooks
    })
    const options = [
        { value: "title", text: "Po tytule" },
        { value: "author", text: "Po autorze" }
    ]
    const [selected, setSelected] = useState('');
    const handleChange = (e) => {

        const results = dataBooks.filter(book => {
            if (e.target.value === "" && !selected) {
                return dataBooks
            }
            return selected ? book[selected].toLowerCase().includes(e.target.value.toLowerCase()) : book.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setstate({
            query: e.target.value,
            list: results
        })
    }
    return (
        <Wrapper>
            <div>
                <MyImage src={"/book.png"} alt={"Book Image"} width={180} />
            </div>
            <h2>Znajdź interesującą Cię książkę</h2>
            <form>
                <input placeholder="Wpisz wyszukiwaną frazę" onChange={handleChange} value={state.query} type="search" />
                <select value={selected} onChange={e => {
                    setSelected(e.target.value);
                    return handleChange
                }}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </form>
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
                        {(state.list.map(book =>

                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{Moment(book.add_date).format('DD-MM-YYYY')}</td>
                                <td>{book.status === 0 ? <MyImage src={"/tick-mark-icon.png"} alt={"Book Image"} width={20} /> :
                                    <MyImage src={"/incorrect-icon.png"} alt={"Book Image"} width={20} />}
                                </td>
                                <td>{book.borrowed_by === null ? <Link to="/borrow" state={{ values: book }} className="borrow-link">Wypożycz</Link> : book.borrowed_by === userEmail ? <Link to="/return" state={{ values: book }}>Oddaj</Link> : null}</td>
                            </tr>))}
                    </tbody>
                </Table>
            }
            <button className="button-back" onClick={() => navigate(-1)}>Wróć</button>
        </Wrapper>
    )
}

export default SearchBook;
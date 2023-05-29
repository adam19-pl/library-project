import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import CreateBook from '../../CreateBook/createBook';
import BorrowBook from '../../BorrowBook/borrowBook';
import ReturnBook from '../../ReturnBook/returnBook';
import SearchBook from '../../SearchBook/searchBook';
import Home from '../../home/home';
import CreateBookConfirm from '../../CreateBook/CreateBookConfirm/createBookConfirm';



const AuthenticatedContainer = ({ dataBooks, userEmail }) => {
    return (
        <Routes>
            <Route path="/" element={<Home userEmail={userEmail} />} />
            <Route path="/add" element={<CreateBook dataBooks={dataBooks} userEmail={userEmail} />} />
            <Route path="/create/confirm" element={<CreateBookConfirm dataBooks={dataBooks} userEmail={userEmail} />} />
            <Route path="/borrow" element={<BorrowBook dataBooks={dataBooks} userEmail={userEmail} />} />
            <Route path="/return" element={<ReturnBook dataBooks={dataBooks} userEmail={userEmail} />} />
            <Route path="/search" element={<SearchBook dataBooks={dataBooks} userEmail={userEmail} />} />
        </Routes>
    )
}

export default AuthenticatedContainer;